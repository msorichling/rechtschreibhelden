/* ==========================================================================
   RECHTSCHREIB-HELDEN - GAMIFICATION ENGINE (STERNE, STREAKS, BADGES)
   ========================================================================== */

const GAMIFICATION = {
    // Standard-Zustand des Spielers
    state: {
        xp: 0,
        stars: 0,
        level: 1,
        activeDays: [],          // Array mit Datums-Strings (YYYY-MM-DD)
        completedDiktate: [],    // IDs geschriebener Diktate
        completedDetektiv: [],   // IDs gelöster Fehlersuchen
        completedWortBlitz: 0,   // Anzahl richtiger Wort-Blitze
        unlockedBadges: []       // IDs freigeschalteter Abzeichen
    },

    // Abzeichen-Definitionen
    badgeDefinitions: {
        "badge-tinte": {
            id: "badge-tinte",
            emoji: "✍️",
            title: "Tinte & Feder",
            description: "Du hast dein allererstes Diktat auf echtem Papier geschrieben!"
        },
        "badge-detektiv": {
            id: "badge-detektiv",
            emoji: "🦊",
            title: "Fehler-Spürhund",
            description: "Du hast erfolgreich deine erste Fehlersuche im Fehler-Detektiv gelöst!"
        },
        "badge-blitz": {
            id: "badge-blitz",
            emoji: "⚡",
            title: "Blitz-Schreiber",
            description: "Du hast 5 Wörter im Wort-Blitz blitzschnell richtig eingetippt!"
        },
        "badge-fleissig": {
            id: "badge-fleissig",
            emoji: "📅",
            title: "Fleißiger Held",
            description: "Du hast dein Wochen-Lernziel von 2 Trainingstagen erreicht!"
        },
        "badge-meister": {
            id: "badge-meister",
            emoji: "🏆",
            title: "Diktat-Meister",
            description: "Du hast alle 20 Diktate erfolgreich absolviert!"
        }
    },

    init() {
        this.loadState();
        this.registerToday();
        this.injectCustomStyles();
        this.updateStatusUI();
    },

    loadState() {
        const saved = localStorage.getItem("rechtschreib_helden_state");
        if (saved) {
            try {
                this.state = Object.assign({}, this.state, JSON.parse(saved));
            } catch (e) {
                console.error("Fehler beim Laden des Spielstands:", e);
            }
        }
    },

    saveState() {
        localStorage.setItem("rechtschreib_helden_state", JSON.stringify(this.state));
    },

    registerToday() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;
        
        if (!this.state.activeDays.includes(todayStr)) {
            this.state.activeDays.push(todayStr);
            this.saveState();
        }
    },

    getWeeklyStreak() {
        const today = new Date();
        const currentDay = today.getDay(); // 0 ist Sonntag, 1 ist Montag
        // Offset berechnen, um den letzten Montag zu finden
        const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
        
        const monday = new Date(today);
        monday.setDate(today.getDate() + mondayOffset);
        
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(monday);
            day.setDate(monday.getDate() + i);
            const yyyy = day.getFullYear();
            const mm = String(day.getMonth() + 1).padStart(2, '0');
            const dd = String(day.getDate()).padStart(2, '0');
            weekDates.push(`${yyyy}-${mm}-${dd}`);
        }
        
        const dots = weekDates.map(dateStr => this.state.activeDays.includes(dateStr));
        const activeCount = dots.filter(active => active).length;
        
        return {
            activeCount: activeCount,
            goal: 2,
            isActive: activeCount >= 2,
            dots: dots
        };
    },

    addReward(xpEarned, starsEarned) {
        this.state.xp += xpEarned;
        this.state.stars += starsEarned;
        
        const newLevel = Math.floor(this.state.xp / 100) + 1;
        if (newLevel > this.state.level) {
            this.state.level = newLevel;
            this.showLevelUpNotification();
        }
        
        this.saveState();
        this.updateStatusUI();
        this.checkBadges();
    },

    showLevelUpNotification() {
        const notif = document.createElement("div");
        notif.className = "level-up-notification";
        notif.innerHTML = `
            <div class="level-up-content">
                <i class="fa-solid fa-crown level-up-crown"></i>
                <h3>LEVEL UP!</h3>
                <p>Du bist jetzt Level <strong>${this.state.level}</strong>!</p>
            </div>
        `;
        document.body.appendChild(notif);
        
        // Animation auslösen
        setTimeout(() => {
            notif.classList.add("show");
        }, 10);
        
        // Nach 3 Sekunden entfernen
        setTimeout(() => {
            notif.classList.remove("show");
            notif.classList.add("fade-out");
            setTimeout(() => notif.remove(), 500);
        }, 3000);
    },

    checkBadges() {
        const newUnlocks = [];
        
        // Tinte & Feder (erstes Diktat beendet)
        if (this.state.completedDiktate.length >= 1 && !this.state.unlockedBadges.includes("badge-tinte")) {
            newUnlocks.push("badge-tinte");
        }
        
        // Fehler-Spürhund (erste Fehlersuche)
        if (this.state.completedDetektiv.length >= 1 && !this.state.unlockedBadges.includes("badge-detektiv")) {
            newUnlocks.push("badge-detektiv");
        }
        
        // Blitz-Schreiber (5 Wort-Blitze gelöst)
        if (this.state.completedWortBlitz >= 5 && !this.state.unlockedBadges.includes("badge-blitz")) {
            newUnlocks.push("badge-blitz");
        }
        
        // Fleißiger Held (Wochenstreak erreicht - 2 Tage aktiv)
        const streakInfo = this.getWeeklyStreak();
        if (streakInfo.activeCount >= 2 && !this.state.unlockedBadges.includes("badge-fleissig")) {
            newUnlocks.push("badge-fleissig");
        }
        
        // Diktat-Meister (Alle 20 Diktate absolviert)
        if (typeof DIKTAT_DATA !== "undefined" && DIKTAT_DATA.diktate) {
            if (this.state.completedDiktate.length >= DIKTAT_DATA.diktate.length && !this.state.unlockedBadges.includes("badge-meister")) {
                newUnlocks.push("badge-meister");
            }
        }
        
        if (newUnlocks.length > 0) {
            newUnlocks.forEach(badgeId => {
                this.state.unlockedBadges.push(badgeId);
                this.triggerBadgeUnlock(badgeId);
            });
            this.saveState();
        }
    },

    triggerBadgeUnlock(badgeId) {
        const badge = this.badgeDefinitions[badgeId];
        if (!badge) return;
        
        const modal = document.getElementById("badge-unlock-modal");
        const cardContainer = document.getElementById("unlocked-badge-card");
        
        if (modal && cardContainer) {
            cardContainer.innerHTML = `
                <div class="badge-celebration-card" style="text-align: center; padding: 20px;">
                    <div style="font-size: 4.5rem; margin-bottom: 15px; animation: bounce 1s infinite alternate;">
                        ${badge.emoji}
                    </div>
                    <h3 style="font-size: 1.6rem; color: var(--color-primary-dark); font-weight: 700;">
                        ${badge.title}
                    </h3>
                    <p style="color: var(--color-text); margin-top: 10px; font-size: 0.95rem;">
                        ${badge.description}
                    </p>
                </div>
            `;
            modal.classList.add("show");
            
            // Konfetti-Regen auslösen
            const confettiContainer = document.getElementById("modal-confetti");
            if (confettiContainer) {
                this.createConfetti(confettiContainer);
            }
        }
    },

    createConfetti(container) {
        container.innerHTML = "";
        const colors = ["#ffd700", "#ffa500", "#ff6b6b", "#4ecdc4", "#45aaf2", "#a55eea"];
        for (let i = 0; i < 60; i++) {
            const confetti = document.createElement("div");
            confetti.style.position = "absolute";
            confetti.style.width = `${Math.random() * 8 + 6}px`;
            confetti.style.height = `${Math.random() * 8 + 6}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * -20}px`;
            confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "3px";
            confetti.style.opacity = Math.random() * 0.5 + 0.5;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            const duration = Math.random() * 2 + 1.5;
            const delay = Math.random() * 0.5;
            confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
            
            container.appendChild(confetti);
        }
    },

    updateStatusUI() {
        const levelVal = document.getElementById("hero-level");
        const xpBar = document.getElementById("hero-xp-bar");
        const starsVal = document.getElementById("hero-stars");
        const streakVal = document.getElementById("hero-streak");
        const streakIcon = document.getElementById("streak-icon-fire");
        const dotsContainer = document.getElementById("streak-dots-container");
        
        if (levelVal) levelVal.innerText = `Level ${this.state.level}`;
        if (xpBar) {
            const xpInCurrentLevel = this.state.xp % 100;
            xpBar.style.width = `${xpInCurrentLevel}%`;
        }
        if (starsVal) starsVal.innerText = this.state.stars;

        const streakInfo = this.getWeeklyStreak();

        if (streakVal) {
            streakVal.innerText = `${streakInfo.activeCount}/${streakInfo.goal} Tage`;
        }

        if (streakIcon) {
            if (streakInfo.activeCount > 0) {
                streakIcon.classList.add("active");
                streakIcon.style.color = "var(--color-danger)";
            } else {
                streakIcon.classList.remove("active");
                streakIcon.style.color = "var(--color-text-muted)";
            }
        }

        if (dotsContainer) {
            dotsContainer.innerHTML = "";
            const weekdayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
            streakInfo.dots.forEach((isActive, index) => {
                const dot = document.createElement("div");
                dot.className = `streak-dot ${isActive ? 'active' : ''}`;
                dot.title = `${weekdayNames[index]}: ${isActive ? 'Trainiert!' : 'Noch kein Training'}`;
                dotsContainer.appendChild(dot);
            });
        }
    },

    injectCustomStyles() {
        if (!document.getElementById("gamification-custom-styles")) {
            const style = document.createElement("style");
            style.id = "gamification-custom-styles";
            style.innerHTML = `
                .level-up-notification {
                    position: fixed;
                    top: 25%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0.5);
                    background: linear-gradient(135deg, #ffd700, #ffa500);
                    color: white;
                    padding: 24px 40px;
                    border-radius: var(--border-radius-lg);
                    box-shadow: 0 10px 30px rgba(255, 165, 0, 0.4);
                    z-index: 10000;
                    text-align: center;
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .level-up-notification.show {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                .level-up-notification.fade-out {
                    opacity: 0;
                    transform: translate(-50%, -60%) scale(0.8);
                }
                .level-up-crown {
                    font-size: 3rem;
                    color: white;
                    margin-bottom: 8px;
                    text-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }
                @keyframes fall {
                    to {
                        top: 100%;
                        transform: translateY(100%) rotate(720deg);
                        opacity: 0;
                    }
                }
                .streak-dot.active {
                    background-color: var(--color-danger);
                    box-shadow: 0 0 8px var(--color-danger);
                }
            `;
            document.head.appendChild(style);
        }
    }
};

// Modal Schließen Logik initialisieren
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("badge-unlock-modal");
    const closeBtn = document.getElementById("badge-close-btn");
    
    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    }
});
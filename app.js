/* ==========================================================================
   RECHTSCHREIB-HELDEN - CENTRAL APP CONTROLLER & ROUTER
   ========================================================================== */

const APP = {
    // Aktueller Zustand der App-Ansicht
    currentView: "dashboard",
    selectedGrade: 5, // Standardmäßig Klasse 5

    init() {
        // 1. Gamification initialisieren
        GAMIFICATION.init();

        // 2. Gespeicherte Klasse laden
        const savedGrade = localStorage.getItem("rechtschreib_helden_grade");
        if (savedGrade) {
            this.selectedGrade = parseInt(savedGrade);
        }

        // 3. Navigationselemente anbinden
        this.setupNavigation();

        // 4. Erste Ansicht (Dashboard) rendern
        this.switchView("dashboard");
    },

    // Navigations-Eventlistener einrichten
    setupNavigation() {
        const navItems = document.querySelectorAll(".nav-item");
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                const targetView = item.getAttribute("data-target");
                this.switchView(targetView);
            });
        });

        const logo = document.getElementById("nav-logo");
        if (logo) {
            logo.addEventListener("click", () => {
                this.switchView("dashboard");
            });
        }
    },

    // Ansicht wechseln (SPA Router)
    switchView(viewName) {
        this.currentView = viewName;

        // Navigation visualisieren
        document.querySelectorAll(".nav-item").forEach(item => {
            if (item.getAttribute("data-target") === viewName) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Laufendes Audio beenden
        if (typeof DIKTAT_STUDIO !== "undefined" && DIKTAT_STUDIO.stopAudio) {
            DIKTAT_STUDIO.stopAudio();
        }
        if (typeof WORT_BLITZ !== "undefined" && WORT_BLITZ.stopAudio) {
            WORT_BLITZ.stopAudio();
        }

        const container = document.getElementById("active-view-container");
        if (!container) return;

        // View laden
        if (viewName === "dashboard") {
            this.renderDashboard(container);
        } else if (viewName === "diktat-studio") {
            DIKTAT_STUDIO.renderList(container);
        } else if (viewName === "fehler-detektiv") {
            FEHLER_DETEKTIV.renderList(container);
        } else if (viewName === "wort-blitz") {
            WORT_BLITZ.renderGame(container);
        }
        
        window.scrollTo(0, 0);
    },

    // Klassenstufe wechseln
    setGrade(gradeNum) {
        this.selectedGrade = gradeNum;
        localStorage.setItem("rechtschreib_helden_grade", gradeNum);
        
        // Aktuelle Ansicht neu laden, um die Änderungen anzuzeigen
        this.switchView(this.currentView);
        
        // Gamification UI aktualisieren
        GAMIFICATION.updateStatusUI();
    },

    // Dashboard rendern
    renderDashboard(container) {
        const weekly = GAMIFICATION.getWeeklyStreak();
        const streakText = weekly.isActive 
            ? "Klasse! Du hast dein Lernziel für diese Woche erreicht. Mach weiter so! 🎉" 
            : `Übe noch an ${weekly.goal - weekly.activeCount} Tag(en), um dein Wochen-Lernziel zu erreichen! 💪`;

        let html = `
            <!-- Willkommens-Box -->
            <div class="dashboard-card welcome-card" style="background: linear-gradient(135deg, var(--color-primary-light), hsl(var(--hue-primary), 80%, 88%)); border-color: var(--color-primary); display: flex; align-items: center; gap: 24px; padding: 24px; border-radius: var(--border-radius-lg); margin-bottom: 24px;">
                <div class="welcome-text" style="flex: 1;">
                    <h1 style="font-size: 1.8rem; font-weight: 800; color: var(--color-primary-dark); margin: 0 0 8px 0;">Hallo, Rechtschreib-Held!</h1>
                    <p style="color: var(--color-text); font-size: 0.95rem; line-height: 1.5; margin: 0;">Bereit für dein heutiges Rechtschreib-Training? Wähle eine Aktivität aus und sammle fleißig Sterne!</p>
                </div>
                <img src="fuchs.png" alt="Helden-Fuchs" class="welcome-avatar" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid white; box-shadow: var(--shadow-sm); object-fit: cover;">
            </div>

            <div class="dashboard-grid">
                <!-- Hauptbereich -->
                <div class="dashboard-main" style="display: flex; flex-direction: column; gap: 24px;">
                    <!-- Klassenstufe-Auswahl -->
                    <div class="dashboard-card">
                        <h2><i class="fa-solid fa-graduation-cap" style="color: var(--color-primary);"></i> Deine Klassenstufe</h2>
                        <p style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: 16px;">Wähle deine Klasse aus, um die passenden Übungen anzuzeigen:</p>
                        <div class="grade-toggle" style="display: flex; gap: 12px;">
                            <button class="btn ${this.selectedGrade === 5 ? 'btn-primary' : 'btn-secondary'}" onclick="APP.setGrade(5)" id="grade-5-btn">Klasse 5</button>
                            <button class="btn ${this.selectedGrade === 6 ? 'btn-primary' : 'btn-secondary'}" onclick="APP.setGrade(6)" id="grade-6-btn">Klasse 6</button>
                        </div>
                    </div>

                    <!-- Direkt-Start Aktivitäten -->
                    <div class="dashboard-card">
                        <h2><i class="fa-solid fa-rocket" style="color: var(--color-primary);"></i> Direkt-Start</h2>
                        <p style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: 16px;">Wähle ein Spiel oder Diktat aus, um loszulegen:</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                            <div class="diktat-card" style="cursor: pointer;" onclick="APP.switchView('diktat-studio')">
                                <i class="fa-solid fa-pen-nib" style="font-size: 2rem; color: var(--color-primary);"></i>
                                <h3 style="margin-top: 8px;">Diktat-Studio</h3>
                                <p style="font-size: 0.8rem; color: var(--color-text-muted);">Satz für Satz üben und auf Papier mitschreiben.</p>
                            </div>
                            <div class="diktat-card" style="cursor: pointer;" onclick="APP.switchView('fehler-detektiv')">
                                <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--color-success);"></i>
                                <h3 style="margin-top: 8px;">Fehler-Detektiv</h3>
                                <p style="font-size: 0.8rem; color: var(--color-text-muted);">Spüre Rechtschreibfehler in Texten auf.</p>
                            </div>
                            <div class="diktat-card" style="cursor: pointer;" onclick="APP.switchView('wort-blitz')">
                                <i class="fa-solid fa-bolt" style="font-size: 2rem; color: var(--color-accent);"></i>
                                <h3 style="margin-top: 8px;">Wort-Blitz</h3>
                                <p style="font-size: 0.8rem; color: var(--color-text-muted);">Schnelles Wort-Diktat mit Lückensätzen.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="dashboard-sidebar" style="display: flex; flex-direction: column; gap: 24px;">
                    <!-- Aktivitätskarte -->
                    <div class="dashboard-card">
                        <h2><i class="fa-solid fa-fire" style="color: var(--color-danger);"></i> Aktivität</h2>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 12px;">Dein Ziel: Mindestens 2 Trainingstage pro Woche!</p>
                        <div style="font-size: 1.4rem; font-weight: 700; color: var(--color-text); margin-bottom: 8px;">
                            ${weekly.activeCount} von ${weekly.goal} Tagen
                        </div>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-top: 8px;">
                            ${streakText}
                        </p>
                    </div>

                    <!-- Abzeichen Galerie -->
                    <div class="dashboard-card">
                        <h2><i class="fa-solid fa-award" style="color: var(--color-primary)"></i> Deine Abzeichen</h2>
                        <p style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 20px;">
                            Sammle Sterne in Diktaten und Spielen, um diese Medaillen freizuschalten!
                        </p>
                        
                        <div class="badges-container">
        `;

        // Badges durchlaufen und anzeigen
        Object.keys(GAMIFICATION.badgeDefinitions).forEach(badgeId => {
            const badge = GAMIFICATION.badgeDefinitions[badgeId];
            const isUnlocked = GAMIFICATION.state.unlockedBadges.includes(badgeId);
            
            html += `
                <div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'}" title="${badge.title}: ${badge.description}">
                    <div class="badge-circle" style="${!isUnlocked ? 'opacity: 0.3; filter: grayscale(1);' : ''}">
                        ${badge.emoji}
                    </div>
                    <span class="badge-title" style="font-size: 0.75rem; margin-top: 4px; display: block; font-weight: ${isUnlocked ? '600' : '400'}">${badge.title}</span>
                </div>
            `;
        });

        html += `
                        </div>
                    </div>

                </div>
            </div>
        `;

        container.innerHTML = html;
    }
};

// Startet die App, sobald das Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {
    APP.init();
});
/* ==========================================================================
   RECHTSCHREIB-HELDEN - DIKTAT-STUDIO COMPONENT
   ========================================================================== */

const DIKTAT_STUDIO = {
    activeDiktat: null,
    currentSentenceIndex: 0,
    isPlaying: false,
    speed: 1.0,
    audioInstance: null,
    speechSynthesisUtterance: null,

    // 1. Liste der Diktate für die aktuelle Klassenstufe anzeigen
    renderList(container) {
        // Filtere Diktate nach ausgewählter Klasse (5 oder 6)
        const filteredDiktate = DIKTAT_DATA.diktate.filter(d => d.klasse === APP.selectedGrade);

        let html = `
            <div style="margin-bottom: 24px;">
                <h2 style="font-size: 1.8rem; font-weight: 800;"><i class="fa-solid fa-pen-nib" style="color:var(--color-primary)"></i> Das Diktat-Studio</h2>
                <p style="color: var(--color-text-muted); font-size: 1rem; margin-top: 4px;">
                    Schreibe das Diktat mit der Hand auf ein Blatt Papier oder in dein Heft. Der Player diktiert dir Satz für Satz.
                </p>
            </div>

            <div class="diktat-list">
        `;

        if (filteredDiktate.length === 0) {
            html += `<p>Keine Diktate für diese Klassenstufe gefunden.</p>`;
        } else {
            filteredDiktate.forEach(d => {
                const isCompleted = GAMIFICATION.state.completedDiktate.includes(d.id);
                html += `
                    <div class="diktat-card">
                        <span class="diktat-badge">${d.schwerpunkt}</span>
                        <h3 style="margin-top: 8px; font-weight: 700; font-size: 1.2rem;">${d.titel}</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); flex-grow: 1; line-height: 1.4;">${d.beschreibung}</p>
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; color: var(--color-text-muted); margin-top: 12px; border-top: 1px solid var(--color-border); padding-top: 12px;">
                            <span><i class="fa-regular fa-clock"></i> ${d.dauer}</span>
                            <span><i class="fa-solid fa-list-ol"></i> ${d.saetze.length} Sätze</span>
                        </div>
                        <button class="btn btn-primary" style="margin-top: 12px; width: 100%;" onclick="DIKTAT_STUDIO.startDiktat('${d.id}')">
                            ${isCompleted ? '<i class="fa-solid fa-circle-check"></i> Erneut schreiben' : '<i class="fa-solid fa-play"></i> Diktat starten'}
                        </button>
                    </div>
                `;
            });
        }

        html += `</div>`;
        container.innerHTML = html;
    },

    // Diktat-Player starten
    startDiktat(diktatId) {
        const d = DIKTAT_DATA.diktate.find(item => item.id === diktatId);
        if (!d) return;

        this.activeDiktat = d;
        this.currentSentenceIndex = 0;
        this.isPlaying = false;
        
        const container = document.getElementById("active-view-container");
        this.renderPlayer(container);
    },

    // Player-Oberfläche rendern
    renderPlayer(container) {
        let html = `
            <div style="margin-bottom: 20px;">
                <button class="btn btn-secondary" onclick="APP.switchView('diktat-studio')">
                    <i class="fa-solid fa-arrow-left"></i> Zurück zur Übersicht
                </button>
            </div>

            <div class="dashboard-card" id="player-controls-container" style="text-align: center; padding: 32px; max-width: 600px; margin: 0 auto 24px auto;">
                <span class="diktat-badge" style="margin-bottom: 12px; display: inline-block;">${this.activeDiktat.schwerpunkt}</span>
                <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">${this.activeDiktat.titel}</h2>
                <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 24px;">
                    Schreibe jeden Satz auf Papier auf. Nutze die Knöpfe unten, um die Sätze zu steuern.
                </p>

                <!-- Fortschrittsanzeige -->
                <div style="margin-bottom: 24px;">
                    <span id="sentence-progress-text" style="font-size: 0.9rem; font-weight: 600; display: block; margin-bottom: 8px; color: var(--color-primary-dark);">
                        Satz 1 von ${this.activeDiktat.saetze.length}
                    </span>
                    <div class="xp-bar-container" style="height: 10px; background-color: var(--color-border); border-radius: 5px;">
                        <div class="xp-bar" id="sentence-progress-bar" style="width: ${100 / this.activeDiktat.saetze.length}%; height: 100%; border-radius: 5px;"></div>
                    </div>
                </div>

                <!-- Steuerungs-Knöpfe -->
                <div style="display: flex; justify-content: center; align-items: center; gap: 24px; margin-bottom: 24px;">
                    <button class="btn btn-secondary" id="prev-btn" style="width: 50px; height: 50px; border-radius: 50%; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="DIKTAT_STUDIO.prevSentence()" disabled>
                        <i class="fa-solid fa-backward"></i>
                    </button>
                    
                    <button class="btn btn-primary" id="play-btn" style="width: 70px; height: 70px; border-radius: 50%; padding: 0; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(var(--color-primary-light), 0.4);" onclick="DIKTAT_STUDIO.togglePlay()">
                        <i class="fa-solid fa-play" id="play-icon"></i>
                    </button>
                    
                    <button class="btn btn-secondary" id="next-btn" style="width: 50px; height: 50px; border-radius: 50%; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="DIKTAT_STUDIO.nextSentence()">
                        <i class="fa-solid fa-forward"></i>
                    </button>
                </div>

                <!-- Geschwindigkeit -->
                <div style="background: var(--color-bg); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--color-border);">
                    <span style="font-size: 0.8rem; font-weight: 700; display: block; margin-bottom: 8px; color: var(--color-text);">
                        <i class="fa-solid fa-gauge-high"></i> Vorlese-Geschwindigkeit:
                    </span>
                    <div style="display: flex; justify-content: center; gap: 8px;">
                        <button class="btn btn-secondary speed-btn ${this.speed === 0.8 ? 'active' : ''}" id="speed-08" style="padding: 6px 12px; font-size: 0.8rem;" onclick="DIKTAT_STUDIO.setSpeed(0.8)">🐌 Langsam</button>
                        <button class="btn btn-secondary speed-btn ${this.speed === 0.9 ? 'active' : ''}" id="speed-09" style="padding: 6px 12px; font-size: 0.8rem;" onclick="DIKTAT_STUDIO.setSpeed(0.9)">🦊 Gemütlich</button>
                        <button class="btn btn-secondary speed-btn ${this.speed === 1.0 ? 'active' : ''}" id="speed-10" style="padding: 6px 12px; font-size: 0.8rem;" onclick="DIKTAT_STUDIO.setSpeed(1.0)">⚡ Normal</button>
                    </div>
                </div>
            </div>

            <!-- Korrektur-Bereich (wird am Ende eingeblendet) -->
            <div id="correction-panel" style="display: none; margin-top: 32px;" class="dashboard-card">
                <h3 style="font-size: 1.4rem; color: var(--color-success-dark); font-weight: 700; display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                    <i class="fa-solid fa-circle-check"></i> Diktat beendet! Zeit zur Selbstkorrektur
                </h3>
                <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 20px;">
                    Vergleiche jetzt deinen geschriebenen Text auf dem Papier mit der Musterlösung unten. Klicke auf die <strong>blau hinterlegten Wörter</strong>, um die Rechtschreibregeln zu sehen!
                </p>
                <div class="correction-box" style="background: var(--color-bg); padding: 20px; border-radius: var(--border-radius-md); border: 2px solid var(--color-border); line-height: 1.8; font-size: 1.1rem; color: var(--color-text); margin-bottom: 20px;">
                    <div id="correction-text-display"></div>
                </div>
                
                <div id="active-rule-display" style="margin-bottom: 24px;">
                    <!-- Hier wird die Regel angezeigt -->
                </div>
                
                <button class="btn btn-success" style="width: 100%; font-weight: 700; padding: 12px;" onclick="DIKTAT_STUDIO.completeDiktat()">
                    <i class="fa-solid fa-star"></i> Diktat abschließen (+50 Sterne, +50 XP)
                </button>
            </div>
        `;
        container.innerHTML = html;
        this.updatePlayerUI();
    },

    // Satz vorlesen (mit satzweisen MP3s oder TTS-Fallback)
    playCurrentSentence() {
        this.stopAudio();
        this.isPlaying = true;
        
        const playIcon = document.getElementById("play-icon");
        if (playIcon) {
            playIcon.className = "fa-solid fa-pause";
        }
        
        const sentenceText = this.activeDiktat.saetze[this.currentSentenceIndex];
        const audioUrl = this.activeDiktat.saetzeAudio && this.activeDiktat.saetzeAudio[this.currentSentenceIndex];
        
        if (audioUrl) {
            this.audioInstance = new Audio(audioUrl);
            this.audioInstance.playbackRate = this.speed;
            
            this.audioInstance.play().then(() => {
                this.audioInstance.onended = () => {
                    this.isPlaying = false;
                    if (playIcon) playIcon.className = "fa-solid fa-play";
                };
            }).catch(err => {
                console.warn("Fehler beim Laden des MP3-Audios, starte Sprachausgabe...", err);
                this.playTTS(sentenceText);
            });
        } else {
            this.playTTS(sentenceText);
        }
    },

    playTTS(text) {
        window.speechSynthesis.cancel();
        
        this.speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
        this.speechSynthesisUtterance.lang = "de-DE";
        this.speechSynthesisUtterance.rate = this.speed;
        
        const playIcon = document.getElementById("play-icon");
        
        this.speechSynthesisUtterance.onend = () => {
            this.isPlaying = false;
            if (playIcon) playIcon.className = "fa-solid fa-play";
        };
        
        this.speechSynthesisUtterance.onerror = (e) => {
            console.error("TTS Sprachausgabe Fehler:", e);
            this.isPlaying = false;
            if (playIcon) playIcon.className = "fa-solid fa-play";
        };
        
        window.speechSynthesis.speak(this.speechSynthesisUtterance);
    },

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.playCurrentSentence();
        }
    },

    pause() {
        this.isPlaying = false;
        const playIcon = document.getElementById("play-icon");
        if (playIcon) {
            playIcon.className = "fa-solid fa-play";
        }
        
        if (this.audioInstance) {
            this.audioInstance.pause();
        }
        window.speechSynthesis.cancel();
    },

    prevSentence() {
        this.stopAudio();
        if (this.currentSentenceIndex > 0) {
            this.currentSentenceIndex--;
            this.updatePlayerUI();
            this.playCurrentSentence();
        }
    },

    nextSentence() {
        this.stopAudio();
        if (this.currentSentenceIndex < this.activeDiktat.saetze.length - 1) {
            this.currentSentenceIndex++;
            this.updatePlayerUI();
            this.playCurrentSentence();
        } else {
            this.showCorrectionScreen();
        }
    },

    updatePlayerUI() {
        const progressText = document.getElementById("sentence-progress-text");
        if (progressText) {
            progressText.innerText = `Satz ${this.currentSentenceIndex + 1} von ${this.activeDiktat.saetze.length}`;
        }
        
        const progressBar = document.getElementById("sentence-progress-bar");
        if (progressBar) {
            const percent = ((this.currentSentenceIndex + 1) / this.activeDiktat.saetze.length) * 100;
            progressBar.style.width = `${percent}%`;
        }
        
        const prevBtn = document.getElementById("prev-btn");
        if (prevBtn) {
            prevBtn.disabled = this.currentSentenceIndex === 0;
        }
        
        const nextBtn = document.getElementById("next-btn");
        if (nextBtn) {
            if (this.currentSentenceIndex === this.activeDiktat.saetze.length - 1) {
                nextBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
                nextBtn.title = "Diktat abschließen & Selbstkorrektur öffnen";
            } else {
                nextBtn.innerHTML = '<i class="fa-solid fa-forward"></i>';
                nextBtn.title = "Nächster Satz";
            }
        }
    },

    showCorrectionScreen() {
        this.buildCorrectionText();

        const panel = document.getElementById("correction-panel");
        if (panel) {
            panel.style.display = "block";
            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        }
        
        const playerControls = document.getElementById("player-controls-container");
        if (playerControls) {
            playerControls.style.display = "none";
        }
    },

    // Musterlösung mit interaktiven Links aufbauen
    buildCorrectionText() {
        const display = document.getElementById("correction-text-display");
        if (!display) return;

        let rawText = this.activeDiktat.ganzerText;
        const focusWords = this.activeDiktat.schwerpunktWoerter;

        // Wir ersetzen schwierige Wörter durch interaktive Spans
        // Um Konflikte zu vermeiden, sortieren wir die Wörter nach Länge (längere zuerst)
        const sortedWords = Object.keys(focusWords).sort((a, b) => b.length - a.length);

        sortedWords.forEach(word => {
            // Regex um das Wort zu finden (Wortgrenzen beachten)
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            rawText = rawText.replace(regex, `<span class="spelling-focus" onclick="DIKTAT_STUDIO.showRule('${word}')">${word}</span>`);
        });

        display.innerHTML = rawText;
    },

    // Eine Rechtschreibregel einblenden
    showRule(word) {
        const rule = this.activeDiktat.schwerpunktWoerter[word];
        const display = document.getElementById("active-rule-display");
        if (!rule || !display) return;

        display.innerHTML = `
            <div class="rule-popover" style="background: var(--color-primary-light); padding: 16px; border-radius: var(--border-radius-md); border-left: 5px solid var(--color-primary); margin-top: 16px;">
                <h4 style="margin: 0 0 6px 0; color: var(--color-primary-dark); font-weight: 700; font-size: 1rem;">
                    <i class="fa-solid fa-graduation-cap"></i> Regel für "${word}": ${rule.regelTitel || rule.ruleTitel}
                </h4>
                <p style="margin: 0; color: var(--color-text); font-size: 0.9rem; line-height: 1.4;">${rule.regelErklaerung || rule.ruleErklaerung}</p>
            </div>
        `;
    },

    // Diktat endgültig abschließen und Belohnung gutschreiben
    completeDiktat() {
        const d = this.activeDiktat;
        
        if (!GAMIFICATION.state.completedDiktate.includes(d.id)) {
            GAMIFICATION.state.completedDiktate.push(d.id);
        }

        // Belohnung gutschreiben (50 XP, 50 Sterne)
        GAMIFICATION.addReward(50, 50);

        // Zurück zur Liste
        APP.switchView("diktat-studio");
    },

    // Geschwindigkeit einstellen
    setSpeed(speedVal) {
        this.speed = speedVal;
        
        document.querySelectorAll(".speed-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        if (speedVal === 1.0) document.getElementById("speed-10").classList.add("active");
        if (speedVal === 0.9) document.getElementById("speed-09").classList.add("active");
        if (speedVal === 0.8) document.getElementById("speed-08").classList.add("active");

        if (this.isPlaying) {
            if (this.activeDiktat.audioUrl && this.audioInstance) { // wait, audioUrl or saetzeAudio? It should check this.audioInstance
                this.audioInstance.playbackRate = speedVal;
            } else if (this.audioInstance) {
                this.audioInstance.playbackRate = speedVal;
            } else if (this.speechSynthesisUtterance) {
                this.stopAudio();
                this.playCurrentSentence();
            }
        }
    },

    // Audio-Wiedergabe sauber stoppen
    stopAudio() {
        if (this.audioInstance) {
            this.audioInstance.pause();
            this.audioInstance = null;
        }
        window.speechSynthesis.cancel();
        this.isPlaying = false;
        const playIcon = document.getElementById("play-icon");
        if (playIcon) {
            playIcon.className = "fa-solid fa-play";
        }
    }
};
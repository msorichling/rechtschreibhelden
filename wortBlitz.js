/* ==========================================================================
   RECHTSCHREIB-HELDEN - WORT-BLITZ (EINZELWORT-TRAINING)
   ========================================================================== */

const WORT_BLITZ = {
    wordsQueue: [],
    currentIndex: 0,
    correctStreak: 0,
    currentWord: null,
    isPlayingAudio: false,
    activeAudio: null,

    // 1. Wort-Blitz Spielrunde initialisieren
    renderGame(container) {
        // Filtere Wörter nach Klassenstufe
        const filteredWords = DIKTAT_DATA.wortBlitzWoerter.filter(w => w.klasse === APP.selectedGrade);

        if (filteredWords.length === 0) {
            container.innerHTML = `<p>Keine Übungswörter für diese Klassenstufe gefunden.</p>`;
            return;
        }

        // Mische die Wörter zufällig (Fisher-Yates Shuffle)
        this.wordsQueue = [...filteredWords];
        for (let i = this.wordsQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.wordsQueue[i], this.wordsQueue[j]] = [this.wordsQueue[j], this.wordsQueue[i]];
        }

        // Begrenze auf maximal 6 Wörter pro Spielrunde
        this.wordsQueue = this.wordsQueue.slice(0, 6);
                
        this.currentIndex = 0;
        this.correctStreak = 0;
        this.currentWord = this.wordsQueue[0];

        this.renderWordView(container);
    },

    // 2. Das Spielfeld für das aktuelle Wort rendern
    renderWordView(container) {
        let html = `
            <div style="margin-bottom: 20px;">
                <button class="btn btn-secondary" onclick="APP.switchView('dashboard')">
                    <i class="fa-solid fa-arrow-left"></i> Zurück zum Dashboard
                </button>
            </div>

            <div class="blitz-container" style="background: var(--color-card); border-radius: var(--border-radius-lg); border: 1px solid var(--color-border); padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: var(--shadow-sm); text-align: center;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid var(--color-border); padding-bottom: 12px;">
                    <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--color-text); margin: 0;">
                        <i class="fa-solid fa-bolt" style="color: var(--color-accent)"></i> Wort-Blitz
                    </h2>
                    <span style="font-weight: 600; color: var(--color-text-muted); font-size: 0.85rem;">
                        Wort ${this.currentIndex + 1} von ${this.wordsQueue.length}
                    </span>
                </div>

                <!-- Audio-Abspielbereich -->
                <div class="blitz-audio-card" style="background: var(--color-bg); border-radius: var(--border-radius-md); padding: 24px; margin-bottom: 24px; display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <button class="btn btn-primary btn-circle" id="blitz-play-btn" style="width: 70px; height: 70px; border-radius: 50%; padding: 0; display: inline-flex; align-items: center; justify-content: center; font-size: 1.6rem; box-shadow: 0 4px 15px rgba(var(--color-primary-light), 0.4);" onclick="WORT_BLITZ.playWordAudio()">
                        <i class="fa-solid fa-volume-high" id="blitz-audio-icon"></i>
                    </button>
                    <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-text-muted);">
                        Klicke auf den Lautsprecher, um das Wort anzuhören!
                    </span>
                </div>

                <!-- Lückentext-Anzeige -->
                <div style="background: var(--color-bg); padding: 16px; border-radius: var(--border-radius-md); border: 1px solid var(--color-border); margin-bottom: 24px; text-align: left;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; display: block; margin-bottom: 6px;">Satz-Zusammenhang:</span>
                    <p style="font-size: 1.15rem; font-weight: 500; color: var(--color-text); line-height: 1.5; margin: 0; font-style: italic;">
                        "${this.currentWord.kontextSatz}"
                    </p>
                </div>

                <!-- Eingabebereich -->
                <div class="blitz-input-section" style="display: flex; flex-direction: column; gap: 12px; text-align: left; margin-bottom: 20px;">
                    <label for="blitz-input" style="font-size: 0.95rem; font-weight: 700; color: var(--color-text);">Gesuchtes Wort richtig schreiben:</label>
                    <div style="display: flex; gap: 12px;">
                        <input type="text" id="blitz-input" class="form-input" style="flex: 1; padding: 12px; border-radius: 8px; border: 2px solid var(--color-border); font-size: 1.1rem;" placeholder="Wie schreibt man das Wort?" autocomplete="off" onkeydown="if(event.key === 'Enter') WORT_BLITZ.checkAnswer()">
                        <button class="btn btn-primary" id="blitz-submit-btn" style="padding: 12px 24px; font-weight: 700; font-size: 1rem;" onclick="WORT_BLITZ.checkAnswer()">
                            Absenden
                        </button>
                    </div>
                </div>

                <!-- Feedback-Anzeige -->
                <div id="blitz-feedback" style="margin-top: 20px; text-align: left; padding: 16px; border-radius: var(--border-radius-md); display: none;"></div>
            </div>
        `;
        container.innerHTML = html;
        document.getElementById("blitz-input").focus();
        
        // Wort beim Laden direkt einmal vorlesen
        setTimeout(() => this.playWordAudio(), 400);
    },

    // 3. Wort mit Sprachausgabe oder MP3 vorlesen
    playWordAudio() {
        if (this.isPlayingAudio) return;
        this.isPlayingAudio = true;
        
        const icon = document.getElementById("blitz-audio-icon");
        if (icon) icon.className = "fa-solid fa-volume-high fa-beat";
        
        const resetStatus = () => {
            this.isPlayingAudio = false;
            this.activeAudio = null;
            if (icon) icon.className = "fa-solid fa-volume-high";
        };

        const playSpeechSynthesis = () => {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(this.currentWord.wort);
            utterance.lang = "de-DE";
            utterance.rate = 0.8; // Leicht verlangsamt für Kinder
            
            utterance.onend = resetStatus;
            utterance.onerror = resetStatus;
            window.speechSynthesis.speak(utterance);
        };

        // Bestehendes Audio stoppen
        if (this.activeAudio) {
            try {
                this.activeAudio.pause();
                this.activeAudio.currentTime = 0;
            } catch (e) {}
            this.activeAudio = null;
        }

        if (this.currentWord.audioUrl) {
            const audio = new Audio(this.currentWord.audioUrl);
            this.activeAudio = audio;
            
            audio.onended = resetStatus;
            audio.onerror = (e) => {
                console.warn("Audio-Datei konnte nicht geladen werden, Fallback auf Sprachausgabe:", e);
                playSpeechSynthesis();
            };
            
            audio.play().catch(err => {
                console.warn("Audio-Wiedergabe blockiert/fehlgeschlagen, Fallback auf Sprachausgabe:", err);
                playSpeechSynthesis();
            });
        } else {
            playSpeechSynthesis();
        }
    },

    // Audio stoppen (z.B. beim Verlassen der Ansicht)
    stopAudio() {
        if (this.activeAudio) {
            try {
                this.activeAudio.pause();
                this.activeAudio.currentTime = 0;
            } catch (e) {}
            this.activeAudio = null;
        }
        window.speechSynthesis.cancel();
        this.isPlayingAudio = false;
        const icon = document.getElementById("blitz-audio-icon");
        if (icon) icon.className = "fa-solid fa-volume-high";
    },

    // 4. Antwort überprüfen
    checkAnswer() {
        const input = document.getElementById("blitz-input");
        const submitBtn = document.getElementById("blitz-submit-btn");
        if (!input || input.disabled) return;
        
        const val = input.value.trim();
        const feedback = document.getElementById("blitz-feedback");
        
        if (!val) return;
        
        // Eingaben sperren
        input.disabled = true;
        if (submitBtn) submitBtn.disabled = true;
        
        if (val === this.currentWord.wort) {
            // Richtig!
            this.correctStreak++;
            
            // Sterne & XP belohnen (+5 Sterne, +5 XP)
            const bonus = this.correctStreak >= 3 ? 2 : 0;
            const xp = 5;
            const stars = 5 + bonus;
            
            GAMIFICATION.state.completedWortBlitz += 1;
            GAMIFICATION.addReward(xp, stars);
            
            feedback.style.display = "block";
            feedback.style.background = "linear-gradient(135deg, var(--color-success-light), hsl(120, 80%, 93%))";
            feedback.style.border = "1px solid var(--color-success)";
            feedback.style.color = "var(--color-success-dark)";
            
            let streakMsg = "";
            if (this.correctStreak >= 3) {
                streakMsg = ` <span style="background:var(--color-danger); color:white; padding:2px 8px; border-radius:10px; font-size:0.75rem; font-weight:700; margin-left:8px; display:inline-block;"><i class="fa-solid fa-fire"></i> ${this.correctStreak}er Serie! +${bonus} Sterne</span>`;
            }
            
            feedback.innerHTML = `
                <h4 style="margin:0 0 6px 0; font-weight:800; font-size:1.05rem; display:flex; align-items:center;">
                    <i class="fa-solid fa-circle-check" style="font-size:1.2rem; margin-right:6px;"></i> Genial! Das ist richtig!${streakMsg}
                </h4>
                <p style="margin:0; font-size:0.85rem; line-height:1.4;">${this.currentWord.erklaerung}</p>
                <button class="btn btn-success" style="margin-top: 12px; width: 100%; font-weight:700;" onclick="WORT_BLITZ.nextWord()">
                    ${this.currentIndex === this.wordsQueue.length - 1 ? 'Zur Auswertung <i class="fa-solid fa-arrow-right"></i>' : 'Nächstes Wort <i class="fa-solid fa-arrow-right"></i>'}
                </button>
            `;
        } else {
            // Falsch!
            const isCasingError = val.toLowerCase() === this.currentWord.wort.toLowerCase();
            this.correctStreak = 0; // Streak zurücksetzen
            
            feedback.style.display = "block";
            feedback.style.background = "linear-gradient(135deg, var(--color-danger-light), hsl(0, 80%, 95%))";
            feedback.style.border = "1px solid var(--color-danger)";
            feedback.style.color = "var(--color-danger-dark)";
            
            let tip = "";
            if (isCasingError) {
                tip = `Achte ganz genau auf die Groß- und Kleinschreibung! Nomen und Satzanfänge schreibt man groß.`;
            } else {
                tip = this.currentWord.erklaerung;
            }
            
            feedback.innerHTML = `
                <h4 style="margin:0 0 6px 0; font-weight:800; font-size:1.05rem;">
                    <i class="fa-solid fa-circle-xmark" style="font-size:1.2rem; margin-right:6px;"></i> Leider nicht ganz richtig!
                </h4>
                <p style="margin:0 0 8px 0; font-size:0.9rem;">Deine Antwort: <span style="text-decoration:line-through;">${val}</span> | Richtig: <strong>${this.currentWord.wort}</strong></p>
                <p style="margin:0; font-size:0.85rem; line-height:1.4; color:var(--color-text-muted);"><strong>Didaktischer Tipp:</strong> ${tip}</p>
                <button class="btn btn-danger" style="margin-top: 12px; width: 100%; font-weight:700;" onclick="WORT_BLITZ.nextWord()">
                    ${this.currentIndex === this.wordsQueue.length - 1 ? 'Zur Auswertung <i class="fa-solid fa-arrow-right"></i>' : 'Nächstes Wort <i class="fa-solid fa-arrow-right"></i>'}
                </button>
            `;
        }
    },

    // 5. Nächstes Wort oder Auswertung laden
    nextWord() {
        if (this.currentIndex < this.wordsQueue.length - 1) {
            this.currentIndex++;
            this.currentWord = this.wordsQueue[this.currentIndex];
            this.renderWordView(document.getElementById("active-view-container"));
        } else {
            this.renderSummary(document.getElementById("active-view-container"));
        }
    },

    // 6. Runden-Auswertung anzeigen
    renderSummary(container) {
        container.innerHTML = `
            <div class="blitz-container" style="text-align: center; background: var(--color-card); border-radius: var(--border-radius-lg); border: 1px solid var(--color-border); padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: var(--shadow-sm);">
                <i class="fa-solid fa-award" style="font-size: 4rem; color: var(--color-accent); margin-bottom: 16px; display: block; animation: bounce 1s infinite alternate;"></i>
                <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px;">Wort-Blitz beendet!</h2>
                <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 24px;">
                    Klasse trainiert! Du hast die ${this.wordsQueue.length} Lückenwörter dieser Blitz-Runde durchgearbeitet.
                </p>
                
                <div style="background:var(--color-bg); border-radius: var(--border-radius-md); padding: 20px; display:inline-flex; gap: 40px; margin-bottom: 32px; border: 1px solid var(--color-border);">
                    <div>
                        <span style="display:block; font-size:0.8rem; color:var(--color-text-muted); font-weight:600; text-transform:uppercase; margin-bottom: 4px;">Aktuelle Serie</span>
                        <strong style="font-size:1.6rem; color:var(--color-danger); font-weight:800;">
                            <i class="fa-solid fa-fire"></i> ${this.correctStreak}
                        </strong>
                    </div>
                    <div style="border-left: 2px solid var(--color-border);"></div>
                    <div>
                        <span style="display:block; font-size:0.8rem; color:var(--color-text-muted); font-weight:600; text-transform:uppercase; margin-bottom: 4px;">Gesamt-Sterne</span>
                        <strong style="font-size:1.6rem; color:var(--color-accent); font-weight:800;">
                            <i class="fa-solid fa-star"></i> ${GAMIFICATION.state.stars}
                        </strong>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
                    <button class="btn btn-primary" onclick="WORT_BLITZ.renderGame(document.getElementById('active-view-container'))">
                        <i class="fa-solid fa-rotate"></i> Neue Runde starten
                    </button>
                    <button class="btn btn-secondary" onclick="APP.switchView('dashboard')">
                        <i class="fa-solid fa-house"></i> Zum Dashboard
                    </button>
                </div>
            </div>
        `;
    }
};
/* ==========================================================================
   RECHTSCHREIB-HELDEN - FEHLER-DETEKTIV COMPONENT
   ========================================================================== */

const FEHLER_DETEKTIV = {
    activeTask: null,
    totalErrors: 0,
    errorsFoundList: [], // Liste der korrigierten Wort-Indizes
    selectedWordIndex: null,

    // 1. Liste der Aufgaben anzeigen
    renderList(container) {
        const filteredTasks = DIKTAT_DATA.fehlerDetektivAufgaben.filter(t => t.klasse === APP.selectedGrade);

        let html = `
            <div class="detective-intro" style="text-align: center; margin-bottom: 24px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: var(--color-success); margin-bottom: 12px; display: block;"></i>
                <h2 style="font-size: 1.8rem; font-weight: 800;">Der Fehler-Detektiv</h2>
                <p style="color: var(--color-text-muted); font-size: 1rem; margin-top: 4px;">
                    In diesen kurzen Texten haben sich fiese Rechtschreibfehler versteckt. Spüre sie alle auf und korrigiere sie!
                </p>
            </div>

            <div class="diktat-list">
        `;

        if (filteredTasks.length === 0) {
            html += `<p>Keine Detektiv-Aufgaben für diese Klassenstufe gefunden.</p>`;
        } else {
            filteredTasks.forEach(t => {
                const isCompleted = GAMIFICATION.state.completedDetektiv.includes(t.id);
                // Zähle Fehler in dieser Aufgabe
                const errorCount = t.woerter.filter(w => w.falsch).length;
                html += `
                    <div class="diktat-card">
                        <span class="diktat-badge" style="background-color: var(--color-success-light); color: var(--color-success-dark);">
                            <i class="fa-solid fa-bug"></i> ${errorCount} Fehler
                        </span>
                        <h3 style="margin-top: 8px; font-weight: 700; font-size: 1.2rem;">${t.titel}</h3>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted); flex-grow: 1; line-height: 1.4;">${t.beschreibung}</p>
                        <button class="btn btn-success" style="margin-top: 12px; width: 100%; font-weight: 600;" onclick="FEHLER_DETEKTIV.startTask('${t.id}')">
                            ${isCompleted ? '<i class="fa-solid fa-circle-check"></i> Erneut spielen' : '<i class="fa-solid fa-magnifying-glass"></i> Spuren suchen'}
                        </button>
                    </div>
                `;
            });
        }

        html += `</div>`;
        container.innerHTML = html;
    },

    // 2. Fehler-Detektiv Spielrunde starten
    startTask(taskId) {
        const t = DIKTAT_DATA.fehlerDetektivAufgaben.find(item => item.id === taskId);
        if (!t) return;

        this.activeTask = t;
        this.totalErrors = t.woerter.filter(w => w.falsch).length;
        this.errorsFoundList = [];
        this.selectedWordIndex = null;

        const container = document.getElementById("active-view-container");
        this.renderPlayfield(container);
    },

    // 3. Spielfeld für Fehler-Detektiv rendern
    renderPlayfield(container) {
        let html = `
            <div style="margin-bottom: 20px;">
                <button class="btn btn-secondary" onclick="APP.switchView('fehler-detektiv')">
                    <i class="fa-solid fa-arrow-left"></i> Zurück zur Übersicht
                </button>
            </div>

            <div class="dashboard-card" style="padding: 32px; max-width: 700px; margin: 0 auto 24px auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid var(--color-border); padding-bottom: 16px;">
                    <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--color-text); margin: 0;">${this.activeTask.titel}</h2>
                    <span id="det-score-text" style="font-weight: 700; color: var(--color-success-dark); background: var(--color-success-light); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem;">
                        0 von ${this.totalErrors} Fehlern gelöst
                    </span>
                </div>

                <!-- Text-Anzeigebereich -->
                <div class="detective-text-container" style="background: var(--color-bg); padding: 24px; border-radius: var(--border-radius-md); border: 2px solid var(--color-border); line-height: 2.2; font-size: 1.15rem; color: var(--color-text); margin-bottom: 24px; font-family: 'Lexend', sans-serif;">
        `;

        this.activeTask.woerter.forEach((word, idx) => {
            html += `<span class="det-word" id="det-word-${idx}" style="cursor: pointer; padding: 2px 4px; border-radius: 4px; transition: all 0.2s;" onclick="FEHLER_DETEKTIV.selectWord(${idx})">${word.text}</span> `;
        });

        html += `
                </div>

                <!-- Korrektur-Eingabebereich -->
                <div id="det-form" style="display: none; padding: 20px; border-radius: var(--border-radius-md); border: 2px dashed var(--color-success); background: linear-gradient(135deg, white, hsl(var(--hue-success), 40%, 97%));">
                    <label id="det-input-label" style="font-weight: 700; font-size: 0.9rem; display: block; margin-bottom: 8px; color: var(--color-success-dark);">
                        Fehlerhaftes Wort korrigieren:
                    </label>
                    <div style="display: flex; gap: 12px;">
                        <input type="text" id="det-input" class="form-input" style="flex: 1; padding: 10px; border-radius: 8px; border: 2px solid var(--color-border); font-size: 1rem;" placeholder="Schreibe das Wort richtig...">
                        <button class="btn btn-success" style="padding: 10px 20px; font-weight: 700;" onclick="FEHLER_DETEKTIV.checkCorrection()">
                            <i class="fa-solid fa-circle-check"></i> Prüfen
                        </button>
                    </div>
                    <div id="det-feedback" style="margin-top: 12px; font-size: 0.9rem; line-height: 1.4; display: none;"></div>
                </div>

                <!-- Erfolgs-Meldung -->
                <div id="det-success-area" style="display: none; text-align: center; padding: 32px; background: linear-gradient(135deg, var(--color-success-light), hsl(120, 80%, 90%)); border-radius: var(--border-radius-lg); border: 2px solid var(--color-success);">
                    <i class="fa-solid fa-trophy" style="font-size: 3.5rem; color: var(--color-success); margin-bottom: 16px; display: block; animation: bounce 1s infinite alternate;"></i>
                    <h3 style="font-size: 1.6rem; color: var(--color-success-dark); font-weight: 800; margin-bottom: 8px;">Hervorragend!</h3>
                    <p style="color: var(--color-text); font-size: 1rem; margin-bottom: 20px;">Du hast alle Fehler in diesem Text wie ein echter Meister-Detektiv gefunden und korrigiert!</p>
                    <button class="btn btn-success" style="width: 100%; padding: 12px; font-weight: 700; font-size: 1.05rem;" onclick="FEHLER_DETEKTIV.completeTask()">
                        <i class="fa-solid fa-star"></i> Übung beenden (+30 Sterne, +30 XP)
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.injectCustomStyles();
    },

    // 4. Wort auswählen und Eingabefeld vorbereiten
    selectWord(index) {
        this.selectedWordIndex = index;
        const word = this.activeTask.woerter[index];
        
        // CSS-Klassen umschalten
        document.querySelectorAll(".det-word").forEach(span => {
            span.classList.remove("selected");
        });
        
        const activeSpan = document.getElementById(`det-word-${index}`);
        if (activeSpan) {
            activeSpan.classList.add("selected");
        }

        const form = document.getElementById("det-form");
        const input = document.getElementById("det-input");
        const feedback = document.getElementById("det-feedback");
        const submitBtn = form.querySelector("button");
        const label = document.getElementById("det-input-label");

        form.style.display = "block";
        feedback.style.display = "none";

        if (this.errorsFoundList.includes(index)) {
            // Bereits gelöst
            input.value = word.richtig;
            input.disabled = true;
            if (submitBtn) submitBtn.disabled = true;
            label.innerText = `Das Wort "${word.text}" wurde bereits korrigiert:`;
            feedback.style.display = "block";
            feedback.style.color = "var(--color-success-dark)";
            feedback.innerHTML = `<strong>Korrekt!</strong> ${word.erklaerung}`;
        } else if (!word.falsch) {
            // Wort ist bereits richtig
            input.value = "";
            input.disabled = true;
            if (submitBtn) submitBtn.disabled = true;
            label.innerText = `Dieses Wort ist bereits richtig:`;
            feedback.style.display = "block";
            feedback.style.color = "var(--color-primary-dark)";
            feedback.innerText = `Das Wort "${word.text.replace(/[\.,\?!;:]+$/, '')}" ist richtig geschrieben. Suche weiter nach Fehlern!`;
        } else {
            // Wort ist falsch und noch nicht gelöst
            input.value = "";
            input.disabled = false;
            if (submitBtn) submitBtn.disabled = false;
            label.innerText = `Fehlerhaftes Wort "${word.text.replace(/[\.,\?!;:]+$/, '')}" korrigieren:`;
            input.focus();
        }
    },

    // 5. Eingegebene Korrektur überprüfen
    checkCorrection() {
        if (this.selectedWordIndex === null) return;

        const word = this.activeTask.woerter[this.selectedWordIndex];
        const input = document.getElementById("det-input");
        const val = input.value.trim();
        const feedback = document.getElementById("det-feedback");

        if (val === word.richtig) {
            // Richtig gelöst!
            this.errorsFoundList.push(this.selectedWordIndex);
            
            // Span-Darstellung aktualisieren (Text korrigieren, Punctuation behalten)
            const span = document.getElementById(`det-word-${this.selectedWordIndex}`);
            if (span) {
                span.classList.remove("selected");
                span.classList.add("corrected");
                
                const origText = word.text;
                const puncMatch = origText.match(/[\.,\?!;:]+$/);
                const punc = puncMatch ? puncMatch[0] : "";
                span.innerText = word.richtig + punc;
            }

            // UI Feedback
            feedback.style.display = "block";
            feedback.style.color = "var(--color-success-dark)";
            feedback.innerHTML = `<strong>Richtig gelöst!</strong> ${word.erklaerung}`;
            
            input.disabled = true;
            const submitBtn = document.querySelector("#det-form button");
            if (submitBtn) submitBtn.disabled = true;

            // Score aktualisieren
            document.getElementById("det-score-text").innerText = `${this.errorsFoundList.length} von ${this.totalErrors} Fehlern gelöst`;

            // Prüfen, ob alle Fehler gefunden wurden!
            if (this.errorsFoundList.length === this.totalErrors) {
                setTimeout(() => {
                    const formEl = document.getElementById("det-form");
                    if (formEl) formEl.style.display = "none";
                    
                    const successEl = document.getElementById("det-success-area");
                    if (successEl) successEl.style.display = "block";
                    
                    GAMIFICATION.createConfetti(document.getElementById("active-view-container"));
                }, 2500);
            }
        } else if (val.toLowerCase() === word.richtig.toLowerCase()) {
            // Fast richtig: Groß-/Kleinschreibung falsch
            feedback.style.display = "block";
            feedback.style.color = "var(--color-danger)";
            feedback.innerHTML = `<strong>Fast geschafft!</strong> Achte ganz genau auf die Groß- und Kleinschreibung! 🧐`;
            input.focus();
        } else {
            // Falsch geschrieben
            feedback.style.display = "block";
            feedback.style.color = "var(--color-danger)";
            feedback.innerHTML = `Leider nicht richtig. Schau dir das Wort noch einmal an und probiere es erneut!`;
            input.focus();
        }
    },

    // 6. Spiel abschließen und XP einsammeln
    completeTask() {
        const t = this.activeTask;

        if (!GAMIFICATION.state.completedDetektiv.includes(t.id)) {
            GAMIFICATION.state.completedDetektiv.push(t.id);
        }

        // Belohnung gutschreiben (30 XP, 30 Sterne)
        GAMIFICATION.addReward(30, 30);

        // Zurück zur Liste
        APP.switchView("fehler-detektiv");
    },

    injectCustomStyles() {
        if (!document.getElementById("detective-custom-styles")) {
            const style = document.createElement("style");
            style.id = "detective-custom-styles";
            style.innerHTML = `
                .det-word:hover {
                    background-color: hsla(var(--hue-primary), 100%, 90%, 0.5);
                }
                .det-word.selected {
                    background-color: var(--color-primary-light);
                    color: var(--color-primary-dark);
                    font-weight: 600;
                    box-shadow: 0 0 5px var(--color-primary);
                }
                .det-word.corrected {
                    background-color: var(--color-success-light);
                    color: var(--color-success-dark);
                    font-weight: 600;
                    text-decoration: line-through;
                    text-decoration-color: var(--color-success);
                }
            `;
            document.head.appendChild(style);
        }
    }
};
/* ==========================================================================
   RECHTSCHREIB-HELDEN - DATENBANK FÜR DIKTATE UND ÜBUNGEN
   ========================================================================== */

const DIKTAT_DATA = {
    // ----------------------------------------------------------------------
    diktate: [
        {
            id: "d5-moor-geheimnis",
            klasse: 5,
            titel: "Das Geheimnis im Moor",
            schwerpunkt: "Dehnung & Schärfung",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Eine spannende kleine Geschichte über ein Geheimnis im Moor. Perfekt zum Üben von doppelten Konsonanten (Schärfung) und stummem h (Dehnung).",
            saetzeAudio: [
                "audio/klasse5/d5_01_s1.mp3",
                "audio/klasse5/d5_01_s2.mp3",
                "audio/klasse5/d5_01_s3.mp3",
                "audio/klasse5/d5_01_s4.mp3",
                "audio/klasse5/d5_01_s5.mp3",
                "audio/klasse5/d5_01_s6.mp3",
                "audio/klasse5/d5_01_s7.mp3"
            ],
            ganzerText: "An einem nebligen Morgen gingen die Kinder leise über den schmalen Pfad im Moor. Plötzlich sahen sie ein helles Licht tief zwischen den Gräsern flackern. Ein wilder Schreck fuhr ihnen in die Glieder, doch die Neugier war viel größer. Vorsichtig machten sie einen Schritt nach dem anderen. Was mochte dort im dunklen Schlamm verborgen sein? Schließlich entdeckten sie ein altes, glänzendes Schloss, das mit einer dicken Kette an einem alten Baumstamm befestigt war. Es musste schon viele Jahre dort liegen.",
            saetze: [
                "An einem nebligen Morgen gingen die Kinder leise über den schmalen Pfad im Moor.",
                "Plötzlich sahen sie ein helles Licht tief zwischen den Gräsern flackern.",
                "Ein wilder Schreck fuhr ihnen in die Glieder, doch die Neugier war viel größer.",
                "Vorsichtig machten sie einen Schritt nach dem anderen.",
                "Was mochte dort im dunklen Schlamm verborgen sein?",
                "Schließlich entdeckten sie ein altes, glänzendes Schloss, das mit einer dicken Kette an einem alten Baumstamm befestigt war.",
                "Es musste schon viele Jahre dort liegen."
            ],
            schwerpunktWoerter: {
                "nebligen": {
                    regelTitel: "Dehnung mit e",
                    regelErklaerung: "Das 'e' in 'Nebel' wird lang gesprochen. Man schreibt es einfach als einfaches 'e' ohne stummes h."
                },
                "Morgen": {
                    regelTitel: "Großschreibung von Nomen",
                    regelErklaerung: "Tageszeiten nach 'gestern', 'heute', 'morgen' oder mit einem Artikel davor ('ein Morgen') werden großgeschrieben."
                },
                "gingen": {
                    regelTitel: "Dehnung mit ie",
                    regelErklaerung: "Das lang gesprochene 'i' wird im Deutschen meistens als 'ie' geschrieben (Ausnahme: z. B. 'wir', 'ihr')."
                },
                "Pfad": {
                    regelTitel: "Dehnung mit Dehnungs-h",
                    regelErklaerung: "'Pfad' wird mit einem stummen 'h' geschrieben. Merke dir diese Schreibung gut!"
                },
                "Moor": {
                    regelTitel: "Dehnung mit Vokalverdopplung",
                    regelErklaerung: "Manche Wörter dehnen den Vokal durch Verdopplung aus. Dazu gehören: Moor, Boot, Meer, Staat, Haar."
                },
                "Plötzlich": {
                    regelTitel: "Satzanfang",
                    regelErklaerung: "Das erste Wort eines Satzes wird immer großgeschrieben."
                },
                "sahen": {
                    regelTitel: "Dehnungs-h",
                    regelErklaerung: "Bei Verben steht das Dehnungs-h oft vor dem 'en' der Grundform (sehen -> sahen)."
                },
                "helles": {
                    regelTitel: "Schärfung / Mitlautverdopplung",
                    regelErklaerung: "Nach einem kurz gesprochenen Vokal (hier das kurze 'e' in 'hell') wird der darauffolgende Konsonant verdoppelt ('ll')."
                },
                "Licht": {
                    regelTitel: "ch-Schreibung",
                    regelErklaerung: "Das 'ch' wird nach hellen Vokalen (wie 'i') als Zischlaut gesprochen."
                },
                "flackern": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach einem kurzen Vokal wird das 'k' zu 'ck' (Ausnahme bei Fremdwörtern)."
                },
                "Schreck": {
                    regelTitel: "Schärfung mit ck & Nomen",
                    regelErklaerung: "'Schreck' ist ein Nomen (der Schreck -> groß!) und wird nach dem kurzen 'e' mit 'ck' geschrieben."
                },
                "Schritt": {
                    regelTitel: "Schärfung / Mitlautverdopplung",
                    regelErklaerung: "Nach dem kurzen 'i' verdoppeln wir das 't' zu 'tt' (Schritt)."
                },
                "Schließlich": {
                    regelTitel: "Schärfung mit ß",
                    regelErklaerung: "Nach einem lang gesprochenen Vokal oder Zwielaut (hier 'ie') schreiben wir 'ß', wenn ein s-Laut folgt."
                },
                "Schloss": {
                    regelTitel: "Schärfung mit ss",
                    regelErklaerung: "Nach einem kurzen Vokal (kurzes 'o' in Schloss) schreiben wir 'ss', wenn ein s-Laut folgt."
                },
                "dicken": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen 'i' in 'dick' wird das 'k' zu 'ck'."
                },
                "Baumstamm": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Baum + Stamm = Baumstamm. Da 'Stamm' mit 'mm' (kurzes 'a') geschrieben wird, bleibt das im zusammengesetzten Wort erhalten."
                }
            }
        },
        {
            id: "d5-kletterwald",
            klasse: 5,
            titel: "Ein Tag im Kletterwald",
            schwerpunkt: "Doppelkonsonanten",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Ein spannender Ausflug in den Kletterwald. Ideal zum Üben von doppelten Mitlauten nach kurzem Vokal (t/tt, l/ll, p/pp, f/ff).",
            saetzeAudio: [
                "audio/klasse5/d5_02_s1.mp3",
                "audio/klasse5/d5_02_s2.mp3",
                "audio/klasse5/d5_02_s3.mp3",
                "audio/klasse5/d5_02_s4.mp3",
                "audio/klasse5/d5_02_s5.mp3",
                "audio/klasse5/d5_02_s6.mp3"
            ],
            ganzerText: "Die ganze Klasse unternahm gestern einen tollen Ausflug in den Kletterwald. Alle Kinder schnallten sich die Sicherheitsgurte ganz fest um. Der mutige Lukas kletterte als Erster den steilen Stamm hinauf. Mit einem lauten Knall fiel plötzlich eine reife Nuss auf den weichen Boden. Ein kleiner Affe hätte bestimmt viel schneller klettern können als wir. Nach zwei Stunden waren alle erschöpft, aber glücklich über diesen tollen Tag.",
            saetze: [
                "Die ganze Klasse unternahm gestern einen tollen Ausflug in den Kletterwald.",
                "Alle Kinder schnallten sich die Sicherheitsgurte ganz fest um.",
                "Der mutige Lukas kletterte als Erster den steilen Stamm hinauf.",
                "Mit einem lauten Knall fiel plötzlich eine reife Nuss auf den weichen Boden.",
                "Ein kleiner Affe hätte bestimmt viel schneller klettern können als wir.",
                "Nach zwei Stunden waren alle erschöpft, aber glücklich über diesen tollen Tag."
            ],
            schwerpunktWoerter: {
                "Klasse": {
                    regelTitel: "Doppelkonsonant ss",
                    regelErklaerung: "Das 'a' in 'Klasse' wird kurz gesprochen, daher schreiben wir danach ein doppeltes 's' (ss)."
                },
                "tollen": {
                    regelTitel: "Doppelkonsonant ll",
                    regelErklaerung: "Das 'o' wird kurz gesprochen, deshalb verdoppeln wir das 'l' zu 'll' (tollen)."
                },
                "schnallten": {
                    regelTitel: "Mitlautverdopplung ll",
                    regelErklaerung: "Nach dem kurzen Vokal 'a' in 'schnallen' folgt ein doppeltes 'l' (ll)."
                },
                "Stamm": {
                    regelTitel: "Doppelkonsonant mm",
                    regelErklaerung: "Nach dem kurzen 'a' verdoppeln wir das 'm' zu 'mm' (Stamm)."
                },
                "Knall": {
                    regelTitel: "Doppelkonsonant ll",
                    regelErklaerung: "Das 'a' wird ganz kurz ausgesprochen, deshalb schreiben wir 'Knall' mit 'll'."
                },
                "plötzlich": {
                    regelTitel: "Schärfung mit tz",
                    regelErklaerung: "Das 'ö' wird kurz gesprochen. Das Wort wird mit 'tz' geschrieben (Schärfung)."
                },
                "Affe": {
                    regelTitel: "Doppelkonsonant ff",
                    regelErklaerung: "Nach dem kurzen 'a' schreiben wir ein doppeltes 'f' (Affe)."
                },
                "schneller": {
                    regelTitel: "Doppelkonsonant ll",
                    regelErklaerung: "Das 'e' in 'schnell' ist kurz gesprochen, daher verdoppeln wir das 'l'."
                },
                "können": {
                    regelTitel: "Doppelkonsonant nn",
                    regelErklaerung: "Das 'ö' wird kurz gesprochen, daher folgt ein doppeltes 'n' (können)."
                }
            }
        },
        {
            id: "d5-rabe-zoo",
            klasse: 5,
            titel: "Der freche Rabe im Zoo",
            schwerpunkt: "ck und tz",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Besonderheiten der Schärfung: 'ck' statt 'kk' und 'tz' statt 'zz' nach kurzen Vokalen.",
            saetzeAudio: [
                "audio/klasse5/d5_03_s1.mp3",
                "audio/klasse5/d5_03_s2.mp3",
                "audio/klasse5/d5_03_s3.mp3",
                "audio/klasse5/d5_03_s4.mp3",
                "audio/klasse5/d5_03_s5.mp3",
                "audio/klasse5/d5_03_s6.mp3"
            ],
            ganzerText: "Auf einem dicken Ast im Zoo saß ein pechschwarzer Rabe und blickte neugierig umher. Er beobachtete die Kinder, die eine leckere Brezel auf einer Decke ausbreiteten. Plötzlich flog der schlaue Vogel herab und schnappte sich ein großes Stück. Mit einem frechen Krächzen entkam er dem schnellen Zugriff des kleinen Jungen. Der Rabe versteckte seinen Schatz sicher hinter einem spitzen Stein. Da half auch kein wildes Schimpfen oder lautes Meckern der bestohlenen Gäste.",
            saetze: [
                "Auf einem dicken Ast im Zoo saß ein pechschwarzer Rabe und blickte neugierig umher.",
                "Er beobachtete die Kinder, die eine leckere Brezel auf einer Decke ausbreiteten.",
                "Plötzlich flog der schlaue Vogel herab und schnappte sich ein großes Stück.",
                "Mit einem frechen Krächzen entkam er dem schnellen Zugriff des kleinen Jungen.",
                "Der Rabe versteckte seinen Schatz sicher hinter einem spitzen Stein.",
                "Da half auch kein wildes Schimpfen oder lautes Meckern der bestohlenen Gäste."
            ],
            schwerpunktWoerter: {
                "dicken": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen Vokal 'i' wird der K-Laut als 'ck' geschrieben."
                },
                "blickte": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen Vokal 'i' schreiben wir 'ck' (nie kk!)."
                },
                "leckere": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen Vokal 'e' steht 'ck'."
                },
                "Decke": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen Vokal 'e' schreiben wir 'ck'."
                },
                "Plötzlich": {
                    regelTitel: "Schärfung mit tz",
                    regelErklaerung: "Nach dem kurzen Vokal 'ö' wird der Z-Laut als 'tz' geschrieben."
                },
                "Stück": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen Vokal 'ü' steht 'ck'."
                },
                "versteckte": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen 'e' steht 'ck'."
                },
                "Meckern": {
                    regelTitel: "Schärfung mit ck & Nomen",
                    regelErklaerung: "Ein Nomen (das Meckern -> groß!) mit 'ck' nach dem kurzen Vokal 'e'."
                }
            }
        },
        {
            id: "d5-marktplatz-trubel",
            klasse: 5,
            titel: "Trubel auf dem Marktplatz",
            schwerpunkt: "Großschreibung",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Großschreibung von Nomen (Konkreta und Abstrakta) und Erkennen von Signalwörtern (Artikel, Präpositionen).",
            saetzeAudio: [
                "audio/klasse5/d5_04_s1.mp3",
                "audio/klasse5/d5_04_s2.mp3",
                "audio/klasse5/d5_04_s3.mp3",
                "audio/klasse5/d5_04_s4.mp3",
                "audio/klasse5/d5_04_s5.mp3",
                "audio/klasse5/d5_04_s6.mp3"
            ],
            ganzerText: "Jeden Samstag herrscht auf dem großen Marktplatz ein buntes Treiben. Die Händler rufen laut ihre Preise für frisches Gemüse und süßes Obst aus. Viele Menschen kommen mit Körben, um frische Ware für das Wochenende zu kaufen. Eine Frau bewundert den herrlichen Duft der bunten Blumen am Eckstand. Plötzlich rollt ein kleiner, roter Apfel direkt vor die Füße eines kleinen Hundes. Mit lautem Bellen schnappt er danach, was den Händler herzlich zum Lachen bringt.",
            saetze: [
                "Jeden Samstag herrscht auf dem großen Marktplatz ein buntes Treiben.",
                "Die Händler rufen laut ihre Preise für frisches Gemüse und süßes Obst aus.",
                "Viele Menschen kommen mit Körben, um frische Ware für das Wochenende zu kaufen.",
                "Eine Frau bewundert den herrlichen Duft der bunten Blumen am Eckstand.",
                "Plötzlich rollt ein kleiner, roter Apfel direkt vor die Füße eines kleinen Hundes.",
                "Mit lautem Bellen schnappt er danach, was den Händler herzlich zum Lachen bringt."
            ],
            schwerpunktWoerter: {
                "Samstag": {
                    regelTitel: "Wochentage groß",
                    regelErklaerung: "Wochentage sind Nomen und werden immer großgeschrieben."
                },
                "Marktplatz": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Orte und Plätze sind Nomen und werden großgeschrieben."
                },
                "Preise": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Das Nomen 'die Preise' wird großgeschrieben."
                },
                "Gemüse": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Das Nomen 'das Gemüse' wird großgeschrieben."
                },
                "Obst": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Das Nomen 'das Obst' wird großgeschrieben."
                },
                "Wochenende": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Das Nomen 'das Wochenende' wird großgeschrieben (Signalwort: 'das' davor)."
                },
                "Duft": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Das Nomen 'der Duft' wird großgeschrieben (Signalwort: 'den' davor)."
                },
                "Füße": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Körperteile sind Nomen und werden großgeschrieben (Signalwort: 'die' davor)."
                },
                "Lachen": {
                    regelTitel: "Nominalisierung",
                    regelErklaerung: "Nach der Präposition 'zum' (zu + dem) werden Verben großgeschrieben ('zum Lachen')."
                }
            }
        },
        {
            id: "d5-heisser-sommertag",
            klasse: 5,
            titel: "Ein heißer Sommertag",
            schwerpunkt: "s-Laute: s, ss, ß",
            dauer: "ca. 8-10 Min.",
            beschreibung: "s-Laut-Regeln: 's' nach langem Vokal/Zwielaut, 'ss' nach kurzem Vokal, 'ß' nach langem Vokal oder Diphtong (ei, au, eu).",
            saetzeAudio: [
                "audio/klasse5/d5_05_s1.mp3",
                "audio/klasse5/d5_05_s2.mp3",
                "audio/klasse5/d5_05_s3.mp3",
                "audio/klasse5/d5_05_s4.mp3",
                "audio/klasse5/d5_05_s5.mp3",
                "audio/klasse5/d5_05_s6.mp3"
            ],
            ganzerText: "Die pralle Sonne brannte heiß auf die staubige Straße hinab. Die Kinder liefen barfuß über das weiche Gras im kühlen Garten. Papa goss mit einem langen Wasserschlauch die durstigen Rosen und das Gemüse. Zur Belohnung gab es für alle ein riesiges Eis, das besonders süß schmeckte. Wir saßen im Schatten unter einem alten Apfelbaum und aßen schweigend. Ein sanfter Windhauch blies uns ins Gesicht und brachte ein bisschen Abkühlung.",
            saetze: [
                "Die pralle Sonne brannte heiß auf die staubige Straße hinab.",
                "Die Kinder liefen barfuß über das weiche Gras im kühlen Garten.",
                "Papa goss mit einem langen Wasserschlauch die durstigen Rosen und das Gemüse.",
                "Zur Belohnung gab es für alle ein riesiges Eis, das besonders süß schmeckte.",
                "Wir saßen im Schatten unter einem alten Apfelbaum und aßen schweigend.",
                "Ein sanfter Windhauch blies uns ins Gesicht und brachte ein bisschen Abkühlung."
            ],
            schwerpunktWoerter: {
                "heiß": {
                    regelTitel: "ß-Schreibung",
                    regelErklaerung: "Nach dem Doppelvokal 'ei' schreiben wir 'ß', wenn ein stimmloser s-Laut folgt."
                },
                "Straße": {
                    regelTitel: "ß-Schreibung",
                    regelErklaerung: "Nach dem lang gesprochenen Vokal 'a' schreiben wir 'ß'."
                },
                "goss": {
                    regelTitel: "ss-Schreibung",
                    regelErklaerung: "Nach dem kurzen Vokal 'o' in 'goss' schreiben wir 'ss'."
                },
                "Wasserschlauch": {
                    regelTitel: "Doppel-s nach kurzem Vokal",
                    regelErklaerung: "Das 'a' in 'Wasser' wird kurz gesprochen, daher verdoppeln wir das 's' zu 'ss'."
                },
                "süß": {
                    regelTitel: "ß-Schreibung",
                    regelErklaerung: "Nach dem lang gesprochenen 'ü' schreiben wir 'ß'."
                },
                "saßen": {
                    regelTitel: "ß-Schreibung",
                    regelErklaerung: "Nach dem lang gesprochenen 'a' schreiben wir 'ß'."
                },
                "aßen": {
                    regelTitel: "ß-Schreibung",
                    regelErklaerung: "Nach dem lang gesprochenen 'a' schreiben wir 'ß'."
                },
                "bisschen": {
                    regelTitel: "Ausnahme bisschen",
                    regelErklaerung: "Das Wort 'bisschen' wird immer mit 'ss' geschrieben."
                }
            }
        },
        {
            id: "d5-entdeckung-museum",
            klasse: 5,
            titel: "Die Entdeckung im Museum",
            schwerpunkt: "Worttrennung & Dehnungs-h",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Wörter mit stummem h und korrekte Trennung am Zeilenende (nach Sprechsilben).",
            saetzeAudio: [
                "audio/klasse5/d5_06_s1.mp3",
                "audio/klasse5/d5_06_s2.mp3",
                "audio/klasse5/d5_06_s3.mp3",
                "audio/klasse5/d5_06_s4.mp3",
                "audio/klasse5/d5_06_s5.mp3",
                "audio/klasse5/d5_06_s6.mp3"
            ],
            ganzerText: "In der großen Halle des Museums hingen wunderschöne, uralte Gemälde. Ein Führer zeigte uns eine goldene Truhe, die aus einem alten Schloss stammte. Wir erfuhren, dass darin wertvolle Schätze und Geheimnisse verwahrt wurden. Die Schüler stellten viele schlaue Fragen zur Geschichte dieser Zeit. Am Ende durften wir sogar ein echtes, schweres Kettenhemd vorsichtig anfassen. Dieser spannende Ausflug wird uns noch lange im Gedächtnis bleiben.",
            saetze: [
                "In der großen Halle des Museums hingen wunderschöne, uralte Gemälde.",
                "Ein Führer zeigte uns eine goldene Truhe, die aus einem alten Schloss stammte.",
                "Wir erfuhren, dass darin wertvolle Schätze und Geheimnisse verwahrt wurden.",
                "Die Schüler stellten viele schlaue Fragen zur Geschichte dieser Zeit.",
                "Am Ende durften wir sogar ein echtes, schweres Kettenhemd vorsichtig anfassen.",
                "Dieser spannende Ausflug wird uns noch lange im Gedächtnis bleiben."
            ],
            schwerpunktWoerter: {
                "Halle": {
                    regelTitel: "Doppelkonsonant",
                    regelErklaerung: "Nach dem kurzen Vokal 'a' folgt doppeltes 'l' (ll). Trennung: Hal-le."
                },
                "hingen": {
                    regelTitel: "ng-Laut",
                    regelErklaerung: "Der ng-Laut wird als 'ng' geschrieben (nie n-g trennen! Trennung: hin-gen)."
                },
                "Führer": {
                    regelTitel: "Dehnungs-h",
                    regelErklaerung: "'Führer' kommt von 'führen' und wird mit einem stummen 'h' geschrieben. Trennung: Füh-rer."
                },
                "erfuhren": {
                    regelTitel: "Dehnungs-h",
                    regelErklaerung: "'erfuhren' kommt von 'fahren' und hat ein stummes h zur Dehnung."
                },
                "Kettenhemd": {
                    regelTitel: "Zusammengesetztes Wort",
                    regelErklaerung: "Kette + Hemd. 'Hemd' wird wegen des kurzen e mit 'd' am Ende geschrieben (Hem-den)."
                },
                "Gedächtnis": {
                    regelTitel: "Umlautung ä",
                    regelErklaerung: "Kommt von 'gedacht' oder 'denken'. Daher wird es mit 'ä' geschrieben."
                }
            }
        },
        {
            id: "d5-ritterburg-abenteuer",
            klasse: 5,
            titel: "Abenteuer auf der Ritterburg",
            schwerpunkt: "Auslautverhärtung",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Konsonanten am Wortende durch Verlängern prüfen (z. B. Wald -> Wälder, Weg -> Wege).",
            saetzeAudio: [
                "audio/klasse5/d5_07_s1.mp3",
                "audio/klasse5/d5_07_s2.mp3",
                "audio/klasse5/d5_07_s3.mp3",
                "audio/klasse5/d5_07_s4.mp3",
                "audio/klasse5/d5_07_s5.mp3",
                "audio/klasse5/d5_07_s6.mp3"
            ],
            ganzerText: "Der schmale Pfad führte uns steil bergauf durch einen dichten Wald. Oben auf dem Berg stand stolz die alte, graue Ritterburg aus Stein. Ein starker Wind blies uns staubigen Sand direkt ins Gesicht. Auf dem breiten Burggraben schwamm ruhig ein stolzer, weißer Schwan. Der Weg führte uns durch ein schweres Tor direkt in den inneren Hof. Hier fühlten wir uns wie im Mittelalter, umgeben von hohen Mauern.",
            saetze: [
                "Der schmale Pfad führte uns steil bergauf durch einen dichten Wald.",
                "Oben auf dem Berg stand stolz die alte, graue Ritterburg aus Stein.",
                "Ein starker Wind blies uns staubigen Sand direkt ins Gesicht.",
                "Auf dem breiten Burggraben schwamm ruhig ein stolzer, weißer Schwan.",
                "Der Weg führte uns durch ein schweres Tor direkt in den inneren Hof.",
                "Hier fühlten wir uns wie im Mittelalter, umgeben von hohen Mauern."
            ],
            schwerpunktWoerter: {
                "Pfad": {
                    regelTitel: "Auslautverhärtung d",
                    regelErklaerung: "Wir verlängern: Pfade. Man hört das 'd' deutlich, also schreibt man 'Pfad' am Ende mit 'd'."
                },
                "Wald": {
                    regelTitel: "Auslautverhärtung d",
                    regelErklaerung: "Wir verlängern: Wälder. Man hört das 'd', also schreibt man 'Wald' mit 'd'."
                },
                "Berg": {
                    regelTitel: "Auslautverhärtung g",
                    regelErklaerung: "Wir verlängern: Berge. Man hört das 'g', also schreibt man 'Berg' mit 'g'."
                },
                "Wind": {
                    regelTitel: "Auslautverhärtung d",
                    regelErklaerung: "Wir verlängern: Winde. Man hört das 'd', also schreibt man 'Wind' mit 'd'."
                },
                "Sand": {
                    regelTitel: "Auslautverhärtung d",
                    regelErklaerung: "Wir verlängern: Sande. Man hört das 'd', also schreibt man 'Sand' mit 'd'."
                },
                "Weg": {
                    regelTitel: "Auslautverhärtung g",
                    regelErklaerung: "Wir verlängern: Wege. Man hört das 'g', also schreibt man 'Weg' mit 'g'."
                },
                "Hof": {
                    regelTitel: "Auslautverhärtung f",
                    regelErklaerung: "Wir verlängern: Höfe. Man hört das 'f' (bzw. 'v' in manchen Dialekten, hier aber 'f')."
                }
            }
        },
        {
            id: "d5-kraeutergarten-voegel",
            klasse: 5,
            titel: "Vögel im Kräutergarten",
            schwerpunkt: "f/v und Umlautung ä/e",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Unterscheidung von f und v (Vogel, viel) sowie die Umlautleitung von a zu ä (z. B. Kräuter von Kraut, Hände von Hand).",
            saetzeAudio: [
                "audio/klasse5/d5_08_s1.mp3",
                "audio/klasse5/d5_08_s2.mp3",
                "audio/klasse5/d5_08_s3.mp3",
                "audio/klasse5/d5_08_s4.mp3",
                "audio/klasse5/d5_08_s5.mp3",
                "audio/klasse5/d5_08_s6.mp3"
            ],
            ganzerText: "Hinter dem alten Haus wachsen viele grüne Kräuter in ordentlichen Beeten. Ein bunter Vogel singt dort jeden Morgen ein fröhliches Lied aus voller Kehle. Er sucht geschäftig nach Nahrung für seine kleinen Küken im Nest. Die Kinder strecken vorsichtig ihre Hände aus, um die süßen Beeren zu pflücken. Man braucht viel Geduld und Ruhe, um die scheuen Tiere nicht zu vertreiben. Gärtnern macht uns allen großen Spaß, weil es so lebendig ist.",
            saetze: [
                "Hinter dem alten Haus wachsen viele grüne Kräuter in ordentlichen Beeten.",
                "Ein bunter Vogel singt dort jeden Morgen ein fröhliches Lied aus voller Kehle.",
                "Er sucht geschäftig nach Nahrung für seine kleinen Küken im Nest.",
                "Die Kinder strecken vorsichtig ihre Hände aus, um die süßen Beeren zu pflücken.",
                "Man braucht viel Geduld und Ruhe, um die scheuen Tiere nicht zu vertreiben.",
                "Gärtnern macht uns allen großen Spaß, weil es so lebendig ist."
            ],
            schwerpunktWoerter: {
                "viele": {
                    regelTitel: "v-Schreibung",
                    regelErklaerung: "Das Wort 'viele' wird mit 'v' geschrieben. Das ist ein Merkwort!"
                },
                "Kräuter": {
                    regelTitel: "Umlautung äu",
                    regelErklaerung: "Kommt von 'Kraut'. Da 'Kraut' mit 'au' geschrieben wird, schreibt man die Mehrzahl 'Kräuter' mit 'äu'."
                },
                "Vogel": {
                    regelTitel: "v-Schreibung",
                    regelErklaerung: "Das Nomen 'Vogel' wird mit 'V' am Anfang geschrieben. Merke dir diese Schreibung gut!"
                },
                "Hände": {
                    regelTitel: "Umlautung ä",
                    regelErklaerung: "Kommt von 'Hand'. Da 'Hand' mit 'a' geschrieben wird, schreibt man die Mehrzahl 'Hände' mit 'ä'."
                },
                "viel": {
                    regelTitel: "v-Schreibung & ie",
                    regelErklaerung: "Das Wort 'viel' schreibt man mit 'v' und dem langen 'ie'."
                },
                "vertreiben": {
                    regelTitel: "Vorsilbe ver-",
                    regelErklaerung: "Die Vorsilbe 'ver-' wird immer mit 'v' geschrieben (vertreiben, vergessen, verlaufen)."
                }
            }
        },
        {
            id: "d5-spielplatz-streit",
            klasse: 5,
            titel: "Streit auf dem Spielplatz",
            schwerpunkt: "Wörtliche Rede",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Satzzeichen bei wörtlicher Rede mit vorangestelltem und nachgestelltem Begleitsatz.",
            saetzeAudio: [
                "audio/klasse5/d5_09_s1.mp3",
                "audio/klasse5/d5_09_s2.mp3",
                "audio/klasse5/d5_09_s3.mp3",
                "audio/klasse5/d5_09_s4.mp3",
                "audio/klasse5/d5_09_s5.mp3",
                "audio/klasse5/d5_09_s6.mp3"
            ],
            ganzerText: "Auf dem bunten Spielplatz rief ein kleines Mädchen laut: \"Lass uns fangen spielen!\" Ihr Bruder lief schnell los und lachte fröhlich über das ganze Gesicht. Doch plötzlich schrie ein Junge wütend: \"Das ist aber meine Schaufel im Sand!\" \"Wir können doch alle gemeinsam eine große Burg bauen\", schlug eine Mutter freundlich vor. Schnell war der kleine Ärger vergessen und die Kinder lachten wieder zusammen. Am Abend rief der Vater laut: \"Kommt Kinder, es ist Zeit für das Abendessen!\"",
            saetze: [
                "Auf dem bunten Spielplatz rief ein kleines Mädchen laut: \"Lass uns fangen spielen!\"",
                "Ihr Bruder lief schnell los und lachte fröhlich über das ganze Gesicht.",
                "Doch plötzlich schrie ein Junge wütend: \"Das ist aber meine Schaufel im Sand!\"",
                "\"Wir können doch alle gemeinsam eine große Burg bauen\", schlug eine Mutter freundlich vor.",
                "Schnell war der kleine Ärger vergessen und die Kinder lachten wieder zusammen.",
                "Am Abend rief der Vater laut: \"Kommt Kinder, es ist Zeit für das Abendessen!\""
            ],
            schwerpunktWoerter: {
                "laut:": {
                    regelTitel: "Doppelpunkt bei wörtlicher Rede",
                    regelErklaerung: "Vor der wörtlichen Rede steht ein Doppelpunkt, wenn der Begleitsatz vorne steht."
                },
                "\"Lass": {
                    regelTitel: "Anführungszeichen",
                    regelErklaerung: "Die wörtliche Rede beginnt mit Anführungszeichen unten und das erste Wort wird großgeschrieben."
                },
                "spielen!\"": {
                    regelTitel: "Satzzeichen am Ende",
                    regelErklaerung: "Das Ausrufezeichen steht vor dem schließenden Anführungszeichen."
                },
                "bauen\",": {
                    regelTitel: "Nachgestellter Begleitsatz",
                    regelErklaerung: "Wenn der Begleitsatz nachgestellt ist, kommt ein Komma nach dem schließenden Anführungszeichen."
                },
                "Abendessen!\"": {
                    regelTitel: "Wörtliche Rede Ausruf",
                    regelErklaerung: "Auch hier steht das Ausrufezeichen vor den schließenden Anführungszeichen."
                }
            }
        },
        {
            id: "d5-schatzsuche-geheimnisvoll",
            klasse: 5,
            titel: "Die geheimnisvolle Schatzsuche",
            schwerpunkt: "Zusammengesetzte Nomen",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Zusammengesetzte Nomen, Fugen-s und die Erhaltung der Stamm-Schreibweise.",
            saetzeAudio: [
                "audio/klasse5/d5_10_s1.mp3",
                "audio/klasse5/d5_10_s2.mp3",
                "audio/klasse5/d5_10_s3.mp3",
                "audio/klasse5/d5_10_s4.mp3",
                "audio/klasse5/d5_10_s5.mp3",
                "audio/klasse5/d5_10_s6.mp3"
            ],
            ganzerText: "Zur Feier des Geburtstags veranstalteten wir eine spannende Schatzsuche im Wald. Auf der geheimnisvollen Schatzkarte war ein alter Baumstamm eingezeichnet. Wir folgten dem schmalen Waldweg voller Vorfreude und mit wachsamen Augen. Plötzlich entdeckten wir eine schwere Holzkiste unter einem Haufen Laub. Ein glänzender Schlüssel steckte zum Glück bereits im rostigen Schloss. Drinnen lagen leckere Schokoladenmünzen und kleine Spielsachen für alle Kinder.",
            saetze: [
                "Zur Feier des Geburtstags veranstalteten wir eine spannende Schatzsuche im Wald.",
                "Auf der geheimnisvollen Schatzkarte war ein alter Baumstamm eingezeichnet.",
                "Wir folgten dem schmalen Waldweg voller Vorfreude und mit wachsamen Augen.",
                "Plötzlich entdeckten wir eine schwere Holzkiste unter einem Haufen Laub.",
                "Ein glänzender Schlüssel steckte zum Glück bereits im rostigen Schloss.",
                "Drinnen lagen leckere Schokoladenmünzen und kleine Spielsachen für alle Kinder."
            ],
            schwerpunktWoerter: {
                "Geburtstags": {
                    regelTitel: "Fugen-s bei Nomen",
                    regelErklaerung: "Geburt + Tag = Geburtstag. Zur besseren Aussprache wird ein Fugen-s eingefügt."
                },
                "Schatzsuche": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Schatz + Suche = Schatzsuche. Beide Teile werden zusammengeschrieben."
                },
                "Schatzkarte": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Schatz + Karte = Schatzkarte. Es wird zusammengeschrieben."
                },
                "Baumstamm": {
                    regelTitel: "Doppel-m am Ende",
                    regelErklaerung: "Baum + Stamm. 'Stamm' behält sein Doppel-m (Stamm) im zusammengesetzten Wort."
                },
                "Waldweg": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Wald + Weg = Waldweg. Die Auslautverhärtung am Ende von 'Wald' (d) und 'Weg' (g) bleibt erhalten."
                },
                "Holzkiste": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Holz + Kiste = Holzkiste."
                },
                "Schokoladenmünzen": {
                    regelTitel: "Mehrzahl-N-Verbindung",
                    regelErklaerung: "Schokolade + n + Münzen = Schokoladenmünzen. Das 'n' dient als Verbindungsglied."
                }
            }
        },
        {
            id: "d6-weltraum-reise",
            klasse: 6,
            titel: "Die abenteuerliche Reise",
            schwerpunkt: "Nominalisierung",
            dauer: "ca. 10-12 Min.",
            beschreibung: "Eine fantasievolle Geschichte über eine Reise in den Weltraum. Konzentriert sich auf das Erkennen von Nominalisierungssignalen.",
            saetzeAudio: [
                "audio/klasse6/d6_01_s1.mp3",
                "audio/klasse6/d6_01_s2.mp3",
                "audio/klasse6/d6_01_s3.mp3",
                "audio/klasse6/d6_01_s4.mp3",
                "audio/klasse6/d6_01_s5.mp3",
                "audio/klasse6/d6_01_s6.mp3",
                "audio/klasse6/d6_01_s7.mp3"
            ],
            ganzerText: "Die Besatzung des Raumschiffs war bereit für das große Abenteuer. Das Fliegen durch die unendliche Galaxie war für sie das Schönste, was sie sich vorstellen konnten. Sie wussten, dass diese Mission nicht ohne Gefahren sein würde. Plötzlich bemerkten sie ein seltsames Summen, das aus dem Maschinenraum kam. Beim genauen Hinsehen entdeckten sie einen winzigen Außerirdischen. Das Erschrecken wich schnell einem lauten Lachen, denn der kleine Gast winkte ihnen freundlich zu. Sie beschlossen, dass er an Bord bleiben durfte.",
            saetze: [
                "Die Besatzung des Raumschiffs war bereit für das große Abenteuer.",
                "Das Fliegen durch die unendliche Galaxie war für sie das Schönste, was sie sich vorstellen konnten.",
                "Sie wussten, dass diese Mission nicht ohne Gefahren sein würde.",
                "Plötzlich bemerkten sie ein seltsames Summen, das aus dem Maschinenraum kam.",
                "Beim genauen Hinsehen entdeckten sie einen winzigen Außerirdischen.",
                "Das Erschrecken wich schnell einem lauten Lachen, denn der kleine Gast winkte ihnen freundlich zu.",
                "Sie beschlossen, dass er an Bord bleiben durfte."
            ],
            schwerpunktWoerter: {
                "Fliegen": {
                    regelTitel: "Nominalisiertes Verb",
                    regelErklaerung: "Verben werden großgeschrieben, wenn ein Artikel davorsteht ('Das Fliegen')."
                },
                "Schönste": {
                    regelTitel: "Nominalisiertes Adjektiv",
                    regelErklaerung: "Adjektive werden großgeschrieben, wenn sie wie ein Nomen gebraucht werden, oft erkennbar am Signalwort davor ('das Schönste')."
                },
                "dass": {
                    regelTitel: "Konjunktion dass",
                    regelErklaerung: "Man schreibt 'dass' mit Doppel-s, wenn es eine Bindewort-Funktion hat und man es NICHT durch 'dieses', 'jenes' oder 'welches' ersetzen kann."
                },
                "das": {
                    regelTitel: "Relativpronomen das",
                    regelErklaerung: "Man schreibt 'das' mit einfachem s, wenn es sich auf ein Nomen davor bezieht (hier: 'das seltsame Summen, welches/das...') und durch 'welches' ersetzt werden kann."
                },
                "Hinsehen": {
                    regelTitel: "Nominalisierung nach Präposition",
                    regelErklaerung: "Nach Präpositionen wie 'bei', 'zum', 'vom', 'beim' ('bei + dem') werden Verben großgeschrieben ('beim Hinsehen')."
                },
                "Erschrecken": {
                    regelTitel: "Nominalisiertes Verb",
                    regelErklaerung: "Hier steht der Artikel 'Das' direkt davor, was das Verb 'erschrecken' zu einem Nomen macht (Großschreibung!)."
                },
                "Lachen": {
                    regelTitel: "Nominalisierung nach Adjektiv/Artikel",
                    regelErklaerung: "In 'einem lauten Lachen' signalisieren der unbestimmte Artikel 'einem' und das Adjektiv 'lauten' die Großschreibung von 'Lachen'."
                }
            }
        },
        {
            id: "d6-schulhof-geruecht",
            klasse: 6,
            titel: "Das Gerücht auf dem Schulhof",
            schwerpunkt: "das oder dass?",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Es geht heiß her auf dem Schulhof. Perfekt zum Festigen der schwierigen Unterscheidung von 'das' und 'dass'.",
            saetzeAudio: [
                "audio/klasse6/d6_02_s1.mp3",
                "audio/klasse6/d6_02_s2.mp3",
                "audio/klasse6/d6_02_s3.mp3",
                "audio/klasse6/d6_02_s4.mp3",
                "audio/klasse6/d6_02_s5.mp3",
                "audio/klasse6/d6_02_s6.mp3"
            ],
            ganzerText: "Es war ein openes Geheimnis, das auf dem ganzen Schulhof die Runde machte. Alle Schüler tuschelten darüber, dass der Ausflug nächste Woche ausfallen sollte. Das Gerücht verbreitete sich so schnell, dass sogar die Lehrer davon hörten. Herr Müller erklärte schließlich das Missverständnis bei der Klassenleiterstunde. Er betonte, dass der Bus pünktlich fahren würde und alle beruhigt sein könnten. Das freute die Klasse so sehr, dass ein lauter Jubel durch das Zimmer schallte.",
            saetze: [
                "Es war ein offenes Geheimnis, das auf dem ganzen Schulhof die Runde machte.",
                "Alle Schüler tuschelten darüber, dass der Ausflug nächste Woche ausfallen sollte.",
                "Das Gerücht verbreitete sich so schnell, dass sogar die Lehrer davon hörten.",
                "Herr Müller erklärte schließlich das Missverständnis bei der Klassenleiterstunde.",
                "Er betonte, dass der Bus pünktlich fahren würde und alle beruhigt sein könnten.",
                "Das freute die Klasse so sehr, dass ein lauter Jubel durch das Zimmer schallte."
            ],
            schwerpunktWoerter: {
                "das": {
                    regelTitel: "Relativpronomen das",
                    regelErklaerung: "Das 'das' bezieht sich hier auf 'ein offenes Geheimnis'. Du kannst es durch 'welches' ersetzen -> einfaches s!"
                },
                "dass": {
                    regelTitel: "Konjunktion dass",
                    regelErklaerung: "Hier verbindet 'dass' zwei Sätze als Bindewort. Die Ersatzprobe ('welches/dieses') funktioniert nicht -> Doppel-s!"
                },
                "Gerücht": {
                    regelTitel: "Großschreibung von Nomen",
                    regelErklaerung: "'Gerücht' ist ein Nomen (das Gerücht) und wird großgeschrieben."
                },
                "Missverständnis": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Miss + Verständnis. Das Nomen wird großgeschrieben und behält das Doppel-s am Ende."
                },
                "Klassenleiterstunde": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Klasse + Leiter + Stunde. Ein langes Wort, das am Anfang natürlich großgeschrieben wird."
                }
            }
        },
        {
            id: "d6-aufregender-samstag",
            klasse: 6,
            titel: "Ein aufregender Samstag",
            schwerpunkt: "Zeit- & Mengenangaben",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Großschreibung bei Tageszeiten nach Adverbien (heute Morgen) und unbestimmten Mengenangaben (etwas Schönes, viel Gutes).",
            saetzeAudio: [
                "audio/klasse6/d6_03_s1.mp3",
                "audio/klasse6/d6_03_s2.mp3",
                "audio/klasse6/d6_03_s3.mp3",
                "audio/klasse6/d6_03_s4.mp3",
                "audio/klasse6/d6_03_s5.mp3",
                "audio/klasse6/d6_03_s6.mp3"
            ],
            ganzerText: "Gestern Abend planten wir einen Ausflug für den heutigen Samstag. Heute Morgen weckte uns die strahlende Sonne bereits um sieben Uhr. Mama hatte etwas ganz Besonderes für unser Picknick im Wald vorbereitet. Wir packten alles Nötige ein und machten uns voller Freude auf den Weg. Im Park erlebten wir viel Spannendes, als wir ein kleines Eichhörnchen fütterten. Es gab wirklich nichts Schöneres, als den warmen Tag im Freien zu verbringen.",
            saetze: [
                "Gestern Abend planten wir einen Ausflug für den heutigen Samstag.",
                "Heute Morgen weckte uns die strahlende Sonne bereits um sieben Uhr.",
                "Mama hatte etwas ganz Besonderes für unser Picknick im Wald vorbereitet.",
                "Wir packten alles Nötige ein und machten uns voller Freude auf den Weg.",
                "Im Park erlebten wir viel Spannendes, als wir ein kleines Eichhörnchen fütterten.",
                "Es gab wirklich nichts Schöneres, als den warmen Tag im Freien zu verbringen."
            ],
            schwerpunktWoerter: {
                "Abend": {
                    regelTitel: "Tageszeit nach Adverb",
                    regelErklaerung: "Tageszeiten nach 'gestern', 'heute', 'morgen' werden großgeschrieben (gestern Abend)."
                },
                "Morgen": {
                    regelTitel: "Tageszeit nach Adverb",
                    regelErklaerung: "Auch 'Morgen' nach 'heute' wird großgeschrieben (heute Morgen)."
                },
                "Besonderes": {
                    regelTitel: "Mengenangabe",
                    regelErklaerung: "Nach Wörtern wie 'etwas', 'viel', 'wenig', 'nichts' werden Adjektive großgeschrieben (etwas Besonderes)."
                },
                "Nötige": {
                    regelTitel: "Nominalisierung",
                    regelErklaerung: "Nach Signalwörtern wie 'alles', 'einiges' schreibt man das nachfolgende Wort groß (alles Nötige)."
                },
                "Spannendes": {
                    regelTitel: "Mengenangabe",
                    regelErklaerung: "Nach 'viel' wird das Adjektiv großgeschrieben (viel Spannendes)."
                },
                "Schöneres": {
                    regelTitel: "Mengenangabe",
                    regelErklaerung: "Nach 'nichts' wird das Adjektiv im Komparativ großgeschrieben (nichts Schöneres)."
                },
                "Freien": {
                    regelTitel: "Nominalisierung nach Präposition",
                    regelErklaerung: "Nach Präpositionen wie 'im' (in + dem) schreiben wir nachfolgende Wörter groß (im Freien)."
                }
            }
        },
        {
            id: "d6-rhythmus-club",
            klasse: 6,
            titel: "Der verrückte Rhythmus-Club",
            schwerpunkt: "Fremdwörter",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Schreibweise häufiger Fremdwörter mit schwierigen Buchstabenkombinationen (y, ph, rh, ch, th).",
            saetzeAudio: [
                "audio/klasse6/d6_04_s1.mp3",
                "audio/klasse6/d6_04_s2.mp3",
                "audio/klasse6/d6_04_s3.mp3",
                "audio/klasse6/d6_04_s4.mp3",
                "audio/klasse6/d6_04_s5.mp3",
                "audio/klasse6/d6_04_s6.mp3"
            ],
            ganzerText: "In unserer Schule gibt es seit Kurzem einen sehr beliebten Rhythmus-Club. Der Trainer zeigt uns, wie man mit einer speziellen Technik tolle Beats erzeugt. Auf einem alten Xylophon spielen wir fantastische Melodien aus aller Welt. Sogar ein echtes Mikrophon steht für unsere Gesangsübungen auf der Bühne. Jedes Mitglied bringt viel Theorie und noch mehr Begeisterung mit. Die erste Theater-Aufführung vor den Eltern war ein riesiger Erfolg.",
            saetze: [
                "In unserer Schule gibt es seit Kurzem einen sehr beliebten Rhythmus-Club.",
                "Der Trainer zeigt uns, wie man mit einer speziellen Technik tolle Beats erzeugt.",
                "Auf einem alten Xylophon spielen wir fantastische Melodien aus aller Welt.",
                "Sogar ein echtes Mikrophon steht für unsere Gesangsübungen auf der Bühne.",
                "Jedes Mitglied bringt viel Theorie und noch mehr Begeisterung mit.",
                "Die erste Theater-Aufführung vor den Eltern war ein riesiger Erfolg."
            ],
            schwerpunktWoerter: {
                "Rhythmus-Club": {
                    regelTitel: "Schwieriges Fremdwort",
                    regelErklaerung: "Rhythmus wird mit 'Rh' am Anfang, einem 'y' und einem stummen 'h' nach dem 't' geschrieben: R-h-y-t-h-m-u-s."
                },
                "speziellen": {
                    regelTitel: "Fremdwort mit z-Laut als c",
                    regelErklaerung: "Wird mit 'z'-Laut gesprochen, aber lateinisch mit 'c' geschrieben (speziell)."
                },
                "Technik": {
                    regelTitel: "ch-Schreibung bei Fremdwort",
                    regelErklaerung: "Das 'ch' wird hier wie ein k-Laut gesprochen, aber 'ch' geschrieben."
                },
                "Xylophon": {
                    regelTitel: "y und ph",
                    regelErklaerung: "Griechischer Ursprung: 'Xylo-' mit 'y' und '-phon' mit 'ph' (wird wie 'f' gesprochen)."
                },
                "Mikrophon": {
                    regelTitel: "ph-Schreibung",
                    regelErklaerung: "Griechischer Ursprung: Wird mit 'ph' geschrieben (alternative neuere Schreibweise: Mikrofon, aber oft noch klassisch)."
                },
                "Theorie": {
                    regelTitel: "th-Schreibung",
                    regelErklaerung: "Griechischer Ursprung: 'th' am Anfang für das stumme th."
                },
                "Theater-Aufführung": {
                    regelTitel: "th-Schreibung",
                    regelErklaerung: "'Theater' wird am Anfang mit 'th' geschrieben."
                }
            }
        },
        {
            id: "d6-kriminalfall-seltsam",
            klasse: 6,
            titel: "Ein seltsamer Kriminalfall",
            schwerpunkt: "s-Laute Vertiefung",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Vertiefte s-Laut-Regeln inklusive Fremdwörter, Genitiv-s und schwierige Kombinationen.",
            saetzeAudio: [
                "audio/klasse6/d6_05_s1.mp3",
                "audio/klasse6/d6_05_s2.mp3",
                "audio/klasse6/d6_05_s3.mp3",
                "audio/klasse6/d6_05_s4.mp3",
                "audio/klasse6/d6_05_s5.mp3",
                "audio/klasse6/d6_05_s6.mp3"
            ],
            ganzerText: "Der schlaue Detektiv stand schweigend vor dem verlassenen Haus des Verdächtigen. Er wusste genau, dass jeder kleinste Hinweis extrem wichtig sein konnte. Plötzlich sah er eine zerrissene Notiz auf dem nassen Gras liegen. Darauf stand eine Adresse, die ihn direkt zu einem geheimen Keller führte. Mit einem mulmigen Gefühl schlich er leise durch die dunkle Gasse. Nach stundenlanger Suche war der Fall endlich gelöst und der Täter gefasst.",
            saetze: [
                "Der schlaue Detektiv stand schweigend vor dem verlassenen Haus des Verdächtigen.",
                "Er wusste genau, dass jeder kleinste Hinweis extrem wichtig sein konnte.",
                "Plötzlich sah er eine zerrissene Notiz auf dem nassen Gras liegen.",
                "Darauf stand eine Adresse, die ihn direkt zu einem geheimen Keller führte.",
                "Mit einem mulmigen Gefühl schlich er leise durch die dunkle Gasse.",
                "Nach stundenlanger Suche war der Fall endlich gelöst und der Täter gefasst."
            ],
            schwerpunktWoerter: {
                "Haus": {
                    regelTitel: "s-Laut am Ende",
                    regelErklaerung: "Wir schreiben einfaches 's', da es im Plural (Häuser) stimmhaft gesprochen wird."
                },
                "Verdächtigen": {
                    regelTitel: "Genitiv-s & Nominalisierung",
                    regelErklaerung: "Das Nomen 'des Verdächtigen' wird großgeschrieben (Signalwort: 'des' davor)."
                },
                "wusste": {
                    regelTitel: "ss-Schreibung",
                    regelErklaerung: "Nach dem kurzen Vokal 'u' in 'wusste' schreiben wir 'ss'."
                },
                "dass": {
                    regelTitel: "Konjunktion dass",
                    regelErklaerung: "Bindewort 'dass' mit Doppel-s (nicht ersetzbar durch dieses/jenes/welches)."
                },
                "zerrissene": {
                    regelTitel: "ss-Schreibung",
                    regelErklaerung: "Nach dem kurzen Vokal 'i' in 'zerrissen' schreiben wir 'ss'."
                },
                "nassen": {
                    regelTitel: "ss-Schreibung",
                    regelErklaerung: "Nach dem kurzen Vokal 'a' in 'nass' verdoppeln wir das 's' zu 'ss'."
                },
                "Gasse": {
                    regelTitel: "ss-Schreibung",
                    regelErklaerung: "Nach dem kurzen Vokal 'a' schreiben wir 'ss' (Gasse)."
                },
                "gefasst": {
                    regelTitel: "ss-Schreibung",
                    regelErklaerung: "Nach dem kurzen Vokal 'a' schreiben wir 'ss' (fassen -> gefasst)."
                }
            }
        },
        {
            id: "d6-gemeinsam-wandern",
            klasse: 6,
            titel: "Gemeinsam wandern",
            schwerpunkt: "Getrennt- & Zusammenschreibung",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Häufige Fehlerquellen bei Verbindungen aus Verb + Verb, Adjektiv + Verb und Nomen + Verb.",
            saetzeAudio: [
                "audio/klasse6/d6_06_s1.mp3",
                "audio/klasse6/d6_06_s2.mp3",
                "audio/klasse6/d6_06_s3.mp3",
                "audio/klasse6/d6_06_s4.mp3",
                "audio/klasse6/d6_06_s5.mp3",
                "audio/klasse6/d6_06_s6.mp3"
            ],
            ganzerText: "Um fit zu bleiben, wollen wir heute gemeinsam im nahen Nationalpark wandern gehen. Vor dem Start müssen wir alle Sachen sorgfältig zusammensuchen. Auf dem Weg bergauf fangen einige Kinder laut an zu singen. Wir müssen gut aufpassen, dass niemand auf den feuchten Steinen ausrutscht. Nach einer Stunde machen wir Halt und essen unsere Brote gemütlich auf. Nachmittags kehren wir erschöpft, aber glücklich nach Hause zurück.",
            saetze: [
                "Um fit zu bleiben, wollen wir heute gemeinsam im nahen Nationalpark wandern gehen.",
                "Vor dem Start müssen wir alle Sachen sorgfältig zusammensuchen.",
                "Auf dem Weg bergauf fangen einige Kinder laut an zu singen.",
                "Wir müssen gut aufpassen, dass niemand auf den feuchten Steinen ausrutscht.",
                "Nach einer Stunde machen wir Halt und essen unsere Brote gemütlich auf.",
                "Nachmittags kehren wir erschöpft, aber glücklich nach Hause zurück."
            ],
            schwerpunktWoerter: {
                "wandern gehen": {
                    regelTitel: "Verb + Verb getrennt",
                    regelErklaerung: "Verbindungen aus zwei Verben (wandern + gehen) werden in der Regel getrennt geschrieben."
                },
                "zusammensuchen": {
                    regelTitel: "Zusammengesetztes Verb",
                    regelErklaerung: "Wenn ein Verb mit einer Präposition/einem Adverb eine neue Bedeutung bildet, schreibt man es zusammen (zusammen + suchen)."
                },
                "gut aufpassen": {
                    regelTitel: "Adjektiv + Verb getrennt",
                    regelErklaerung: "Verbindungen aus einem Adjektiv und einem Verb (gut + aufpassen) schreibt man meistens getrennt."
                },
                "ausrutscht": {
                    regelTitel: "Zusammengesetztes Verb",
                    regelErklaerung: "aus + rutschen wird zusammengeschrieben."
                },
                "Halt": {
                    regelTitel: "Nomen Halt",
                    regelErklaerung: "In 'Halt machen' wird das Nomen 'Halt' großgeschrieben, aber vom Verb getrennt."
                },
                "nach Hause": {
                    regelTitel: "Feste Verbindung",
                    regelErklaerung: "Die Verbindung 'nach Hause' wird im modernen Deutsch meistens getrennt und 'Hause' großgeschrieben."
                },
                "zurück": {
                    regelTitel: "Zusammenschreibung",
                    regelErklaerung: "zurück + kehren (kehren ... zurück) bildet ein trennbares Verb."
                }
            }
        },
        {
            id: "d6-traum-bauernhof",
            klasse: 6,
            titel: "Der Traum-Bauernhof",
            schwerpunkt: "Wortstammprinzip & ä/äu",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Schreibung von Umlauten durch Ableitung vom Wortstamm (z. B. Häuser von Haus, Träume von Traum, Gefährlich von Gefahr).",
            saetzeAudio: [
                "audio/klasse6/d6_07_s1.mp3",
                "audio/klasse6/d6_07_s2.mp3",
                "audio/klasse6/d6_07_s3.mp3",
                "audio/klasse6/d6_07_s4.mp3",
                "audio/klasse6/d6_07_s5.mp3",
                "audio/klasse6/d6_07_s6.mp3"
            ],
            ganzerText: "In meinen nächtlichen Träumen besitze ich oft einen riesigen Bauernhof. Dort stehen mehrere gemütliche Häuser für Gäste aus aller Welt. Auf den weiten Weiden grasen friedlich viele braune Kühe und Schafe. Die Arbeit dort ist manchmal anstrengend, aber niemals gefährlich. Jeden Tag helfe ich fleißig beim Füttern der scheuen Tiere. Am Abend genießen wir alle die absolute Ruhe auf dem Land.",
            saetze: [
                "In meinen nächtlichen Träumen besitze ich oft einen riesigen Bauernhof.",
                "Dort stehen mehrere gemütliche Häuser für Gäste aus aller Welt.",
                "Auf den weiten Weiden grasen friedlich viele braune Kühe und Schafe.",
                "Die Arbeit dort ist manchmal anstrengend, aber niemals gefährlich.",
                "Jeden Tag helfe ich fleißig beim Füttern der scheuen Tiere.",
                "Am Abend genießen wir alle die absolute Ruhe auf dem Land."
            ],
            schwerpunktWoerter: {
                "Träumen": {
                    regelTitel: "Ableitung mit äu",
                    regelErklaerung: "Kommt von 'Traum'. Da der Wortstamm ein 'au' hat, wird der Umlaut mit 'äu' geschrieben."
                },
                "Häuser": {
                    regelTitel: "Ableitung mit äu",
                    regelErklaerung: "Kommt von 'Haus'. Da 'Haus' ein 'au' hat, schreiben wir die Mehrzahl mit 'äu'."
                },
                "Gäste": {
                    regelTitel: "Ableitung mit ä",
                    regelErklaerung: "Kommt von 'Gast'. Da der Wortstamm ein 'a' hat, wird die Mehrzahl mit 'ä' geschrieben."
                },
                "gefährlich": {
                    regelTitel: "Ableitung mit ä",
                    regelErklaerung: "Kommt von 'Gefahr'. Da der Stamm ein 'a' hat, schreiben wir das Adjektiv mit 'ä'."
                },
                "fleißig": {
                    regelTitel: "ß-Schreibung",
                    regelErklaerung: "Nach dem Doppelvokal 'ei' schreiben wir 'ß' (fleißig)."
                },
                "Ruhe": {
                    regelTitel: "Dehnungs-h",
                    regelErklaerung: "Das Nomen 'Ruhe' wird mit einem stummen 'h' geschrieben."
                }
            }
        },
        {
            id: "d6-erfindertag-gross",
            klasse: 6,
            titel: "Der große Erfindertag",
            schwerpunkt: "Satzgefüge",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Kommasetzung bei Nebensätzen (Relativsätze, Objektsätze mit dass/weil/obwohl).",
            saetzeAudio: [
                "audio/klasse6/d6_08_s1.mp3",
                "audio/klasse6/d6_08_s2.mp3",
                "audio/klasse6/d6_08_s3.mp3",
                "audio/klasse6/d6_08_s4.mp3",
                "audio/klasse6/d6_08_s5.mp3",
                "audio/klasse6/d6_08_s6.mp3"
            ],
            ganzerText: "Gestern veranstalteten wir in der Schule einen großen Projekttag, der allen Spaß machte. Wir durften eigene Maschinen erfinden, die ein echtes Problem im Alltag lösen. Lukas baute einen automatischen Stifthalter, obwohl er anfangs keine Idee hatte. Der Lehrer lobte die tollen Modelle, weil sie sehr kreativ gestaltet waren. Wir hoffen sehr, dass wir so einen Tag bald wiederholen können. Am Ende des Tages räumten wir alle fleißig auf, damit der Raum sauber war.",
            saetze: [
                "Gestern veranstalteten wir in der Schule einen großen Projekttag, der allen Spaß machte.",
                "Wir durften eigene Maschinen erfinden, die ein echtes Problem im Alltag lösen.",
                "Lukas baute einen automatischen Stifthalter, obwohl er anfangs keine Idee hatte.",
                "Der Lehrer lobte die tollen Modelle, weil sie sehr kreativ gestaltet waren.",
                "Wir hoffen sehr, dass wir so einen Tag bald wiederholen können.",
                "Am Ende des Tages räumten wir alle fleißig auf, damit der Raum sauber war."
            ],
            schwerpunktWoerter: {
                "Projekttag,": {
                    regelTitel: "Komma vor Relativsatz",
                    regelErklaerung: "Ein Relativsatz (hier eingeleitet durch 'der') wird immer durch ein Komma vom Hauptsatz getrennt."
                },
                "erfinden,": {
                    regelTitel: "Komma vor Relativsatz",
                    regelErklaerung: "Auch der Nebensatz mit 'die' muss durch ein Komma abgetrennt werden."
                },
                "Stifthalter,": {
                    regelTitel: "Komma vor obwohl",
                    regelErklaerung: "Vor die Konjunktion 'obwohl' kommt ein Komma, da ein Nebensatz beginnt."
                },
                "Modelle,": {
                    regelTitel: "Komma vor Kausalsatz",
                    regelErklaerung: "Vor dem Nebensatz, der den Grund nennt (eingeleitet durch 'weil'), steht ein Komma."
                },
                "sehr,": {
                    regelTitel: "Komma vor Objektsatz",
                    regelErklaerung: "Vor dem 'dass'-Satz muss ein Komma gesetzt werden."
                },
                "auf,": {
                    regelTitel: "Komma vor Konjunktionalsatz",
                    regelErklaerung: "Vor 'damit' steht ein Komma, da es einen Finalsatz einleitet."
                }
            }
        },
        {
            id: "d6-weltall-blick",
            klasse: 6,
            titel: "Der Blick ins Weltall",
            schwerpunkt: "Dehnungen & Schärfungen",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Anspruchsvolle Wörter mit stummem h, Doppelvokalen und doppelten Konsonanten.",
            saetzeAudio: [
                "audio/klasse6/d6_09_s1.mp3",
                "audio/klasse6/d6_09_s2.mp3",
                "audio/klasse6/d6_09_s3.mp3",
                "audio/klasse6/d6_09_s4.mp3",
                "audio/klasse6/d6_09_s5.mp3",
                "audio/klasse6/d6_09_s6.mp3"
            ],
            ganzerText: "Gestern Nacht blickte ich durch ein großes, glänzendes Teleskop ins Weltall. Der Mond schien hell und warf ein silbernes Licht auf die Erde nieder. Ich sah unzählige Sterne flackern, die Millionen von Jahren alt sein müssen. Es war ein faszinierender Anblick, der mir den Atem raubte. Die unendliche Tiefe des Alls ist voller unentdeckter Geheimnisse. Ich fühlte mich plötzlich ganz klein unter diesem riesigen Himmelszelt.",
            saetze: [
                "Gestern Nacht blickte ich durch ein großes, glänzendes Teleskop ins Weltall.",
                "Der Mond schien hell und warf ein silbernes Licht auf die Erde nieder.",
                "Ich sah unzählige Sterne flackern, die Millionen von Jahren alt sein müssen.",
                "Es war ein faszinierender Anblick, der mir den Atem raubte.",
                "Die unendliche Tiefe des Alls ist voller unentdeckter Geheimnisse.",
                "Ich fühlte mich plötzlich ganz klein unter diesem riesigen Himmelszelt."
            ],
            schwerpunktWoerter: {
                "blickte": {
                    regelTitel: "Schärfung mit ck",
                    regelErklaerung: "Nach dem kurzen 'i' schreiben wir 'ck' (blickte)."
                },
                "hell": {
                    regelTitel: "Schärfung mit ll",
                    regelErklaerung: "Nach dem kurzen 'e' schreiben wir 'll' (hell)."
                },
                "sah": {
                    regelTitel: "Dehnungs-h",
                    regelErklaerung: "Bei 'sehen/sah' schreiben wir ein stummes h zur Dehnung des Vokals."
                },
                "müssen": {
                    regelTitel: "Schärfung mit ss",
                    regelErklaerung: "Nach dem kurzen 'ü' schreiben wir 'ss'."
                },
                "Atem": {
                    regelTitel: "Dehnung ohne h",
                    regelErklaerung: "Obwohl das 'A' lang gesprochen wird, schreiben wir 'Atem' ohne Dehnungs-h."
                },
                "Tiefe": {
                    regelTitel: "Dehnung mit ie",
                    regelErklaerung: "Das lang gesprochene 'i' wird als 'ie' geschrieben (Tiefe)."
                },
                "Alls": {
                    regelTitel: "Schärfung mit ll",
                    regelErklaerung: "Kommt von 'das All', kurzes 'A', daher 'll'."
                }
            }
        },
        {
            id: "d6-deutsches-museum-fahrt",
            klasse: 6,
            titel: "Fahrt zum Deutschen Museum",
            schwerpunkt: "Eigennamen",
            dauer: "ca. 8-10 Min.",
            beschreibung: "Großschreibung von mehrteiligen Eigennamen und festen Begriffen (z. B. Rotes Meer, Deutsches Museum).",
            saetzeAudio: [
                "audio/klasse6/d6_10_s1.mp3",
                "audio/klasse6/d6_10_s2.mp3",
                "audio/klasse6/d6_10_s3.mp3",
                "audio/klasse6/d6_10_s4.mp3",
                "audio/klasse6/d6_10_s5.mp3",
                "audio/klasse6/d6_10_s6.mp3"
            ],
            ganzerText: "Unsere Klasse plante eine Exkursion zum berühmten Deutschen Museum in München. Früh am Morgen trafen wir uns alle gut gelaunt am Hauptbahnhof. Die Fahrt mit dem Schnellzug war aufregend und verging wie im Flug. Im Museum bewunderten wir historische Flugzeuge und riesige Maschinen. Ein netter Führer erklärte uns die Entdeckungen berühmter Wissenschaftler. Voller neuem Wissen kehrten wir am späten Nachmittag glücklich zurück.",
            saetze: [
                "Unsere Klasse plante eine Exkursion zum berühmten Deutschen Museum in München.",
                "Früh am Morgen trafen wir uns alle gut gelaunt am Hauptbahnhof.",
                "Die Fahrt mit dem Schnellzug war aufregend und verging wie im Flug.",
                "Im Museum bewunderten wir historische Flugzeuge und riesige Maschinen.",
                "Ein netter Führer erklärte uns die Entdeckungen berühmter Wissenschaftler.",
                "Voller neuem Wissen kehrten wir am späten Nachmittag glücklich zurück."
            ],
            schwerpunktWoerter: {
                "Deutschen": {
                    regelTitel: "Eigenname groß",
                    regelErklaerung: "In mehrteiligen Eigennamen werden auch die Adjektive großgeschrieben (Deutsches Museum)."
                },
                "Museum": {
                    regelTitel: "Nomen groß",
                    regelErklaerung: "Das Nomen 'Museum' wird großgeschrieben."
                },
                "Morgen": {
                    regelTitel: "Tageszeit",
                    regelErklaerung: "Tageszeiten nach Präpositionen werden großgeschrieben (am Morgen)."
                },
                "Hauptbahnhof": {
                    regelTitel: "Zusammengesetztes Nomen",
                    regelErklaerung: "Haupt + Bahnhof. Es wird als Eigenname/Nomen großgeschrieben."
                },
                "Fahrt": {
                    regelTitel: "Dehnungs-h",
                    regelErklaerung: "Kommt von 'fahren' und hat ein stummes h zur Dehnung."
                },
                
                "Wissenschaftler": {
                    regelTitel: "Doppel-s und sch",
                    regelErklaerung: "'Wissenschaftler' wird nach dem kurzen 'i' in 'Wissen' mit 'ss' geschrieben. Am Anfang der zweiten Silbe steht 'sch'."
                }
            }
        }
    ],
    fehlerDetektivAufgaben: [

        {
            id: "fd-5-konsonanten",
            klasse: 5,
            titel: "Der verflixte Bauernhof",
            beschreibung: "Finde die 4 Rechtschreibfehler, die sich auf den Bauernhof geschlichen haben! Tipp: Achte auf doppelte Konsonanten.",
            originalSatz: "Auf dem alten Bauernhof giebt es viele Tiere. Die Kühe fressen saftiges Gras auf der Wiese, während die kleinen Küken fröhlich piepsen. Der Bauer holt schnel den Traktor aus dem Schuppen, weil er das heu einfahren muss. Doch plötzlich rennt eine Katze über den Hof, die ein bischen Angst vor dem lauten Motor hat.",
            // Die genaue Wortstruktur für das Spiel (falsche Wörter haben 'falsch' und 'richtig')
            woerter: [
                { text: "Auf", falsch: false },
                { text: "dem", falsch: false },
                { text: "alten", falsch: false },
                { text: "Bauernhof", falsch: false },
                { text: "giebt", falsch: true, richtig: "gibt", erklaerung: "Kurzes 'i'! Das Verb 'geben' schreibt man in der konjugierten Form 'er gibt' mit kurzem einfachen 'i' und ohne 'e'." },
                { text: "es", falsch: false },
                { text: "viele", falsch: false },
                { text: "Tiere.", falsch: false },
                { text: "Die", falsch: false },
                { text: "Kühe", falsch: false },
                { text: "fressen", falsch: false },
                { text: "saftiges", falsch: false },
                { text: "Gras", falsch: false },
                { text: "auf", falsch: false },
                { text: "der", falsch: false },
                { text: "Wiese,", falsch: false },
                { text: "während", falsch: false },
                { text: "die", falsch: false },
                { text: "kleinen", falsch: false },
                { text: "Küken", falsch: false },
                { text: "fröhlich", falsch: false },
                { text: "piepsen.", falsch: false },
                { text: "Der", falsch: false },
                { text: "Bauer", falsch: false },
                { text: "holt", falsch: false },
                { text: "schnel", falsch: true, richtig: "schnell", erklaerung: "Mitlautverdopplung! Das 'e' in 'schnell' wird kurz gesprochen, deshalb muss danach das 'l' verdoppelt werden ('ll')." },
                { text: "den", falsch: false },
                { text: "Traktor", falsch: false },
                { text: "aus", falsch: false },
                { text: "dem", falsch: false },
                { text: "Schuppen,", falsch: false },
                { text: "weil", falsch: false },
                { text: "er", falsch: false },
                { text: "das", falsch: false },
                { text: "heu", falsch: true, richtig: "Heu", erklaerung: "Großschreibung! 'Heu' ist ein Nomen (das Heu) und muss mit großem 'H' geschrieben werden." },
                { text: "einfahren", falsch: false },
                { text: "muss.", falsch: false },
                { text: "Doch", falsch: false },
                { text: "plötzlich", falsch: false },
                { text: "rennt", falsch: false },
                { text: "eine", falsch: false },
                { text: "Katze", falsch: false },
                { text: "über", falsch: false },
                { text: "den", falsch: false },
                { text: "Hof,", falsch: false },
                { text: "die", falsch: false },
                { text: "ein", falsch: false },
                { text: "bischen", falsch: true, richtig: "bisschen", erklaerung: "Schärfung mit ss! Das Wort 'bisschen' leitet sich historisch von 'Biss' ab, wird kurz gesprochen und daher mit 'ss' geschrieben." },
                { text: "Angst", falsch: false },
                { text: "vor", falsch: false },
                { text: "dem", falsch: false },
                { text: "lauten", falsch: false },
                { text: "Motor", falsch: false },
                { text: "hat.", falsch: false }
            ]
        },
        {
            id: "fd-5-herbst",
            klasse: 5,
            titel: "Ein stürmischer Herbsttag",
            beschreibung: "Finde die 4 Rechtschreibfehler im herbstlichen Text! Tipp: Achte auf Dehnung, Großschreibung und Auslautverhärtung.",
            originalSatz: "Im Herbst weht ein kalter wint durch die Bäume. Die Blätter fligen bunt durch die Luft, während die Kinder im Wald nach Pilzen suchen. Papa will heute Suppe kochen, doch das gemüse ist noch nicht geputzt. Wir helfen fleisig, damit die Suppe bald fertig ist.",
            woerter: [
                { text: "Im", falsch: false },
                { text: "Herbst", falsch: false },
                { text: "weht", falsch: false },
                { text: "ein", falsch: false },
                { text: "kalter", falsch: false },
                { text: "wint", falsch: true, richtig: "Wind", erklaerung: "Auslautverhärtung! Wenn man 'Wind' verlängert (Winde), hört man das 'd' ganz deutlich." },
                { text: "durch", falsch: false },
                { text: "die", falsch: false },
                { text: "Bäume.", falsch: false },
                { text: "Die", falsch: false },
                { text: "Blätter", falsch: false },
                { text: "fligen", falsch: true, richtig: "fliegen", erklaerung: "Dehnung mit ie! Das lang gesprochene 'i' wird im Deutschen fast immer als 'ie' geschrieben." },
                { text: "bunt", falsch: false },
                { text: "durch", falsch: false },
                { text: "die", falsch: false },
                { text: "Luft,", falsch: false },
                { text: "während", falsch: false },
                { text: "die", falsch: false },
                { text: "Kinder", falsch: false },
                { text: "im", falsch: false },
                { text: "Wald", falsch: false },
                { text: "nach", falsch: false },
                { text: "Pilzen", falsch: false },
                { text: "suchen.", falsch: false },
                { text: "Papa", falsch: false },
                { text: "will", falsch: false },
                { text: "heute", falsch: false },
                { text: "Suppe", falsch: false },
                { text: "kochen,", falsch: false },
                { text: "doch", falsch: false },
                { text: "das", falsch: false },
                { text: "gemüse", falsch: true, richtig: "Gemüse", erklaerung: "Großschreibung von Nomen! 'Gemüse' ist ein Nomen (das Gemüse) und muss großgeschrieben werden." },
                { text: "ist", falsch: false },
                { text: "noch", falsch: false },
                { text: "nicht", falsch: false },
                { text: "geputzt.", falsch: false },
                { text: "Wir", falsch: false },
                { text: "helfen", falsch: false },
                { text: "fleisig,", falsch: true, richtig: "fleißig", erklaerung: "s-Laut nach Doppelvokal! Nach dem Zwielaut 'ei' schreibt man den stimmlosen s-Laut als 'ß'." },
                { text: "damit", falsch: false },
                { text: "die", falsch: false },
                { text: "Suppe", falsch: false },
                { text: "bald", falsch: false },
                { text: "fertig", falsch: false },
                { text: "ist.", falsch: false }
            ]
        },
        {
            id: "fd-6-das-dass",
            klasse: 6,
            titel: "Aufregung im Zoo",
            beschreibung: "In diesem Zoobericht haben sich 4 fiese Fehler eingeschlichen. Kannst du den Pfleger retten und alle korrigieren?",
            originalSatz: "Es ist bekannt, das Affen sehr schlaue Tiere sind. Gestern beobachtete ein Besucher ein kleines Äffchen dabei, wie es eine Nuss knackte. Das lustige war, dass es die Schale mit einem Stein zerschlug. Alle Zuschauer staunten über das, was das Tier da tat. Der Wärter erklärte, dass das verhalten der Tiere im Sommer besonders lebhaft sei, weil sie das warme Wetter lieben.",
            woerter: [
                { text: "Es", falsch: false },
                { text: "ist", falsch: false },
                { text: "bekannt,", falsch: false },
                { text: "das", falsch: true, richtig: "dass", erklaerung: "Konjunktion 'dass'! Es verbindet den Hauptsatz mit dem Nebensatz. Die Ersatzprobe ('welches/dieses Affen...') funktioniert hier nicht, also Doppel-s!" },
                { text: "Affen", falsch: false },
                { text: "sehr", falsch: false },
                { text: "schlaue", falsch: false },
                { text: "Tiere", falsch: false },
                { text: "sind.", falsch: false },
                { text: "Gestern", falsch: false },
                { text: "beobachtete", falsch: false },
                { text: "ein", falsch: false },
                { text: "Besucher", falsch: false },
                { text: "ein", falsch: false },
                { text: "kleines", falsch: false },
                { text: "Äffchen", falsch: false },
                { text: "dabei,", falsch: false },
                { text: "wie", falsch: false },
                { text: "es", falsch: false },
                { text: "eine", falsch: false },
                { text: "Nuss", falsch: false },
                { text: "knackte.", falsch: false },
                { text: "Das", falsch: false },
                { text: "lustige", falsch: true, richtig: "Lustige", erklaerung: "Nominalisierung von Adjektiven! 'Lustige' wird hier wie ein Nomen gebraucht. Das Signalwort ist der Artikel 'Das' davor -> Großschreibung!" },
                { text: "war,", falsch: false },
                { text: "dass", falsch: false },
                { text: "es", falsch: false },
                { text: "die", falsch: false },
                { text: "Schale", falsch: false },
                { text: "mit", falsch: false },
                { text: "einem", falsch: false },
                { text: "Stein", falsch: false },
                { text: "zerschlug.", falsch: false },
                { text: "Alle", falsch: false },
                { text: "Zuschauer", falsch: false },
                { text: "staunten", falsch: false },
                { text: "über", falsch: false },
                { text: "das,", falsch: false },
                { text: "was", falsch: false },
                { text: "das", falsch: false },
                { text: "Tier", falsch: false },
                { text: "da", falsch: false },
                { text: "tat.", falsch: false },
                { text: "Der", falsch: false },
                { text: "Wärter", falsch: false },
                { text: "erklärte,", falsch: false },
                { text: "dass", falsch: false },
                { text: "das", falsch: false },
                { text: "verhalten", falsch: true, richtig: "Verhalten", erklaerung: "Großschreibung von Nomen! Das Wort 'Verhalten' ist ein Nomen (das Verhalten) und muss immer großgeschrieben werden." },
                { text: "der", falsch: false },
                { text: "Tiere", falsch: false },
                { text: "im", falsch: false },
                { text: "Sommer", falsch: false },
                { text: "besonders", falsch: false },
                { text: "lebhaft", falsch: false },
                { text: "sei,", falsch: false },
                { text: "weil", falsch: false },
                { text: "sie", falsch: false },
                { text: "das", falsch: false },
                { text: "warme", falsch: false },
                { text: "Wetter", falsch: false },
                { text: "lieben.", falsch: false }
            ]
        },
        {
            id: "fd-6-tagebuch",
            klasse: 6,
            titel: "Das geheime Tagebuch",
            beschreibung: "Hier haben sich 4 fiese Fehler versteckt! Achte besonders auf Nominalisierung und das/dass.",
            originalSatz: "Das Mädchen versteckte ihr Buch unter dem Bett, weil sie nicht wollte, das jemand ihre geheimnisse liest. Gestern Abend bemerkte sie beim aufräumen ihres Zimmers, dass das Buch verschwunden war. Das erschrecken war groß, bis sie sah, dass ihr kleiner Bruder damit spielte.",
            woerter: [
                { text: "Das", falsch: false },
                { text: "Mädchen", falsch: false },
                { text: "versteckte", falsch: false },
                { text: "ihr", falsch: false },
                { text: "Buch", falsch: false },
                { text: "unter", falsch: false },
                { text: "dem", falsch: false },
                { text: "Bett,", falsch: false },
                { text: "weil", falsch: false },
                { text: "sie", falsch: false },
                { text: "nicht", falsch: false },
                { text: "wollte,", falsch: false },
                { text: "das", falsch: true, richtig: "dass", erklaerung: "Konjunktion 'dass'! Es verbindet den Nebensatz und kann nicht durch 'welches/dieses' ersetzt werden -> Doppel-s!" },
                { text: "jemand", falsch: false },
                { text: "ihre", falsch: false },
                { text: "geheimnisse", falsch: true, richtig: "Geheimnisse", erklaerung: "Großschreibung von Nomen! 'Geheimnisse' sind Nomen und müssen mit einem großen 'G' geschrieben werden." },
                { text: "liest.", falsch: false },
                { text: "Gestern", falsch: false },
                { text: "Abend", falsch: false },
                { text: "bemerkte", falsch: false },
                { text: "sie", falsch: false },
                { text: "beim", falsch: false },
                { text: "aufräumen", falsch: true, richtig: "Aufräumen", erklaerung: "Nominalisierung nach Präposition! Nach Signalwörtern wie 'beim' (bei + dem) werden Verben großgeschrieben ('beim Aufräumen')." },
                { text: "ihres", falsch: false },
                { text: "Zimmers,", falsch: false },
                { text: "dass", falsch: false },
                { text: "das", falsch: false },
                { text: "Buch", falsch: false },
                { text: "verschwunden", falsch: false },
                { text: "war.", falsch: false },
                { text: "Das", falsch: false },
                { text: "erschrecken", falsch: true, richtig: "Erschrecken", erklaerung: "Nominalisiertes Verb! Das Verb 'erschrecken' wird hier durch den Artikel 'Das' zum Nomen gemacht." },
                { text: "war", falsch: false },
                { text: "groß,", falsch: false },
                { text: "bis", falsch: false },
                { text: "sie", falsch: false },
                { text: "sah,", falsch: false },
                { text: "dass", falsch: false },
                { text: "ihr", falsch: false },
                { text: "kleiner", falsch: false },
                { text: "Bruder", falsch: false },
                { text: "damit", falsch: false },
                { text: "spielte.", falsch: false }
            
            ]
        }
    ,
        {
            id: "fd-5-fahrrad",
            klasse: 5,
            titel: "Die erste Fahrradtour",
            beschreibung: "Finde die 4 Rechtschreibfehler in diesem sportlichen Text! Tipp: Achte auf Dehnung, tz/ck und s-Laute.",
            originalSatz: "Gestern machten wir eine grose Radtour mit dem Fahrrad. Mein Freund Felix fuhr sehr schnel voraus, doch plötzlich verlor er das Gleichgewicht. Er stürzte in eine Hecke und holte sich einen kleinen Schrek. Zum Glück trug er einen Helm, sodass ihm nichts wehtuht.",
            woerter: [
                { text: "Gestern", falsch: false },
                { text: "machten", falsch: false },
                { text: "wir", falsch: false },
                { text: "eine", falsch: false },
                { text: "grose", falsch: true, richtig: "große", erklaerung: "Nach dem lang gesprochenen 'o' schreiben wir 'ß' (große)." },
                { text: "Radtour", falsch: false },
                { text: "mit", falsch: false },
                { text: "dem", falsch: false },
                { text: "Fahrrad.", falsch: false },
                { text: "Mein", falsch: false },
                { text: "Freund", falsch: false },
                { text: "Felix", falsch: false },
                { text: "fuhr", falsch: false },
                { text: "sehr", falsch: false },
                { text: "schnel", falsch: true, richtig: "schnell", erklaerung: "Das 'e' in 'schnell' wird kurz gesprochen, daher verdoppeln wir das 'l' zu 'll' (schnell)." },
                { text: "voraus,", falsch: false },
                { text: "doch", falsch: false },
                { text: "plötzlich", falsch: false },
                { text: "verlor", falsch: false },
                { text: "er", falsch: false },
                { text: "das", falsch: false },
                { text: "Gleichgewicht.", falsch: false },
                { text: "Er", falsch: false },
                { text: "stürzte", falsch: false },
                { text: "in", falsch: false },
                { text: "eine", falsch: false },
                { text: "Hecke", falsch: false },
                { text: "und", falsch: false },
                { text: "holte", falsch: false },
                { text: "sich", falsch: false },
                { text: "einen", falsch: false },
                { text: "kleinen", falsch: false },
                { text: "Schrek.", falsch: true, richtig: "Schreck", erklaerung: "Nach dem kurzen 'e' in 'Schreck' wird der K-Laut als 'ck' geschrieben." },
                { text: "Zum", falsch: false },
                { text: "Glück", falsch: false },
                { text: "trug", falsch: false },
                { text: "er", falsch: false },
                { text: "einen", falsch: false },
                { text: "Helm,", falsch: false },
                { text: "sodass", falsch: false },
                { text: "ihm", falsch: false },
                { text: "nichts", falsch: false },
                { text: "wehtuht.", falsch: true, richtig: "wehtut", erklaerung: "Das Verb kommt von 'tun'. Es wird ohne stummes 'h' geschrieben (er tut -> wehtut)." }
            ]
        },
        {
            id: "fd-5-klassenzimmer",
            klasse: 5,
            titel: "Unser neues Klassenzimmer",
            beschreibung: "Finde die 4 Rechtschreibfehler, die sich ins neue Klassenzimmer eingeschlichen haben! Tipp: Achte auf Umlaute, s-Laute und Großschreibung.",
            originalSatz: "Wir haben ein schönes Klassenzimmer bekommen. Die Wende sind hell gestrichen und es hängen viele bunte Bilder an ihnen. Auf dem Lehrertisch steht ein groser Blumenstrauß, den wir gestern gepflückt haben. In der Pause rennen alle kinder auf den Schulhof, um fangen zu spielen.",
            woerter: [
                { text: "Wir", falsch: false },
                { text: "haben", falsch: false },
                { text: "ein", falsch: false },
                { text: "schönes", falsch: false },
                { text: "Klassenzimmer", falsch: false },
                { text: "bekommen.", falsch: false },
                { text: "Die", falsch: false },
                { text: "Wende", falsch: true, richtig: "Wände", erklaerung: "Umlautung von a zu ä! Das Wort kommt von 'Wand'. In der Mehrzahl wird daraus 'Wände' (mit ä, nicht e)." },
                { text: "sind", falsch: false },
                { text: "hell", falsch: false },
                { text: "gestrichen", falsch: false },
                { text: "und", falsch: false },
                { text: "es", falsch: false },
                { text: "hängen", falsch: false },
                { text: "viele", falsch: false },
                { text: "bunte", falsch: false },
                { text: "Bilder", falsch: false },
                { text: "an", falsch: false },
                { text: "ihnen.", falsch: false },
                { text: "Auf", falsch: false },
                { text: "dem", falsch: false },
                { text: "Lehrertisch", falsch: false },
                { text: "steht", falsch: false },
                { text: "ein", falsch: false },
                { text: "groser", falsch: true, richtig: "großer", erklaerung: "Nach einem lang gesprochenen Vokal (langes 'o' in großer) schreiben wir 'ß'." },
                { text: "Blumenstrauß,", falsch: false },
                { text: "den", falsch: false },
                { text: "wir", falsch: false },
                { text: "gestern", falsch: false },
                { text: "gepflückt", falsch: false },
                { text: "haben.", falsch: false },
                { text: "In", falsch: false },
                { text: "der", falsch: false },
                { text: "Pause", falsch: false },
                { text: "rennen", falsch: false },
                { text: "alle", falsch: false },
                { text: "kinder", falsch: true, richtig: "Kinder", erklaerung: "Großschreibung von Nomen! 'Kinder' sind Lebewesen/Personen und werden immer großgeschrieben." },
                { text: "auf", falsch: false },
                { text: "den", falsch: false },
                { text: "schulhof,", falsch: true, richtig: "Schulhof", erklaerung: "Zusammengesetztes Nomen! Schule + Hof = Schulhof. Nomen werden großgeschrieben." },
                { text: "um", falsch: false },
                { text: "fangen", falsch: false },
                { text: "zu", falsch: false },
                { text: "spielen.", falsch: false }
            ]
        },
        {
            id: "fd-6-weltall",
            klasse: 6,
            titel: "Reise ins Unbekannte",
            beschreibung: "Finde die 5 Rechtschreibfehler, die sich in dieser Weltraum-Geschichte verstecken! Tipp: Achte auf Nominalisierung und Fremdwörter.",
            originalSatz: "Das fliegen im Weltraum ist für Astronauten das aufregendste Erlebniss überhaupt. Viele Menschen träumen davon, einmal die Sterne aus der nähe zu betrachten. Es erfordert viel trainieren, um den Rytmus der Schwerelosigkeit zu beherrschen.",
            woerter: [
                { text: "Das", falsch: false },
                { text: "fliegen", falsch: true, richtig: "Fliegen", erklaerung: "Nominalisiertes Verb! Wenn ein Artikel wie 'Das' davorsteht, wird das Verb 'fliegen' großgeschrieben ('Das Fliegen')." },
                { text: "im", falsch: false },
                { text: "Weltraum", falsch: false },
                { text: "ist", falsch: false },
                { text: "für", falsch: false },
                { text: "Astronauten", falsch: false },
                { text: "das", falsch: false },
                { text: "aufregendste", falsch: false },
                { text: "Erlebniss", falsch: true, richtig: "Erlebnis", erklaerung: "Einzahlschreibung von -nis! Nomen auf '-nis' enden im Singular mit einem einfachen 's' (Erlebnis). In der Mehrzahl verdoppelt es sich (Erlebnisse)." },
                { text: "überhaupt.", falsch: false },
                { text: "Viele", falsch: false },
                { text: "Menschen", falsch: false },
                { text: "träumen", falsch: false },
                { text: "davon,", falsch: false },
                { text: "einmal", falsch: false },
                { text: "die", falsch: false },
                { text: "Sterne", falsch: false },
                { text: "aus", falsch: false },
                { text: "der", falsch: false },
                { text: "nähe", falsch: true, richtig: "Nähe", erklaerung: "Großschreibung von Nomen! 'Nähe' wird großgeschrieben (Signalwort: Präposition + Artikel 'aus der')." },
                { text: "zu", falsch: false },
                { text: "betrachten.", falsch: false },
                { text: "Es", falsch: false },
                { text: "erfordert", falsch: false },
                { text: "viel", falsch: false },
                { text: "trainieren,", falsch: true, richtig: "Trainieren", erklaerung: "Nominalisiertes Verb! Nach unbestimmten Mengenangaben wie 'viel' schreibt man Verben groß ('viel Trainieren')." },
                { text: "um", falsch: false },
                { text: "den", falsch: false },
                { text: "Rytmus", falsch: true, richtig: "Rhythmus", erklaerung: "Griechisches Fremdwort! Sehr schwierige Schreibweise. Merke dir die Abfolge: R - h - y - t - h - m - u - s." },
                { text: "der", falsch: false },
                { text: "Schwerelosigkeit", falsch: false },
                { text: "zu", falsch: false },
                { text: "beherrschen.", falsch: false }
            ]
        },
        {
            id: "fd-6-sommerferien",
            klasse: 6,
            titel: "Pläne für die Sommerferien",
            beschreibung: "Finde die 5 Rechtschreibfehler, die sich in diesen Urlaubsplänen verstecken! Tipp: Achte auf das/dass und Groß-/Kleinschreibung.",
            originalSatz: "Ich freue mich riesig auf die Sommerferien, weil ich glaube, das wir dieses Jahr nach Italien fahren. Das schöne an dem Urlaub ist, dass wir jeden Tag im meer schwimmen können. Mein Vater hofft, das das Wetter warm bleibt, damit wir viel zeit im Freien verbringen.",
            woerter: [
                { text: "Ich", falsch: false },
                { text: "freue", falsch: false },
                { text: "mich", falsch: false },
                { text: "riesig", falsch: false },
                { text: "auf", falsch: false },
                { text: "die", falsch: false },
                { text: "Sommerferien,", falsch: false },
                { text: "weil", falsch: false },
                { text: "ich", falsch: false },
                { text: "glaube,", falsch: false },
                { text: "das", falsch: true, richtig: "dass", erklaerung: "Konjunktion 'dass'! Verbindet zwei Teilsätze und kann nicht durch 'welches/dieses' ersetzt werden -> Doppel-s!" },
                { text: "wir", falsch: false },
                { text: "dieses", falsch: false },
                { text: "Jahr", falsch: false },
                { text: "nach", falsch: false },
                { text: "Italien", falsch: false },
                { text: "fahren.", falsch: false },
                { text: "Das", falsch: false },
                { text: "schöne", falsch: true, richtig: "Schöne", erklaerung: "Nominalisiertes Adjektiv! Durch den Artikel 'Das' wird das Adjektiv 'schöne' zum Nomen gemacht ('Das Schöne') und großgeschrieben." },
                { text: "an", falsch: false },
                { text: "dem", falsch: false },
                { text: "Urlaub", falsch: false },
                { text: "ist,", falsch: false },
                { text: "dass", falsch: false },
                { text: "wir", falsch: false },
                { text: "jeden", falsch: false },
                { text: "Tag", falsch: false },
                { text: "im", falsch: false },
                { text: "meer", falsch: true, richtig: "Meer", erklaerung: "Nomen groß! 'Meer' ist ein Nomen und wird großgeschrieben (Signalwort: Präposition + Artikel 'im' = in + dem)." },
                { text: "schwimmen", falsch: false },
                { text: "können.", falsch: false },
                { text: "Mein", falsch: false },
                { text: "Vater", falsch: false },
                { text: "hofft,", falsch: false },
                { text: "das", falsch: true, richtig: "dass", erklaerung: "Konjunktion 'dass'! Es verbindet den Nebensatz ('dass das Wetter...'). Die Ersatzprobe ('welches das Wetter') klappt hier nicht -> Doppel-s!" },
                { text: "das", falsch: false },
                { text: "Wetter", falsch: false },
                { text: "warm", falsch: false },
                { text: "bleibt,", falsch: false },
                { text: "damit", falsch: false },
                { text: "wir", falsch: false },
                { text: "viel", falsch: false },
                { text: "zeit", falsch: true, richtig: "Zeit", erklaerung: "Großschreibung von Nomen! 'Zeit' ist ein abstraktes Nomen und wird großgeschrieben." },
                { text: "im", falsch: false },
                { text: "Freien", falsch: false },
                { text: "verbringen.", falsch: false }
            ]
        }],

    // ----------------------------------------------------------------------
    // WORT-BLITZ (EINZELWORT-TRAINING MIT DIREKTEINGABE)
    // ----------------------------------------------------------------------
    wortBlitzWoerter: [
        // --- KLASSE 5 (32 WÖRTER) ---
        {
            id: "wb-5-1",
            klasse: 5,
            wort: "Schifffahrt",
            kontextSatz: "Eine Reise mit einem Dampfer nennt man...",
            erklaerung: "Dreifachkonsonant! Schiff + Fahrt. Da 'Schiff' auf 'ff' endet und 'Fahrt' mit 'F' beginnt, schreiben wir drei 'f'.",
            audioUrl: "audio/wortblitz/wb_5_1.mp3"
        },
        {
            id: "wb-5-2",
            klasse: 5,
            wort: "Fahrrad",
            kontextSatz: "Zum Radfahren nutzen wir ein...",
            erklaerung: "Fahren + Rad. Das Dehnungs-h von 'fahren' bleibt erhalten, und 'Rad' wird am Ende mit 'd' geschrieben (Verlängerungsprobe: Rä-der).",
            audioUrl: "audio/wortblitz/wb_5_2.mp3"
        },
        {
            id: "wb-5-3",
            klasse: 5,
            wort: "dass",
            kontextSatz: "Ich hoffe, ___ du heute kommst.",
            erklaerung: "Bindewort 'dass'! Verbindet zwei Sätze. Die Ersatzprobe ('welches/dieses') klappt hier nicht, also Doppel-s.",
            audioUrl: "audio/wortblitz/wb_5_3.mp3"
        },
        {
            id: "wb-5-4",
            klasse: 5,
            wort: "Katze",
            kontextSatz: "Ein Haustier, das gerne Mäuse jagt, ist die...",
            erklaerung: "Schärfung mit tz! Nach dem kurzen Vokal 'a' folgt der Zischlaut als 'tz' (nie 'z' nach kurzem Vokal).",
            audioUrl: "audio/wortblitz/wb_5_4.mp3"
        },
        {
            id: "wb-5-5",
            klasse: 5,
            wort: "Kräutergarten",
            kontextSatz: "In Mamas Beet wachsen Schnittlauch und Petersilie im...",
            erklaerung: "Umlaut-Ableitung! Kräuter kommt von Kraut. Da Kraut mit 'au' geschrieben wird, schreiben wir Kräuter mit 'äu'.",
            audioUrl: "audio/wortblitz/wb_5_5.mp3"
        },
        {
            id: "wb-5-6",
            klasse: 5,
            wort: "schwerelos",
            kontextSatz: "Im Weltraum schweben Astronauten völlig...",
            erklaerung: "Kleinschreibung von Adjektiven! Wörter auf '-los' sind Eigenschaftswörter und werden kleingeschrieben. Am Ende steht ein einfaches 's'.",
            audioUrl: "audio/wortblitz/wb_5_6.mp3"
        },
        {
            id: "wb-5-7",
            klasse: 5,
            wort: "plötzlich",
            kontextSatz: "Der Himmel verdunkelte sich und ___ fing es an zu regnen.",
            erklaerung: "Zischlaut-Schärfung! Nach dem kurzen Vokal 'ö' steht die Kombination 'tz'. Die Endung '-lich' wird mit 'ch' geschrieben.",
            audioUrl: "audio/wortblitz/wb_5_7.mp3"
        },
        {
            id: "wb-5-8",
            klasse: 5,
            wort: "Bäckerei",
            kontextSatz: "Frische Brötchen kaufen wir morgens in der...",
            erklaerung: "Großschreibung und Umlaut! Die Endung '-ei' signalisiert ein Nomen (Großschreibung). Es kommt von 'backen' (mit Umlaut 'ä' und 'ck' nach kurzem Vokal).",
            audioUrl: "audio/wortblitz/wb_5_8.mp3"
        },
        {
            id: "wb-5-9",
            klasse: 5,
            wort: "gießt",
            kontextSatz: "Der Gärtner ___ jeden Abend die Blumen im Garten.",
            erklaerung: "s-Laut-Regel! Nach dem langen Vokal-Laut 'ie' in 'gießen' schreiben wir den Zischlaut bei 'er gießt' als 'ßt'.",
            audioUrl: "audio/wortblitz/wb_5_9.mp3"
        },
        {
            id: "wb-5-10",
            klasse: 5,
            wort: "Frühling",
            kontextSatz: "Nach dem kalten Winter folgt endlich der sonnige...",
            erklaerung: "Großschreibung und Dehnungs-h! Nomen mit der Endung '-ing' werden großgeschrieben. Das 'h' nach dem 'ü' ist stumm und dehnt den Vokal.",
            audioUrl: "audio/wortblitz/wb_5_10.mp3"
        },
        {
            id: "wb-5-11",
            klasse: 5,
            wort: "Käfer",
            kontextSatz: "Auf dem Blatt krabbelt ein kleiner, roter...",
            erklaerung: "Umlaut-Ableitung! Käfer wird mit 'ä' geschrieben. Denke an die Verwandtschaft mit anderen Wörtern und vermeide das 'e'.",
            audioUrl: "audio/wortblitz/wb_5_11.mp3"
        },
        {
            id: "wb-5-12",
            klasse: 5,
            wort: "rennen",
            kontextSatz: "In der Pause ___ die Kinder über den Schulhof.",
            erklaerung: "Konsonantenverdopplung! Nach dem kurzen Vokal 'e' wird das 'n' verdoppelt ('rennen'). Verben werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_12.mp3"
        },
        {
            id: "wb-5-13",
            klasse: 5,
            wort: "Zahn",
            kontextSatz: "Ich putze mir jeden Morgen gründlich jeden...",
            erklaerung: "Stummes h! Nach dem lang gesprochenen 'a' folgt ein stummes 'h' zur Dehnung. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_13.mp3"
        },
        {
            id: "wb-5-14",
            klasse: 5,
            wort: "schreiben",
            kontextSatz: "Wir müssen heute einen kurzen Aufsatz...",
            erklaerung: "Kleinschreibung von Verben! Das Wort 'schreiben' ist eine Tätigkeit und wird im Satzgefüge kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_14.mp3"
        },
        {
            id: "wb-5-15",
            klasse: 5,
            wort: "Haustür",
            kontextSatz: "Der Postbote klingelt an der großen...",
            erklaerung: "Zusammengesetztes Nomen! Haus + Tür = Haustür. Nomen werden großgeschrieben. 'Tür' schreibt man mit Umlaut 'ü'.",
            audioUrl: "audio/wortblitz/wb_5_15.mp3"
        },
        {
            id: "wb-5-16",
            klasse: 5,
            wort: "gesund",
            kontextSatz: "Obst und Gemüse zu essen ist sehr...",
            erklaerung: "Auslautverhärtung! Am Ende klingt es wie 't', aber die Verlängerungsprobe hilft: ge-sun-de (mit d).",
            audioUrl: "audio/wortblitz/wb_5_16.mp3"
        },
        {
            id: "wb-5-17",
            klasse: 5,
            wort: "blitzschnell",
            kontextSatz: "Das Eichhörnchen kletterte ___ den Baum hinauf.",
            erklaerung: "Zusammengesetztes Wort! Blitz + schnell. 'Blitz' mit 'tz' nach kurzem 'i' und 'schnell' mit Doppel-l nach kurzem 'e'.",
            audioUrl: "audio/wortblitz/wb_5_17.mp3"
        },
        {
            id: "wb-5-18",
            klasse: 5,
            wort: "verlieren",
            kontextSatz: "Beim Spielen im Wald wollen wir uns nicht...",
            erklaerung: "Dehnungs-ie! Das 'i' wird lang gesprochen, daher schreiben wir 'ie' (verlieren). Verben schreibt man klein.",
            audioUrl: "audio/wortblitz/wb_5_18.mp3"
        },
        {
            id: "wb-5-19",
            klasse: 5,
            wort: "Bauer",
            kontextSatz: "Der ___ füttert morgens die Kühe im Stall.",
            erklaerung: "Großschreibung von Nomen! Personenbezeichnungen wie 'Bauer' sind Nomen und werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_19.mp3"
        },
        {
            id: "wb-5-20",
            klasse: 5,
            wort: "fröhlich",
            kontextSatz: "Die Vögel zwitschern heute besonders...",
            erklaerung: "Umlaut und Nachsilbe! Das Adjektiv wird kleingeschrieben. Es enthält das stumme Dehnungs-h ('fröh-') und die Nachsilbe '-lich'.",
            audioUrl: "audio/wortblitz/wb_5_20.mp3"
        },
        {
            id: "wb-5-21",
            klasse: 5,
            wort: "Schmutz",
            kontextSatz: "Nach dem Spielen im Matsch war viel ___ an den Schuhen.",
            erklaerung: "Zischlaut-Schärfung! Nach dem kurzen Vokal 'u' schreiben wir 'tz'. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_21.mp3"
        },
        {
            id: "wb-5-22",
            klasse: 5,
            wort: "herbstlich",
            kontextSatz: "Ein kühler, ___er Wind wehte durch die Blätter.",
            erklaerung: "Auslautverhärtung! 'herbstlich' kommt von 'Herbst'. Achte auf das 'b', das wie 'p' klingt. Adjektive werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_22.mp3"
        },
        {
            id: "wb-5-23",
            klasse: 5,
            wort: "Zoo",
            kontextSatz: "Wir besuchten die Affen im städtischen...",
            erklaerung: "Doppelvokal! Das Wort 'Zoo' wird mit zwei 'o' geschrieben. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_23.mp3"
        },
        {
            id: "wb-5-24",
            klasse: 5,
            wort: "fliegen",
            kontextSatz: "Die Schwalben ___ im Herbst in den warmen Süden.",
            erklaerung: "Dehnungs-ie! Der Vokal 'i' wird lang gesprochen, daher schreiben wir 'ie'. Verben werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_24.mp3"
        },
        {
            id: "wb-5-25",
            klasse: 5,
            wort: "Wiese",
            kontextSatz: "Auf der grünen ___ blühen viele bunte Löwenzähne.",
            erklaerung: "Dehnungs-ie! Das 'i' in 'Wiese' wird lang gesprochen, gefolgt von einem weichen, stimmhaften 's'. Nomen groß schreiben!",
            audioUrl: "audio/wortblitz/wb_5_25.mp3"
        },
        {
            id: "wb-5-26",
            klasse: 5,
            wort: "Hecke",
            kontextSatz: "Der Gärtner schneidet die grüne ___ im Garten.",
            erklaerung: "ck-Schärfung! Nach dem kurzen Vokal 'e' wird der k-Laut als 'ck' geschrieben. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_26.mp3"
        },
        {
            id: "wb-5-27",
            klasse: 5,
            wort: "Schatz",
            kontextSatz: "Die Piraten vergruben ihren wertvollen...",
            erklaerung: "tz-Schärfung! Nach dem kurzen Vokal 'a' schreiben wir 'tz'. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_27.mp3"
        },
        {
            id: "wb-5-28",
            klasse: 5,
            wort: "schießen",
            kontextSatz: "Beim Fußballtraining wollen wir viele Tore...",
            erklaerung: "s-Laut nach langem Laut! Nach dem Diphthong/lang gesprochenen Laut 'ie' schreiben wir das scharfe 'ß'.",
            audioUrl: "audio/wortblitz/wb_5_28.mp3"
        },
        {
            id: "wb-5-29",
            klasse: 5,
            wort: "Brücke",
            kontextSatz: "Wir gehen über die alte ___ aus Stein.",
            erklaerung: "ck-Schärfung! Nach dem kurzen Vokal 'ü' wird der k-Laut als 'ck' geschrieben. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_29.mp3"
        },
        {
            id: "wb-5-30",
            klasse: 5,
            wort: "Korb",
            kontextSatz: "In dem geflochtenen ___ liegen rote Äpfel.",
            erklaerung: "Auslautverhärtung! Es klingt am Ende wie 'p', aber die Verlängerungsprobe hilft: Kör-be (mit b). Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_30.mp3"
        },
        {
            id: "wb-5-31",
            klasse: 5,
            wort: "Lehrer",
            kontextSatz: "Unser ___ erklärt uns die schwierige Matheaufgabe.",
            erklaerung: "Stummes Dehnungs-h! Das 'e' wird lang gesprochen, gefolgt von einem stummen 'h'. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_31.mp3"
        },
        {
            id: "wb-5-32",
            klasse: 5,
            wort: "Vogel",
            kontextSatz: "Ein kleiner ___ baut sein Nest in den Zweigen.",
            erklaerung: "Schreibweise mit V! Das Wort 'Vogel' wird trotz des f-Lauts mit 'V' geschrieben. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_5_32.mp3"
        },

        // --- KLASSE 6 (32 WÖRTER) ---
        {
            id: "wb-6-1",
            klasse: 6,
            wort: "Laufen",
            kontextSatz: "___ macht mir sehr viel Spaß.",
            erklaerung: "Nominalisierung! Da hier kein anderes Nomen steht, wird das Verb 'laufen' am Satzanfang und als Subjekt großgeschrieben (Das Laufen).",
            audioUrl: "audio/wortblitz/wb_6_1.mp3"
        },
        {
            id: "wb-6-2",
            klasse: 6,
            wort: "Rhythmus",
            kontextSatz: "Der Schlagzeuger spielt einen schnellen...",
            erklaerung: "Griechisches Fremdwort! Sehr schwierige Schreibweise. Merke dir: R - h - y - t - h - m - u - s.",
            audioUrl: "audio/wortblitz/wb_6_2.mp3"
        },
        {
            id: "wb-6-3",
            klasse: 6,
            wort: "das",
            kontextSatz: "Das Auto, ___ dort steht, ist rot.",
            erklaerung: "Relativpronomen 'das' mit einfachem 's'! Bezieht sich auf das Auto und kann durch 'welches' ersetzt werden ('Das Auto, welches dort steht...').",
            audioUrl: "audio/wortblitz/wb_6_3.mp3"
        },
        {
            id: "wb-6-4",
            klasse: 6,
            wort: "Verwandten",
            kontextSatz: "An Weihnachten besuchen wir unsere...",
            erklaerung: "Nominalisiertes Adjektiv! Wird vom Adjektiv 'verwandt' abgeleitet und bezeichnet Personen -> Großschreibung.",
            audioUrl: "audio/wortblitz/wb_6_4.mp3"
        },
        {
            id: "wb-6-5",
            klasse: 6,
            wort: "Wissenschaftler",
            kontextSatz: "Die klugen ___ forschen im Labor nach neuen Wirkstoffen.",
            erklaerung: "Großschreibung und Wortbausteine! Das Wort ist aus Wissen, der Nachsilbe '-schaft' und der Personen-Endung '-ler' zusammengesetzt. Es wird großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_5.mp3"
        },
        {
            id: "wb-6-6",
            klasse: 6,
            wort: "Schwerelosigkeit",
            kontextSatz: "Das Schweben im Raumschiff liegt an der...",
            erklaerung: "Großschreibung durch Endung! Wörter mit der Nachsilbe '-keit' sind immer Nomen und werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_6.mp3"
        },
        {
            id: "wb-6-7",
            klasse: 6,
            wort: "unterbrach",
            kontextSatz: "Die Lehrerin ___ das Gespräch, als es an der Tür klopfte.",
            erklaerung: "Vergangenheitsform (Präteritum)! Das Verb kommt von 'unterbrechen'. Am Ende schreiben wir 'ch' für den Reibelaut (ohne Dehnungs-h!).",
            audioUrl: "audio/wortblitz/wb_6_7.mp3"
        },
        {
            id: "wb-6-8",
            klasse: 6,
            wort: "Heizung",
            kontextSatz: "Wenn es draußen eisig kalt ist, drehen wir die ___ auf.",
            erklaerung: "Nomen-Endung '-ung'! Wörter mit dieser Endung sind Nomen und werden großgeschrieben. Nach dem Doppelvokal 'ei' schreiben wir nur ein einfaches 'z' (kein tz).",
            audioUrl: "audio/wortblitz/wb_6_8.mp3"
        },
        {
            id: "wb-6-9",
            klasse: 6,
            wort: "geheimnisvoll",
            kontextSatz: "In der alten Schatztruhe lag ein ___ glänzender Stein.",
            erklaerung: "Zusammensetzung! Ein Eigenschaftswort (kleingeschrieben) aus 'Geheimnis' (mit einfachem s am Ende) und 'voll' (mit 'v' und Doppel-l).",
            audioUrl: "audio/wortblitz/wb_6_9.mp3"
        },
        {
            id: "wb-6-10",
            klasse: 6,
            wort: "Enttäuschung",
            kontextSatz: "Die Niederlage im Finale war eine große ___ für das Team.",
            erklaerung: "Nomen groß! Signalwort ist die Endung '-ung'. Das Wort kommt von 'täuschen', daher wird es mit Umlaut 'äu' und 'sch' geschrieben.",
            audioUrl: "audio/wortblitz/wb_6_10.mp3"
        },
        {
            id: "wb-6-11",
            klasse: 6,
            wort: "interessant",
            kontextSatz: "Das Buch über das alte Ägypten ist sehr...",
            erklaerung: "Fremdwort-Schreibweise! Achte auf die Verdopplung des 's' ('interessant') und die Schreibung mit einfachem 'r'. Adjektive werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_11.mp3"
        },
        {
            id: "wb-6-12",
            klasse: 6,
            wort: "Maschine",
            kontextSatz: "Die große ___ in der Fabrik arbeitet vollautomatisch.",
            erklaerung: "Dehnung ohne e/h! Bei 'Maschine' wird das 'i' lang gesprochen, aber als einfaches 'i' geschrieben (Fremdwort-Regel). Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_12.mp3"
        },
        {
            id: "wb-6-13",
            klasse: 6,
            wort: "plaudern",
            kontextSatz: "In den Pausen wollen wir gemütlich miteinander...",
            erklaerung: "Diphthong au! Das Verb kommt nicht von Plauder, sondern wird mit 'au' geschrieben (nicht äu). Verben werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_13.mp3"
        },
        {
            id: "wb-6-14",
            klasse: 6,
            wort: "Gefängnis",
            kontextSatz: "Der Dieb wurde in ein sicheres ___ gesperrt.",
            erklaerung: "Umlaut und Endung! Gefängnis kommt von 'fangen' (daher 'ä'). Nomen auf '-nis' enden im Singular mit einem einfachen 's'. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_14.mp3"
        },
        {
            id: "wb-6-15",
            klasse: 6,
            wort: "Gerücht",
            kontextSatz: "Auf dem Schulhof verbreitete sich ein wildes...",
            erklaerung: "Umlaut und ch-Laut! Nomen werden großgeschrieben. 'Gerücht' wird mit Umlaut 'ü' geschrieben.",
            audioUrl: "audio/wortblitz/wb_6_15.mp3"
        },
        {
            id: "wb-6-16",
            klasse: 6,
            wort: "Kino",
            kontextSatz: "Am Freitagabend gehen wir alle zusammen ins...",
            erklaerung: "Kurzes Fremdwort! Nomen groß schreiben. Es wird mit einfachem 'i' und am Ende mit 'o' geschrieben.",
            audioUrl: "audio/wortblitz/wb_6_16.mp3"
        },
        {
            id: "wb-6-17",
            klasse: 6,
            wort: "Spuren",
            kontextSatz: "Im frischen Schnee sahen wir die ___ eines Wildschweins.",
            erklaerung: "Zischlaut-Regel! Am Silbenanfang schreiben wir für den sch-Laut bei 'sp' nur ein einfaches 's' (Spuren). Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_17.mp3"
        },
        {
            id: "wb-6-18",
            klasse: 6,
            wort: "Verkäuferin",
            kontextSatz: "Die freundliche ___ packte das Brot in eine Papiertüte.",
            erklaerung: "Umlautung und Großschreibung! Kommt von 'kaufen' (daher 'äu'). Nomen für Personen werden großgeschrieben, Nachsilbe '-in'.",
            audioUrl: "audio/wortblitz/wb_6_18.mp3"
        },
        {
            id: "wb-6-19",
            klasse: 6,
            wort: "Biss",
            kontextSatz: "Der Apfel schmeckt süß, also nimm einen großen...",
            erklaerung: "Doppel-s nach kurzem Vokal! Das 'i' in 'Biss' wird kurz gesprochen, daher schreiben wir Doppel-s. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_19.mp3"
        },
        {
            id: "wb-6-20",
            klasse: 6,
            wort: "Heizungskeller",
            kontextSatz: "Die alten Rohre verlaufen unten im...",
            erklaerung: "Zusammengesetztes Nomen! Heizung + Keller. Nomen werden großgeschrieben. Achte auf das Fugen-s ('Heizungs-').",
            audioUrl: "audio/wortblitz/wb_6_20.mp3"
        },
        {
            id: "wb-6-21",
            klasse: 6,
            wort: "Reise",
            kontextSatz: "Im Sommer machen wir eine weite ___ nach Asien.",
            erklaerung: "Diphthong! Das Nomen wird großgeschrieben und mit 'ei' geschrieben (Reise).",
            audioUrl: "audio/wortblitz/wb_6_21.mp3"
        },
        {
            id: "wb-6-22",
            klasse: 6,
            wort: "Ausstellung",
            kontextSatz: "Im Museum besuchten wir die neue ___ über Dinosaurier.",
            erklaerung: "Nomen-Endung '-ung'! Das Wort wird großgeschrieben und mit Doppel-l nach dem kurzen 'e' geschrieben (Ausstellung).",
            audioUrl: "audio/wortblitz/wb_6_22.mp3"
        },
        {
            id: "wb-6-23",
            klasse: 6,
            wort: "Verbindung",
            kontextSatz: "Der Tunnel schafft eine direkte ___ zwischen den Städten.",
            erklaerung: "Auslautverhärtung und Endung! Die Nachsilbe '-ung' macht das Wort zum Nomen (groß). Am Ende der Silbe 'bind-' steht ein 'd' (Verlängerungsprobe: verbinden).",
            audioUrl: "audio/wortblitz/wb_6_23.mp3"
        },
        {
            id: "wb-6-24",
            klasse: 6,
            wort: "Gedächtnis",
            kontextSatz: "Das Gedicht auswendig zu lernen trainiert das...",
            erklaerung: "Umlaut und Endung! Kommt von 'dacht' / 'denken' (daher 'ä'). Nomen auf '-nis' enden im Singular mit einem einfachen 's'. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_24.mp3"
        },
        {
            id: "wb-6-25",
            klasse: 6,
            wort: "Sportler",
            kontextSatz: "Der ehrgeizige ___ trainiert täglich für Olympia.",
            erklaerung: "Zischlaut-Regel! Am Wortanfang schreiben wir für den sch-Laut vor 'p' ein einfaches 's' (Sportler). Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_25.mp3"
        },
        {
            id: "wb-6-26",
            klasse: 6,
            wort: "Zeugnis",
            kontextSatz: "Vor den Sommerferien bekommen alle Kinder ihr...",
            erklaerung: "Nomen-Endung -nis! Das Nomen wird großgeschrieben und endet im Singular auf ein einfaches 's'.",
            audioUrl: "audio/wortblitz/wb_6_26.mp3"
        },
        {
            id: "wb-6-27",
            klasse: 6,
            wort: "während",
            kontextSatz: "___ des Gewitters blieben wir im Haus.",
            erklaerung: "Dehnung und Auslautverhärtung! Enthält Umlaut 'ä', ein stummes Dehnungs-h nach 'ä' und endet mit 'd'. Bindeglied/Präposition schreibt man klein.",
            audioUrl: "audio/wortblitz/wb_6_27.mp3"
        },
        {
            id: "wb-6-28",
            klasse: 6,
            wort: "schließlich",
            kontextSatz: "Nach langem Suchen fanden wir ___ den Weg.",
            erklaerung: "ß-Laut nach langem ie! Nach dem lang gesprochenen 'ie' schreiben wir ein 'ß'. Adjektive werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_28.mp3"
        },
        {
            id: "wb-6-29",
            klasse: 6,
            wort: "überrascht",
            kontextSatz: "Mein Bruder war völlig ___, als alle Gäste sangen.",
            erklaerung: "Konsonantenverdopplung! Nach dem kurzen 'e' verdoppeln wir das 'r' ('überrascht'). Adjektive werden kleingeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_29.mp3"
        },
        {
            id: "wb-6-30",
            klasse: 6,
            wort: "Erlebnis",
            kontextSatz: "Der Ausflug in den Freizeitpark war ein tolles...",
            erklaerung: "Singular auf -nis! Das Nomen wird großgeschrieben. Nomen auf '-nis' enden im Singular mit einem einfachen 's'.",
            audioUrl: "audio/wortblitz/wb_6_30.mp3"
        },
        {
            id: "wb-6-31",
            klasse: 6,
            wort: "Viertel",
            kontextSatz: "Wir teilen den Apfel in vier Stücke, sodass jeder ein ___ bekommt.",
            erklaerung: "Dehnungs-ie und V-Laut! Viertel wird mit 'V' am Anfang geschrieben und enthält das lange 'ie'. Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_31.mp3"
        },
        {
            id: "wb-6-32",
            klasse: 6,
            wort: "Zentimeter",
            kontextSatz: "Der Linealstrich ist genau zehn ___ lang.",
            erklaerung: "Griechisches Fremdwort! Wird am Anfang mit 'Z' geschrieben und enthält das lange, gedehnte 'e' ('-meter'). Nomen werden großgeschrieben.",
            audioUrl: "audio/wortblitz/wb_6_32.mp3"
        }
    ]
};

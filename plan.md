# Präsentationsplan: Vibe Coding im Unternehmenskontext — KI-READY Summit

## Context
Minh Cuong Tran, Jakob Ayo und Viet Pham halten am **10. Juni 2026 beim KI-READY Summit in Nürtingen** einen **20-minütigen** Vortrag (https://www.kiready.eu/).
Der KI-READY Summit ist eine öffentliche Veranstaltung mit gemischtem Publikum (Techniker + Entscheider) — ANDRITZ-interne Projektdetails müssen abstrahiert werden.

Inhaltliche Basis: HIVE-Vortrag vom 17.04.2026 (siehe `/home/tranmh/work/hive_presentation/plan.md`).
Folien 3, 4, 5, 6, sowie die persönlichen Projekte und die Schlussfolie werden übernommen.
Drei neue Themenblöcke ersetzen die Folien 7–12 aus dem HIVE-Plan:
- **Risserkennung** (Viet Pham) — 3 Folien
- **Fully Agentic** (Jakob Ayo) — 3 Folien
- **Vibe Coding Patterns** (Minh Cuong Tran) — 2 Folien

Das Fazit wird neu geschrieben.

> **Hinweis:** Detaillierte Inhalte zu den drei neuen Themen werden im Laufe der Woche von den jeweiligen Vortragenden nachgereicht. Diese Folien enthalten zunächst **Platzhalter mit Struktur**.

---

## Phase 1: Inhaltsentwurf (Folienstruktur)

### Folie 1 — Titelfolie (0:00)
- **Titel:** Vibe Coding im Unternehmenskontext
- **Untertitel:** Wenn KI den Code schreibt und der Mensch die Richtung vorgibt
- **Vortragende:** Dipl.-Inf. Minh Cuong Tran, Jakob Ayo (B.Sc.), Viet Pham (B.Sc.)
- **Logos:** ANDRITZ Schuler / Hochschule Esslingen / Universität Stuttgart
- **Anlass/Datum:** KI-READY Summit, Nürtingen — 10. Juni 2026
- **Visuell:** ANDRITZ-Template Titelfolie + dezenter Hinweis auf KI-READY Summit

### Folie 2 — Agenda (0:15)
1. Was ist Vibe Coding?
2. Wie funktioniert das?
3. 10 Praxisbeispiele im Überblick
4. Highlight: Legacy-Modernisierung
5. Risserkennung mit KI (Viet Pham)
6. Fully Agentic Development (Jakob Ayo)
7. Vibe Coding Patterns (Minh Cuong Tran)
8. Persönliche Projekte
9. Fazit

### Folie 3 — Was ist Vibe Coding? (0:30–1:30)
- **Zitat Andrej Karpathy (Feb 2025):** "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
- **Definition:** Softwareentwicklung durch natürliche Sprache — der Mensch gibt die Richtung vor, KI-Agenten setzen um
- **Abgrenzung:** Code Completion (Copilot) → Chat-basiert (ChatGPT) → **Agentic Coding (Claude Code, Cursor)** → Vibe Coding
- **Kern:** Nicht Zeile-für-Zeile diktieren, sondern Intent formulieren und Ergebnis verifizieren
- **Visuell:** Stufendiagramm der Evolutionsstufen (Completion → Chat → Agentic → Vibe)

### Folie 4 — Wie funktioniert das? (1:30–2:30)
- **Workflow-Grafik:**
  1. Entwickler beschreibt Aufgabe in natürlicher Sprache
  2. KI-Agent analysiert Codebase, plant Umsetzung
  3. Agent schreibt Code, führt Tests aus, iteriert
  4. Entwickler verifiziert Ergebnis an Checkpoints
- **Tools:** Claude Code CLI, Claude API, MCP-Server, Skills, Hooks, Subagents
- **Key Point:** KI als "Junior-Entwickler mit Superkräften" — schnell aber braucht Führung
- **Visuell:** `fig_human_in_loop.png` — Human-in-the-Loop Paradigma (Prompt → Primary Agent → Plan → Result → Review)

### Folie 5 — 10 Praxisbeispiele im Überblick (2:30–4:00)
**Tabelle/Matrix — abstrahiert, keine internen Projektnamen:**

| # | Kategorie | Technologien | Beschleunigung |
|---|-----------|-------------|----------------|
| 1 | WPF → React Migration | C#, XAML → React/TS | 12x |
| 2 | Greybox Penetration Test | Security Assessment | 3-4x |
| 3 | KI-gestützte Code Review | .NET, Python, WPF | 2-3x |
| 4 | Fortran AIX→Linux Migration | Fortran, Go, Docker | 18x |
| 5 | PHP 5 → PHP 8 + Go Rewrite | PHP, Go | 3-4x |
| 6 | VB 64-bit Portierung | VBA, Access | 20x |
| 7 | REXX → Go Modernisierung | REXX, Go | Signifikant |
| 8 | SAP ABAP Modernisierung | ABAP, BRF+ | Architektur-PoC |
| 9 | Live Vibe Coding Workshop | JavaScript, HTML5 | 5x |
| 10 | IT-Inventur Automatisierung | Data Pipeline | Automatisiert |

- **Kernbotschaft:** Bandbreite von Legacy-Migration über Security bis Greenfield — 3x bis 20x schneller

### Folie 6 — Highlight: Legacy-Modernisierung (4:00–5:30)
**Abstrahiert — keine Projektnamen, nur Technologie-Kategorien:**
- **Fortran (500k LOC):** AIX → Linux, 15.000 Tests, proprietäre Grafik-API → Go Web-UI → Docker
  - Traditionell: 3-6 Monate → **Mit KI: 10 Tage (bis 18x schneller)**
- **WPF → React:** 77 Dateien, 15 proprietäre Telerik-Controls → MUI-Komponenten
  - Traditionell: 3-6 Monate → **Mit KI: 15 Tage (bis 12x schneller)**
- **REXX → Go:** Gehaltsübertragung, 18.207 LOC Go mit Prometheus, Windows Service, 46+ Error Codes
- **Erkenntnis:** KI ist besonders stark bei "verstandener" Transformation — klare Quelle, klares Ziel
- **Visuell:** Balkendiagramm mit Zeitvergleich (Traditionell vs. KI) für die 3 Highlights

### Folie 7 — Risserkennung mit KI: Problem & Use Case (5:30–6:45) — *Viet Pham*
**TODO: Inhalte werden von Viet Pham bis Anfang Woche 24 (KW vor 10.06.) nachgereicht.**

Vorgeschlagene Struktur (Platzhalter):
- Anwendungsfall: Qualitätskontrolle der Pressen. Das erkennen der Risse
- Warum ist Risserkennung schwierig? (Das nicht erkennen der Risse. Kleine Risse)
- Wo liegt der Mehrwert für ANDRITZ Schuler / Industrie allgemein?
- Das Projekt lief seit zwei Jahren und bisherige gescheiterte Ansätze sind gescheitert.
- **Visuell:** Beispielbild eines Risses + Highlighting (Platzhalter)

### Folie 8 — Risserkennung: Ansatz & Methodik (6:45–8:00) — *Viet Pham*
**TODO: Inhalte werden von Viet Pham nachgereicht.**

Vorgeschlagene Struktur (Platzhalter):
- Gewählter Ansatz (Gemini-3.1-Flash)
- Wie wurde Vibe Coding genutzt? (Basierend auf den klassifizierten Datensätzen hat die LLM selbst Prompt Engineering betrieben, um die Bilder korrekt zu klassifizieren)
- **Visuell:** Architektur-Diagramm / Trainings-Pipeline (Platzhalter)

### Folie 9 — Risserkennung: Ergebnis & Erkenntnisse (8:00–9:15) — *Viet Pham*
**TODO: Inhalte werden von Viet Pham nachgereicht.**

Vorgeschlagene Struktur (Platzhalter):
- Ergebnisse: Accuracy, Precision, Recall (oder geeignete Metriken)
- Vergleich: Aufwand traditionell vs. mit Vibe Coding
- Lessons Learned aus dem Projekt
- Übertragbarkeit auf andere Use Cases
- **Visuell:** Vorher/Nachher-Vergleich + Metriken-Diagramm (Platzhalter)

### Folie 10 — Fully Agentic: Konzept (9:15–10:30) — *Jakob Ayo*
**TODO: Inhalte werden von Jakob Ayo nachgereicht.**

Vorgeschlagene Struktur (Platzhalter):
- Was bedeutet "Fully Agentic"? Abgrenzung zu Human-in-the-Loop
- Welche Aufgaben können vollständig delegiert werden?
- Wo sind die Grenzen / welche Voraussetzungen müssen erfüllt sein?
- Wissenschaftlicher Bezug zur Bachelor-Arbeit
- **Visuell:** Spektrum-Diagramm von "Manual" → "Co-Pilot" → "Agentic" → "Fully Agentic" (Platzhalter)

### Folie 11 — Fully Agentic: Architektur & Workflow (10:30–11:45) — *Jakob Ayo*
**TODO: Inhalte werden von Jakob Ayo nachgereicht.**

Vorgeschlagene Struktur (Platzhalter):
- Architektur eines vollagentischen Workflows (Orchestrator, Subagents, Tools)
- Beispiel-Workflow: vom Ticket bis zum Merge ohne menschliches Eingreifen
- Sicherheitsmechanismen (Sandboxing, Rate Limits, Approvals)
- Beobachtbarkeit und Audit
- **Visuell:** Workflow-Diagramm — Ticket → Plan → Code → Test → Review → Merge (Platzhalter)

### Folie 12 — Fully Agentic: Praxis & Erkenntnisse (11:45–13:00) — *Jakob Ayo*
**TODO: Inhalte werden von Jakob Ayo nachgereicht.**

Vorgeschlagene Struktur (Platzhalter):
- Konkretes Praxisbeispiel (anonymisiert)
- Was hat funktioniert? Was nicht?
- Quantitative Wirkung (Durchsatz, Fehlerquote, Zeitersparnis)
- Empfehlungen für den Einsatz im Unternehmen
- **Visuell:** Diagramm/Screenshot eines real durchgelaufenen Agentic Workflows (Platzhalter)

### Folie 13 — Vibe Coding Patterns: Übersicht (13:00–14:00) — *Minh Cuong Tran*
**TODO: Inhalte werden von Cuong Tran nachgereicht.**

Übersicht aller vier Patterns als 2×2-Raster:

| Pattern | Kurzbeschreibung |
|---------|------------------|
| **Thinking Delegation Pattern** | Auslagerung von Denkarbeit (Planung, Analyse) an einen spezialisierten Agenten, Hauptagent bleibt fokussiert. |
| **Review and Test Driven Development Pattern** | KI schreibt Tests zuerst, dann Implementation; Mensch reviewt strategisch an Checkpoints. |
| **Junior Developer Pattern** | KI wird wie ein Junior behandelt — klare Aufgaben, eng definierte Scope, regelmäßige Reviews. |
| **Fix Point Algorithm Pattern** | Iterative Verbesserung bis zur Stabilität: KI verfeinert Lösung, bis kein Fortschritt mehr erzielt wird. |

- **Kernbotschaft:** Patterns sind wiederverwendbares Erfahrungswissen — sie machen Vibe Coding lehrbar und skalierbar
- **Visuell:** 2×2-Raster (Platzhalter — vier Quadranten mit jeweils einem Icon)

### Folie 14 — Vibe Coding Patterns: Vertiefung mit Beispielen (14:00–15:00) — *Minh Cuong Tran*
**TODO: Inhalte werden von Cuong Tran nachgereicht.**

Pro Pattern ein konkretes Beispiel und die beobachtete Wirkung:

| Pattern | Beispiel (anonymisiert) | Wirkung |
|---------|-------------------------|---------|
| Thinking Delegation | Komplexe Architekturentscheidung an Plan-Agenten delegiert | Hauptkontext bleibt schlank, bessere Entscheidungen |
| Review & TDD | Migrations-Tests vor Code generiert, dann Implementation | Regression vermieden, hohe Vertrauensbasis |
| Junior Developer | Routineaufgaben (z. B. Schema-Updates) klar abgegrenzt | Hohe Geschwindigkeit ohne Kontrollverlust |
| Fix Point | Iteratives Refactoring bis Linter/Tests stabil bleiben | Konvergenz statt unkontrollierter Drift |

- **Visuell:** Vier kleine Sequenzdiagramme oder Quadranten-Layout mit Pattern-Wirkung (Platzhalter)

### Folie 15 — Persönliche Projekte (15:00–16:15) — *Minh Cuong Tran*
**TempoMate — Professionelle Schachuhr**
- https://cuong.net/tempomate/
- Wird beim **150-jährigen Jubiläum der Schachfreunde Göppingen e.V.** eingesetzt
- Web-basiert, kein Download nötig, professionelle Turnier-Features
- **Visuell:** `screenshots/TempoMate-ChessClock.jpg` — Profi-Schachuhr mit Digitalanzeige und Zugzähler

**OpenPairing — Schachturnier-Verwaltung**
- https://openpairing.org
- Open-Source Turnier-Software für Schachvereine
- **Visuell:** `screenshots/OpenPairing2.jpg` — Turnier-Dashboard mit laufenden/kommenden Turnieren

- **Visuell:** Screenshots beider Projekte nebeneinander + QR-Codes zu den URLs

### Folie 16 — Fazit (16:15–18:00)
- Vibe Coding ist **kein Werkzeug, sondern eine Arbeitsweise** — sie wird durch wiederverwendbare **Patterns lehrbar und skalierbar**
- **Vollagentische Workflows** sind heute möglich — vorausgesetzt klare Voraussetzungen sind erfüllt (Tool-Kompetenz, Engineering-Reife, definierte Grenzen)
- Vibe Coding ist **domänenübergreifend** — von Legacy-Modernisierung bis zu KI-Bildverarbeitung (Risserkennung)
- Erfolgsfaktor bleibt **Mensch + KI**, nicht "Mensch oder KI" — erfahrene Entwickler werden **wichtiger**, nicht überflüssig
- **3x bis 20x Beschleunigung** bei realen Enterprise-Projekten nachweisbar — wissenschaftlich untermauert (Bachelor-Arbeit, HS Esslingen)

### Folie 17 — Vielen Dank & Kontakt (18:00–20:00)
- Kontaktdaten der Vortragenden
- QR-Codes zu den persönlichen Projekten (TempoMate, OpenPairing)
- Hinweis auf die Bachelor-Arbeit
- **Fragen?**

---

## Visuelle Elemente — Zusammenfassung

### Übernommen aus HIVE-Vortrag (bereits in `/home/tranmh/work/hive_presentation/images/`):
| Datei | Beschreibung | Verwendung auf Folie |
|-------|-------------|---------------------|
| `fig_human_in_loop.png` | Human-in-the-Loop Paradigma (Prompt → Agent → Plan → Result) | Folie 4 |

### Übernommen aus HIVE-Vortrag (in `/home/tranmh/work/hive_presentation/screenshots/`):
| Datei | Beschreibung | Verwendung auf Folie |
|-------|-------------|---------------------|
| `screenshots/TempoMate-ChessClock.jpg` | TempoMate Schachuhr — professionelle Digitalanzeige mit Zugzähler | Folie 15 |
| `screenshots/OpenPairing2.jpg` | OpenPairing — Turnier-Dashboard mit laufenden und kommenden Turnieren | Folie 15 |

### Eigene Grafiken (zu erstellen in PowerPoint):
- **Folie 3:** Stufendiagramm — Evolution von Code Completion → Vibe Coding
- **Folie 6:** Balkendiagramm — Zeitvergleich traditionell vs. KI (3 Highlights)
- **Folie 13:** 2×2-Raster der vier Vibe Coding Patterns
- **Folie 14:** Vier Sequenzdiagramme / Quadranten-Layout

### Visuelle Platzhalter (werden von Vortragenden geliefert):
- **Folie 7:** Beispielbild Riss + Highlighting *(Viet)*
- **Folie 8:** Architektur-Diagramm / Trainings-Pipeline *(Viet)*
- **Folie 9:** Vorher/Nachher-Vergleich + Metriken *(Viet)*
- **Folie 10:** Spektrum-Diagramm Manual → Fully Agentic *(Jakob)*
- **Folie 11:** Workflow-Diagramm Ticket → Merge *(Jakob)*
- **Folie 12:** Screenshot/Diagramm Agentic Workflow im Praxiseinsatz *(Jakob)*

---

## Phase 2: PowerPoint-Erstellung

### Vorgehen
1. ANDRITZ-Template aus dem HIVE-Vortrag als Basis nutzen (`/home/tranmh/work/hive_presentation/Template.pptx`)
2. python-pptx oder vorhandenes `create_presentation.js` als Generator anpassen
3. ANDRITZ-Layout (Farben, Logo-Positionierung, Schriftarten) übernehmen
4. 17 Folien erstellen mit dem oben entworfenen Inhalt
5. Wording finalisieren — kurz, prägnant, publikumstauglich (gemischtes Publikum)

### Wichtige Regeln für öffentliche Präsentation
- **KEINE** internen Projektnamen (Metris, Einsatzplanung, ZINV, Projektnachbrenner etc.)
- **KEINE** Mitarbeiter-Namen von ANDRITZ (außer Cuong Tran selbst)
- Technologien und Beschleunigungsfaktoren sind OK
- Kategorien/Typen der Projekte sind OK
- Private Projekte (TempoMate, OpenPairing) sind uneingeschränkt OK
- Jakob Ayo und Viet Pham als Co-Vortragende sind OK
- Patterns dürfen technisch tief gehen, aber pro Pattern nur **ein** konkretes Beispiel (gemischtes Publikum, keine Code-Walls)

### Verifikation
- Alle 17 Folien durchgehen auf ANDRITZ-interne Informationen
- Timing prüfen: ~1,2 Minute pro Folie = 17 Folien für 20 Minuten
- Aufteilung pro Vortragende:r: Pham 3, Ayo 3, Tran (Patterns) 2, Tran (Rest) 9
- Platzhalter durch finale Inhalte ersetzen sobald Pham, Ayo, Tran liefern
- PPTX öffnen und visuell prüfen

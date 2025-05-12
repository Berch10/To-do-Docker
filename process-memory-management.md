# Betriebssysteme – Prozesse und Speicherverwaltung

## 1. Prozesse und Prozessverwaltung

Ein **Prozess** ist ein Programm in Ausführung. Das Betriebssystem verwaltet Prozesse mithilfe von **Prozesskontrollblöcken (Process Control Block, PCB)**.

### Informationen im PCB:
- **Prozess-ID (PID)**: Eindeutiger Identifikator des Prozesses
- **Prozesszustand**: z. B. laufend, bereit, blockiert
- **Programmzähler (PC)**: Adresse des nächsten auszuführenden Befehls
- **CPU-Register**: Inhalt der Register, wenn der Prozess nicht aktiv ist
- **Speicherinformationen**: Informationen über den zugewiesenen Speicher (z. B. Seitentabellen)
- **I/O-Status**: Verwendete Ein-/Ausgabegeräte, offene Dateien
- **Scheduling-Informationen**: Priorität, Warteschlangenposition etc.

### Rolle des PCBs:
Der PCB ermöglicht es dem Betriebssystem, Prozesse zu verwalten, zwischen ihnen zu wechseln (Kontextwechsel), und deren Ausführung zu steuern.

---

## 2. Prozesszustände

Ein Prozess kann typischerweise folgende Zustände durchlaufen:

- **New (Neu)**: Der Prozess wird erstellt.
- **Ready (Bereit)**: Der Prozess wartet darauf, der CPU zugewiesen zu werden.
- **Running (Laufend)**: Der Prozess wird aktuell von der CPU ausgeführt.
- **Waiting (Wartend / Blockiert)**: Der Prozess wartet auf ein Ereignis (z. B. I/O).
- **Terminated (Beendet)**: Der Prozess wurde abgeschlossen.

### Übergänge:
- New → Ready: Prozess wird initialisiert und ist bereit zur Ausführung.
- Ready → Running: Scheduler weist der CPU den Prozess zu.
- Running → Waiting: Der Prozess benötigt z. B. I/O.
- Waiting → Ready: Ereignis tritt ein, Prozess wird wieder bereit.
- Running → Ready: Bei präemptivem Scheduling, wenn ein höherpriorisierter Prozess verfügbar ist.
- Running → Terminated: Prozess beendet seine Ausführung.

---

## 3. Prozess-Scheduling

### Nicht-präemptives Scheduling:
- Ein Prozess läuft, bis er freiwillig blockiert oder beendet wird.
- **Vorteile**:
  - Einfacher zu implementieren
  - Keine Kontextwechsel während der Ausführung
- **Nachteile**:
  - Kein schnelles Reagieren auf zeitkritische Prozesse
  - Ein langlaufender Prozess kann andere blockieren

### Präemptives Scheduling:
- Das Betriebssystem kann einem laufenden Prozess die CPU entziehen (z. B. durch Timer-Interrupts).
- **Vorteile**:
  - Bessere Reaktionszeit für interaktive Systeme
  - Fairere Ressourcenverteilung
- **Nachteile**:
  - Höherer Verwaltungsaufwand (Kontextwechsel)
  - Komplexere Implementierung

---

## 4. Virtueller Speicher

Virtueller Speicher ist eine Abstraktion, bei der Prozesse so erscheinen, als hätten sie mehr Speicher zur Verfügung als physisch vorhanden ist.

### Funktionsweise:
- Der Adressraum eines Prozesses wird in **virtuelle Adressen** unterteilt.
- Das Betriebssystem und die Hardware (MMU – Memory Management Unit) übersetzen virtuelle Adressen in physische Adressen.
- Nicht benötigte Speicherteile können auf die Festplatte ausgelagert werden (Swap).

### Vorteile:
- Prozesse sind voneinander isoliert
- Mehr Programme können gleichzeitig laufen
- Schutz vor illegalem Speicherzugriff
- Bessere Nutzung des physischen Speichers

---

## 5. Paging

**Paging** ist eine Methode zur Speicherverwaltung, bei der der Speicher in feste Größen (Seiten) unterteilt wird.

### Bestandteile:
- **Page**: Feste Größe des virtuellen Speichers
- **Page Frame**: Gleich große Einheiten im physischen Speicher
- **Seitentabelle (Page Table)**: Hält die Zuordnung von virtuellen Seiten zu physischen Frames

### Funktionsweise:
- Der virtuelle Adressraum eines Prozesses wird in Seiten zerlegt.
- Jede Seite wird einem freien Frame im Hauptspeicher zugeordnet.
- Die Seitentabelle enthält die Frame-Nummer für jede virtuelle Seite.

---

## 6. Speicherfragmentierung

Speicherfragmentierung tritt auf, wenn der verfügbare Speicher nicht optimal genutzt wird.

### Arten:
- **Interne Fragmentierung**: Entsteht, wenn Speicherblöcke größer als benötigt zugewiesen werden.
- **Externe Fragmentierung**: Freie Speicherbereiche sind zwar groß genug, aber nicht zusammenhängend.

### Vermeidung/Reduktion:
- Verwendung von **Paging** (verhindert externe Fragmentierung)
- **Segmentation mit Paging**: Kombination aus flexibler Segmentierung und Paging
- **Speicherkompaktierung**: Verschieben von Prozessen zur Freimachung großer zusammenhängender Blöcke (nur bei externem Fragmentieren sinnvoll)

---

*Dieser Text wurde komplett von ChatGPT erstellt (OpenAI, 2025).*

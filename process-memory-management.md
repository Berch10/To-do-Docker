
# 📄 Dokumentation zur Prozess- und Speicherverwaltung

## 🔀 Branch: `HUE1`

## 🧑‍💻 Bearbeiter: *Markus Berchtenbreiter und Ivan Dobrodeev*

---

### ✅ Aufgabe 1: Fragen zur Prozess- und Speicherverwaltung in Betriebssystemen

#### 1. Prozesse: Wie werden Prozesse im Betriebssystem verwaltet? Welche Informationen werden in einem Prozesskontrollblock (PCB) gespeichert und welche Rolle spielt dieser bei der Prozessverwaltung?

Jeder Prozess wird durch einen **Prozesskontrollblock (PCB)** verwaltet, der alle wesentlichen Informationen enthält.

**Informationen im PCB:**
- **Prozess-ID (PID):** Eindeutige Nummer zur Identifizierung des Prozesses.
- **Prozesszustand:** Status des Prozesses (z. B. bereit, laufend, blockiert).
- **CPU-Register:** Zustand der CPU-Register für Kontextwechsel.
- **Speicherinformationen:** Basis- und Limitadressen des zugewiesenen Speichers.
- **Prozesspriorität:** Priorität des Prozesses.
- **I/O-Status:** Informationen über geöffnete Dateien oder Geräte.
- **Zeiger:** Verweise auf andere PCBs (z. B. Eltern- oder Kindprozesse).
- **CPU-Zeit:** Verbrauchte CPU-Zeit und andere Statistiken.

**Rolle des PCB:**
- Ermöglicht das Unterbrechen und Fortsetzen von Prozessen
- Stellt Informationen für die Ressourcenverwaltung bereit.
- Erleichtet die Kommunikation zwischen Prozessen.

---

#### 2. Lebenszyklus von Prozessen
Prozesse durchlaufen verschiedene Phasen während ihrer Ausführung.

**Hauptzustände:**
- **Erzeugung:** Der Prozess wird erstellt.
- **Ausführungwarteschlange:** Der Prozess wartet auf die Zuweisung der CPU.
- **Aktiv:** Wird aktuell vom Prozessor bearbeitet
- **Wartend:** Benötigt externe Ressourcen (z. B. I/O).
- **Beendet:** Der Prozess ist abgeschlossen.

**Übergänge:**
- **Erzeugung → Ausführungwarteschlange:** Nach der Erstellung.
- **Ausführungwarteschlange → Aktiv:** CPU wird zugewiesen.
- **Aktiv → Wartend:** Warten auf eine Ressource.
- **Wartend → Ausführungswarteschlange:** Ressource wird verfügbar.
- **Aktiv → Beendet:** Prozess abgeschlossen.

*Bei präemptivem Scheduling*
- **Running → Ready:** Wenn ein höherpriorisierter Prozess verfügbar ist.

---

#### 3. Prozess-Scheduling: Welche Unterschiede bestehen zwischen präemptivem und nicht-präemptivem Scheduling? Welche Vor- und Nachteile haben die beiden Ansätze?

**Präemptives Scheduling:**
- **Definition:** Prozesse können während der Ausführung unterbrochen werden
- **Vorteile:** Geringe Wartezeiten, fairere Ressourcennutzung.
- **Nachteile:** Höherer Verwaltungsaufwand (Overhead durch Kontextwechsel)

**Nicht-präemptives Scheduling:**
- **Definition:** Der Prozess behält die CPU, bis er abgeschlossen oder blockiert ist.
- **Vorteile:** Weniger Overhead, einfachere Implementierung.
- **Nachteile:** Mögliche Verzögerungen bei langen Prozessen, kein schnelles Reagieren auf zeitkritische Prozesse

---

#### 4. Virtueller Speicher: Was ist virtueller Speicher und wie funktioniert er? Welche Vorteile bietet er im Vergleich zu rein physischem Speicher?

**Virtueller Speicher:**
- Eine Abstraktion des physischen Speichers, die es Prozessen ermöglicht, mehr Speicher zu nutzen, als physisch verfügbar ist.

**Funktionsweise:**
- Der Speicher wird in **Seiten** (Pages) unterteilt.
- Das Betriebssystem und die Hardware – insbesondere die Memory Management Unit (MMU) – übersetzen virtuelle Adressen in physische Adressen.
- Nicht benötigte Seiten werden auf die Festplatte ausgelagert (Swap-Speicher)..

**Vorteile:**
- Größere Speicheradressräume: Prozesse können mehr Speicher ansprechen, als physisch vorhanden ist.
- Schutz und Isolation zwischen Prozessen: Jeder Prozess hat seinen eigenen Adressraum.
- Effiziente Speicherverwaltung: Nicht benötigter Speicher kann ausgelagert werden.
- Mehr Programme können gleichzeitig laufen, auch wenn nicht genug RAM für alle vorhanden ist.
- Schutz vor illegalem Speicherzugriff, da Prozesse nicht in die Adressräume anderer Prozesse eingreifen können.

---

#### 5. Paging: Wie funktioniert Paging in modernen Betriebssystemen? Welche Rolle spielen Seitenrahmen (Page Frames) und Seitentabellen (Page Tables)?

**Paging:**
- Der Speicher wird in feste Blöcke, sogenannte **Seiten** (Pages), unterteilt.
- Virtuelle Seiten werden mithilfe einer **Seitentabelle** (Page Table) physischen **Seitenrahmen** (Page Frames) zugeordnet.

**Rolle:**
- **Seitenrahmen:** Physische Speicherblöcke, in denen Seiten geladen werden.
- **Seitentabellen:** Verwalten die Zuordnung zwischen virtuellen und physischen Adressen.

---

#### 6. Speicherfragmentierung: Was ist Speicherfragmentierung? Welche Arten von Fragmentierung gibt es und wie können diese reduziert oder vermieden werden?

**Speicherfragmentierung:**
- Ineffiziente Nutzung des Speichers durch ungünstige Speicherzuweisungen.

**Arten:**
- **Interne Fragmentierung:** Speicherblöcke sind größer als nötig, wodurch innerhalb eines Blocks ungenutzter Speicher bleibt.
- **Externe Fragmentierung:** iele kleine freie Speicherblöcke sind über den Speicher verteilt, sodass größere Anforderungen nicht erfüllt werden können, obwohl insgesamt genug freier Speicher vorhanden wäre.

**Reduzierung:**
- Verwendung von Paging oder Segmentierung.
- Speicherkompaktierung.
- Dynamische Speicherzuweisung mit geeigneten Algorithmen.

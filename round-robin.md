# 📄 Dokumentation zum Round-Robin-Scheduling-Algorithmus

## 🔀 Branch: `HUE1`

## 🧑‍💻 Bearbeiter: *Markus Berchtenbreiter und Ivan Dobrodeev*

---

## Aufgabenbeschreibung
Diese Aufgabe demonstriert den Round-Robin-Scheduling-Algorithmus anhand der folgenden Prozesse und einer Zeitscheibe von 2 ms:

| Prozess | Ankunftszeit (ms) | Ausführungszeit (ms) |
|---------|--------------------|---------------------|
| P1      | 0                 | 7                   |
| P2      | 2                 | 4                   |
| P3      | 4                 | 9                   |
| P4      | 6                 | 5                   |

---

## Gantt-Diagramm
Das folgende Gantt-Diagramm zeigt die Ausführung der Prozesse im Zeitverlauf:

| Prozess  | P1   | P2   | P3   | P4   | P1   | P2   | P3   | P4   | P1   | P3   | P4   | P1   | P2   | P2   |
|----------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| Zeit(ms) | 0-2  | 2-4  | 4-6  | 6-8  | 8-10 | 10-12| 12-14| 14-16| 16-18| 18-20| 20-22| 22-24| 24-26| 26-28|

---

## Berechnungen

### Wartezeit (WT)
- **P1:** 0 (Start) + 6 (Warten auf zweiten Slot) + 6 (Warten auf dritten Slot) = **12 ms**
- **P2:** 2 (Start) + 4 (Warten auf zweiten Slot) = **6 ms**
- **P3:** 4 (Start) + 6 (Warten auf zweiten Slot) + 6 (Warten auf dritten Slot) = **16 ms**
- **P4:** 8 (Start) + 6 (Warten auf zweiten Slot) = **14 ms**

**Durchschnittliche Wartezeit:**
\[
WT_{avg} = \frac{12 + 6 + 16 + 14}{4} = 12 \, \text{ms}
\]

### Durchlaufzeit (TAT)
- **P1:** 20 ms (Endzeit - Ankunftszeit)
- **P2:** 10 ms (Endzeit - Ankunftszeit)
- **P3:** 22 ms (Endzeit - Ankunftszeit)
- **P4:** 18 ms (Endzeit - Ankunftszeit)

**Durchschnittliche Durchlaufzeit:**
\[
TAT_{avg} = \frac{20 + 10 + 22 + 18}{4} = 17.5 \, \text{ms}
\]

---

## Erklärung des Round-Robin-Scheduling-Algorithmus
Der Round-Robin-Scheduling-Algorithmus ist ein präemptives Scheduling-Verfahren, bei dem jedem Prozess eine feste Zeitscheibe (Time Slice) zugewiesen wird. Wenn ein Prozess innerhalb dieser Zeitscheibe nicht abgeschlossen wird, wird er unterbrochen und an das Ende der Warteschlange verschoben, während der nächste Prozess ausgeführt wird.

### Vorteile
- **Fairness:** Alle Prozesse erhalten gleiche CPU-Zeit.
- **Reduzierte Wartezeit:** Besonders für kurze Prozesse.
- **Geeignet für zeitkritische Anwendungen.**

### Nachteile
- **Hoher Overhead:** Häufige Kontextwechsel.
- **Ineffizienz:** Wenn die Zeitscheibe zu klein oder zu groß ist.

---

## Zusammenfassung der Ergebnisse
- **Durchschnittliche Wartezeit:** 12 ms
- **Durchschnittliche Durchlaufzeit:** 17.5 ms

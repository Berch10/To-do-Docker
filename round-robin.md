# 📄 Dokumentation zur Round-Robin Scheduling Algorithm

## 🔀 Branch: `HUE1`

## 🧑‍💻 Bearbeiter: *Markus Berchtenbreiter und Ivan Dobrodeev*

---


## Round-Robin Scheduling Algorithm

### Task Description
This task demonstrates the Round-Robin Scheduling Algorithm using the following processes and a time slice of 2 ms:

| Process | Arrival Time (ms) | Execution Time (ms) |
|---------|--------------------|---------------------|
| P1      | 0                 | 7                   |
| P2      | 2                 | 4                   |
| P3      | 4                 | 9                   |
| P4      | 6                 | 5                   |

---

### Gantt Chart
The following Gantt chart shows the execution of the processes over time:

---

### Calculations

#### Waiting Time (WT)
- **P1:** 0 (start) + 6 (wait for second slot) + 6 (wait for third slot) = **12 ms**
- **P2:** 2 (start) + 4 (wait for second slot) = **6 ms**
- **P3:** 4 (start) + 6 (wait for second slot) + 6 (wait for third slot) = **16 ms**
- **P4:** 8 (start) + 6 (wait for second slot) = **14 ms**

**Average Waiting Time:**
\[
WT_{avg} = \frac{12 + 6 + 16 + 14}{4} = 12 \, \text{ms}
\]

#### Turnaround Time (TAT)
- **P1:** 20 ms (end time - arrival time)
- **P2:** 10 ms (end time - arrival time)
- **P3:** 22 ms (end time - arrival time)
- **P4:** 18 ms (end time - arrival time)

**Average Turnaround Time:**
\[
TAT_{avg} = \frac{20 + 10 + 22 + 18}{4} = 17.5 \, \text{ms}
\]

---

### Explanation of Round-Robin Scheduling
The Round-Robin Scheduling Algorithm is a preemptive scheduling method where each process is assigned a fixed time slice (time quantum). If a process does not complete within its time slice, it is moved to the end of the ready queue, and the next process is executed.

#### Advantages
- Fairness: All processes get equal CPU time.
- Reduced waiting time for short processes.
- Suitable for time-critical applications.

#### Disadvantages
- High overhead due to frequent context switching.
- Inefficient if the time slice is too small or too large.

---

### Results Summary
- **Average Waiting Time:** 12 ms
- **Average Turnaround Time:** 17.5 ms

// T1. Uso avanzado de funciones
// U2. Métodos reduce y forEach
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
class ClassroomReport {
    #studentList;
    constructor(studentList = []) {
        this.#studentList = studentList;
    }

    getStudentList() {
        return this.#studentList;
    }
    setStudentList(newStudentList) {
        this.#studentList = newStudentList;
    }

    getStudentsNumber(excludeInactive = true) {
        return this.#studentList.reduce((count, student) => {
            if (!excludeInactive || student.active) {
                return count + 1;
            }
            return count;
        }, 0);
    }

    averageScore(excludeInactive = true) {
        const { totalScore, count } = this.#studentList.reduce(
            (accumulator, student) => {
                if (!excludeInactive || student.active) {
                    accumulator.totalScore += student.score;
                    accumulator.count++;
                }
                return accumulator;
            },
            { totalScore: 0, count: 0 }
        );

        return count === 0 ? 0 : totalScore / count;
    }

    bestStudent(excludeInactive = true) {
        let best = null;

        this.#studentList.forEach(student => {
            if (excludeInactive && !student.active) {
                return;
            }

            if (best === null || student.score >= best.score) {
                best = student;
            }
        });

        return best;
    }

    worstStudent(excludeInactive = true) {
        let worst = null;

        this.#studentList.forEach(student => {
            if (excludeInactive && !student.active) {
                return;
            }

            if (worst === null || student.score <= worst.score) {
                worst = student;
            }
        });

        return worst;
    }

    passedCount(excludeInactive = true) {
        return this.#studentList.reduce((count, student) => {
            if (excludeInactive && !student.active) {
                return count;
            }

            return student.score >= 5 ? count + 1 : count;
        }, 0);
    }

    failedCount(excludeInactive = true) {
        return this.#studentList.reduce((count, student) => {
            if (excludeInactive && !student.active) {
                return count;
            }
            return student.score < 5 ? count + 1 : count;
        }, 0);
    }
}

/**
* TEST
* This code is ONLY intended for TESTING PURPOSES,
* if you run this code outside of a test environment,
* please comment or remove it (or use it loading the script as
* a module)
*/
export { ClassroomReport };

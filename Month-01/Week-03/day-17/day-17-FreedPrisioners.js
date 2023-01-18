class PrisonBreak {
  constructor(lockup) {
    this.lockup = lockup;
  }

  freedPrisioners() {
    if (this.lockup[0] === 0) return 0;

    let unlock = 0;
    for (let i = 0; i < this.lockup.length; i++) {
      if (this.lockup[i] === 1) {
        unlock++;
        for (let j = i + 1; j < this.lockup.length; j++)
          this.lockup[j] = 1 - this.lockup[j];
      }
    }
    return unlock;
  }
}

const test1 = [1, 1, 0, 0, 0, 1, 0]; //4
const test2 = [1, 1, 1]; //1
const test3 = [0, 1, 0]; //0
const test4 = [0, 1, 1, 1]; //0

const TestPrisonBreak = new PrisonBreak(test1);
console.log(TestPrisonBreak.freedPrisioners());
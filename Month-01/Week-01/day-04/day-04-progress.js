class Progress {
  constructor(days) {
    this.days = days;
  }

  wasDayProgressed() {
    let progress = 0;
    for (let i = 0; i < this.days.length; i++) {
      if (this.days[i] < this.days[i + 1]) {
        progress++;
      }
    }
    console.log(`Ocorreu progresso em ${progress} dias`);
  }
}

const test1 = [3, 4, 1, 2]; //➞ 2
const test2 = [10, 11, 12, 9, 10]; //➞ 3
const test3 = [6, 5, 4, 3, 2, 9]; //➞ 1
const test4 = [9, 9]; //➞ 0

const ProgressDay = new Progress(test2);
ProgressDay.wasDayProgressed();

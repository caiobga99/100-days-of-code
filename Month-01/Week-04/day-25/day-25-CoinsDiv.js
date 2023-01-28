const test1 = [1, 2, 3, 2, 2, 2, 3]; //true
const test2 = [5, 3, 10, 1, 2]; //false
const test3 = [2, 4, 3, 2, 4, 9, 7, 8, 6, 9]; //true

class CoinsDiv {
  constructor(arr) {
    this.arr = arr;
  }

  coins() {
    this.result = this.arr.reduce((inc, value) => inc + value);
    if (this.result % 3 !== 0) return false;
    const amount = this.result / 3;

    this.arr.sort((a, b) => b - a);

    for (let i in this.arr) {
      if (this.arr[i] > amount) return false;
    }
    return true;
  }
}

const TestCoinsDiv = new CoinsDiv(test3);
console.log(TestCoinsDiv.coins());

class MinTurns {
  constructor(current, target) {
    this.arr = [...current, ...target].map((value) =>
      typeof value !== Number ? Number(value) : value
    );
    this.res = 0;
  }
  turns() {
    while (this.arr.length > 0) {
      if (Math.abs(this.arr[0] - this.arr[this.arr.length / 2]) > 5) {
        if (this.arr[0] > this.arr[this.arr.length / 2]) {
          this.arr[this.arr.length / 2] += 10;
        } else {
          this.arr[0] += 10;
        }
      }

      this.res += Math.abs(this.arr[0] - this.arr[this.arr.length / 2]);
      this.arr.splice(this.arr.length / 2, 1);
      this.arr.shift();
    }
    return this.res;
  }
}

const TestMinTurns = new MinTurns("2391", "4984");
console.log(TestMinTurns.turns());

// MinTurns("4089", "5672") ➞ 9

// MinTurns("1111", "1100") ➞ 2

// MinTurns("2391", "4984") ➞ 10

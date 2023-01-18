const readlineSync = require("readline-sync");
class UniquePaths {
  constructor(m, n) {
    this.col = m;
    this.row = n;
  }
  unique() {
    let res = 1;
    let inc = this.col > this.row ? this.col : this.row;

    for (let i = 1; i < inc; i++) {
      res += i + 1;
      if (this.col === 2 || this.row === 2) break;
    }
    return res;
  }
}

const TestUniquePaths = new UniquePaths(
  Number(readlineSync.question("Enter a column \n")),
  Number(readlineSync.question("Enter a row \n"))
);
console.log(TestUniquePaths.unique());
/* 
Input: m = 3, n = 7
Output: 28
Input: m = 3, n = 2
Output: 3
Input: m = 7, n = 3
Output: 28
Input: m = 3, n = 3
Output: 6
*/
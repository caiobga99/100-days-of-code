const readlineSync = require("readline-sync");
class NimGame {
  constructor(num) {
    this.num = num;
  }
  canWinNim() {
    return this.num % 4 !== 0;
  }
}
const TestNimGame = new NimGame(readlineSync.question("enter a number \n"));
console.log(TestNimGame.canWinNim());

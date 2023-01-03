//I found Nemo at[the order of word you find Nemo]!. true
// I can't find Nemo :( false
const readlineSync = require("readline-sync");
class Nemo {
  constructor(str) {
    this.arr = str.split(" ");
  }
  whereIsNemo() {
    if (!this.arr.includes("nemo")) {
      return "I can't find Nemo :(";
    }
    return ` I found Nemo at ${this.arr.indexOf("nemo") + 1}`;
  }
}

const findNemo = new Nemo(readlineSync.question("enter a string \n"));

console.log(findNemo.findNemo());

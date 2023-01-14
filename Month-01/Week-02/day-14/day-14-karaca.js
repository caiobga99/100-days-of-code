const readlineSync = require("readline-sync");
class KaracasEncryption {
  constructor(str) {
    this.str = str.toLowerCase().split("").reverse().join("");
  }
  encrypt() {
    this.str = this.str.replace(/a/g, 0);
    this.str = this.str.replace(/e/g, 1);
    this.str = this.str.replace(/i/g, 2);
    this.str = this.str.replace(/o/g, 2);
    this.str = this.str.replace(/u/g, 3);
    return this.str + "aca";
  }
}

const TestKaracasEncryption = new KaracasEncryption(
  readlineSync.question("enter a string \n")
);
console.log(TestKaracasEncryption.encrypt());

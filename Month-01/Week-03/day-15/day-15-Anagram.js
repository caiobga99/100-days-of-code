const readlineSync = require("readline-sync");
class Anagram {
  constructor(s, t) {
    this.s = s.split("").sort().join();
    this.t = t.split("").sort().join();
  }

  isAnagram() {
    return this.s === this.t;
  }
}
const TestAnagram = new Anagram(
  readlineSync.question("enter a string \n"),
  readlineSync.question("enter a string \n")
);
console.log(TestAnagram.isAnagram());

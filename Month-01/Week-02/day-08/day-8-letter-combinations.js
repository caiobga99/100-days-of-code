const readlineSync = require("readline-sync");
class LetterCombinations {
  constructor(number) {
    this.digit = String(number);
    this.combinations = [];
    this.mapping = {
      1: " ",
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
  }

  createCombinations(digit, results) {
    if (digit.length === 0) {
      return this.combinations.push(results);
    }

    for (let i = 0; i < this.mapping[digit[0]].length; i++) {
      this.createCombinations(
        digit.slice(1),
        results + this.mapping[digit[0]][i]
      );
    }
  }
  returnCombinations() {
    this.createCombinations(this.digit, "");
    return this.combinations;
  }
}

const TestLetterCombinations = new LetterCombinations(
  readlineSync.question("enter a number \n")
);
console.log(TestLetterCombinations.returnCombinations());
/* +- */
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

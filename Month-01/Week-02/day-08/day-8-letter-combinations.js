const readlineSync = require("readline-sync");
const letterCombinations = (number) => {
  if (/[01]/.test(number)) {
    console.error("Esse numero nao e valido");
  }
  const digit = String(number);
  const mapping = {
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

  const combinations = [];

  const createCombinations = (digit, results) => {
    if (digit.length === 0) {
      return combinations.push(results);
    }

    for (let i = 0; i < mapping[digit[0]].length; i++) {
      createCombinations(digit.slice(1), results + mapping[digit[0]][i]);
    }
  };

  createCombinations(digit, "");
  return combinations;
};

const TestletterCombinations = letterCombinations(
  Number(readlineSync.question("enter a number \n"))
);
console.log(TestletterCombinations);
// ***?*** //
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

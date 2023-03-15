class FilterRepeatingCharacterStrings {
  constructor(values) {
    this.values = values;
  }

  identicalFilter() {
    let newStr = new Set();
    let arr = [];

    this.values.map((value) => {
      for (let i = 0; i < value.length; i++) {
        newStr.add(value[i]);
      }
      if (newStr.size === 1) {
        arr.push(value);
      }
      newStr.clear();
    });
    return arr;
  }
}

const filterRepeatingCharacterStrings = new FilterRepeatingCharacterStrings([
  "xxxxo",
  "oxo",
  "xox",
  "ooxxoo",
  "oxo",
]);
console.log(filterRepeatingCharacterStrings.identicalFilter());





// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
// ➞ ["aaaaaa", "d", "eeee"]

// identicalFilter(["88", "999", "22", "545", "133"])
// ➞ ["88", "999", "22"]

// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
// ➞ []

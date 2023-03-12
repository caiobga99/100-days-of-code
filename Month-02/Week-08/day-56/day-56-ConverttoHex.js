class ConverttoHex {
  constructor(string) {
    this.table = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    this.letters = string.split("");
  }
  stringToHex() {
    let hex = "";
    for (let value of this.letters) {
      hex += this.table[Math.floor(value.charCodeAt() / 16)];
      hex += `${this.table[value.charCodeAt() % 16]} `;
    }

    return hex;
  }
}

const convertToHex = new ConverttoHex("Marty Poppinson");
console.log(convertToHex.stringToHex());

// toHex("hello world") ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"

// toHex("Big Boi") ➞ "42 69 67 20 42 6f 69"

// toHex("Marty Poppinson") ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"

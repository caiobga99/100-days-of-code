class StringToHex {
  constructor(str) {
    this.str = str;
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
  }
  toHex() {
    let letters = this.str.split("");
    let hex = "";

    for (let value of letters) {
      hex += this.table[Math.floor(value.charCodeAt() / 16)];
      hex += `${this.table[value.charCodeAt() % 16]} `;
    }
    return hex;
  }
}

const stringToHex = new StringToHex("100 days of code");
console.log(stringToHex.toHex());

// input: "hello world" output: 68 65 6c 6c 6f 20 77 6f 72 6c 64
// input: "Big Boi" output: 42 69 67 20 42 6f 69
// input: "Marty Poppinson" output: 4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e
// input: "100 days of code" output: 31 30 30 20 64 61 79 73 20 6f 66 20 63 6f 64 65

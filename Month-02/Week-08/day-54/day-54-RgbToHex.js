class RgbToHex {
  constructor(rgb) {
    this.rgb = rgb;
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
  method() {
    const values = this.rgb.match(/\d+/g).map(Number);
    let output = "#";
    for (let value of values) {
      const res = Math.floor(value / this.table.length);
      const sob = value % this.table.length;
      output += this.table[res] + this.table[sob];
    }
    return output;
  }
}

const rgbToHex = new RgbToHex("rgb(221, 160, 221)");
console.log(rgbToHex.method());

// input: rgb(0, 128, 192) output: #0080c0
// input: rgb(0, 0, 0) output: #000000
// input: rgb(255, 222, 179) output: #ffdeb3
// input: rgb(245, 222, 179) output: #f5deb3
// input: rgb(221, 160, 221) output: ##dda0dd

class AGameOfThrees {
  constructor(num) {
    this.num = num;
    this.output = "";
  }

  gameOfThrees() {
    while (this.num !== 1) {
      if (this.num % 3 === 0) {
        this.output += `${this.num} 0\n`;
        this.num = this.num / 3;
      } else if ((this.num + 1) % 3 === 0) {
        this.output += `${this.num} 1\n`;
        this.num = (this.num + 1) / 3;
      } else {
        this.output += `${this.num} -1\n`;
        this.num = (this.num - 1) / 3;
      }
    }
    this.output += this.num;
    return this.output;
  }
}

const aGameOfThrees = new AGameOfThrees(100);
console.log(aGameOfThrees.gameOfThrees());

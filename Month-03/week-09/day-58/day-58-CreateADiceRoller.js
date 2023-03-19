class CreateADiceRoller {
  constructor(arr) {
    this.arr = arr;
    this.output = "";
    this.values = [];
  }
  diceRoller() {
    for (let i in this.arr) {
      this.arr[i] = this.arr[i].replace("d", "-");
      this.values.push(this.arr[i].split(/[-]/));
    }

    for (let round of this.values) {
      let play = Number(round[0]);
      let dice = Number(round[1]);
      let res = [];

      while (play > 0) {
        res.push(Math.floor(Math.random() * dice + 1));
        play--;
      }

      let total = res.reduce((prev, value) => prev + value, 0);
      let info = res.reduce(
        (prev, value) => prev.toString() + " " + value.toString(),
        ""
      );
      this.output += `${total}: ${info} \n`;
    }
    return this.output;
  }
}

const createADiceRoller = new CreateADiceRoller(["3d6", "4d12", "1d10", "5d4"]);
console.log(createADiceRoller.diceRoller());

// ["3d6", "4d12", "1d10", "5d4"]
// 14: 6 3 5

// 14: 6 3 5
// 22: 10 7 1 4
// 9: 9
// 11: 3 2 2 1 3

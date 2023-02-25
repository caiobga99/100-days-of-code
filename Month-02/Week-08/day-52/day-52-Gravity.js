class Gravity {
  constructor(arr) {
    this.arr = arr;
  }

  switchGravityOn() {
    for (let i in this.arr) {
      for (let ind in this.arr[i]) {
        if (this.arr[Number(i)][Number(ind)] === "#") {
          for (let index = Number(i) + 1; index < this.arr.length; i++) {
            if (this.arr[index][Number(ind)] === "-") {
              this.arr[Number(i)][Number(ind)] = "-";
              this.arr[Number(index)][Number(ind)] = "#";
              break;
            }
          }
        }
      }
    }
    return this.arr;
  }
}

const gravity = new Gravity([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
]);
console.log(gravity.switchGravityOn());
//input: [
//     ["-", "#", "#", "-"],
//     ["-", "-", "-", "-"],
//     ["-", "-", "-", "-"],
//     ["-", "-", "-", "-"],
// ]
// output: [
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '-', '-' ],
//   [ '-', '#', '#', '-' ]
// ]

//input: [
//     ["-", "#", "#", "-"],
//     ["-", "-", "#", "-"],
//     ["-", "-", "-", "-"],
//     ["-", "-", "-", "-"],
// ]
// output: [
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '-', '-' ],
//   [ '-', '-', '#', '-' ],
//   [ '-', '#', '#', '-' ]
// ]

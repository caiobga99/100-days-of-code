class SwimmingPool {
  constructor(backyard) {
    this.backyard = backyard;
  }
  isLegitimate() {
    if (
      this.backyard[0].includes(1) ||
      this.backyard[this.backyard.length - 1].includes(1)
    )
      return false;
    for (let i = 0; i <= this.backyard.length - 2; i++) {
      if (
        this.backyard[i][0] === 1 ||
        this.backyard[i][this.backyard[i].length - 1] === 1
      )
        return false;
    }
    return true;
  }
}
// isLegitimate([
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0]
//   ]) ➞ true

//   isLegitimate([
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0, 0]
//   ]) ➞ false

//   isLegitimate([
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0]
//   ]) ➞ true
const swimmingPool = new SwimmingPool([
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
]);
console.log(swimmingPool.isLegitimate());

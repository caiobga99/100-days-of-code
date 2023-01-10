class BinarySearchTrees {
  constructor(number) {
    this.number = Number(number);
  }
  check(number) {
    if (number === 0) return 1;
    return number * this.check(number - 1);
  }

  binaryTree() {
    if (typeof this.number !== "number") return "Send a number";
    return (
      this.check(2 * this.number) /
      (this.check(this.number + 1) * this.check(this.number))
    );
  }
}
const num = new BinarySearchTrees(3);
console.log(num.binaryTree());
//output: 5
/* ? */

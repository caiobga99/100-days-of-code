class NeedHelpWithYourPacking {
  constructor(weight, bags) {
    this.weight = weight;
    this.bags = bags;
  }

  canFit() {
    if (!Array.isArray(this.weight)) {
      throw new Error("Send a array!");
    }
    for (let i = 0; i <= this.weight.length; i++) {
      if (this.weight[i] > 10 || this.weight[i] < 1) {
        throw new Error("Error");
      }
    }
    return this.bags * 10 >= this.weight.reduce((a, b) => a + b, 0);
  }
}

const TestNeedHelpWithYourPacking = new NeedHelpWithYourPacking(
  [10, 10, 10, 9, 1],
  4
);
console.log(TestNeedHelpWithYourPacking.canFit());

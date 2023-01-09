class TrappingRainWater {
  constructor(height) {
    this.height = height;
    this.water = 0;
  }

  trappedWaterQuantity() {
    if (!Array.isArray(this.height)) {
      throw new Error("Send a array!");
    }
    if (this.height.some((n) => n < 0)) {
      throw new Error("Height cannot be a negative number!");
    }
    if (this.height.some((n) => typeof n != "number")) {
      throw new Error("Send a only number array!");
    }

    for (let i = 0; i < this.height.length; i++) {
      let leftWall = 0;
      let rigthWall = 0;

      for (let L = i; L >= 0; L--) {
        if (this.height[L] > leftWall) {
          leftWall = this.height[L];
        }
      }
      for (let R = i; R < this.height.length; R++) {
        if (this.height[R] > rigthWall) {
          rigthWall = this.height[R];
        }
      }
      const smallestwall = leftWall > rigthWall ? rigthWall : leftWall;
      this.water += smallestwall - this.height[i];
    }
    return this.water;
  }
}

const height = new TrappingRainWater([4, 2, 0, 3, 2, 5]);
console.log(height.trappedWaterQuantity());
// [4, 2, 0, 3, 2, 5] output: 9
// [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] output: 6
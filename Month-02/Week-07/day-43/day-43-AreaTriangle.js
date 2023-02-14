class AreaTriangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  triArea() {
    return (this.base * this.height) / 2;
  }
}

const areaTriangle = new AreaTriangle(0, 60);
console.log(areaTriangle.triArea());

// triArea(3, 2) ➞ 3
// triArea(5, 4) ➞ 10
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50
// triArea(12, 11) ➞ 66
// triArea(0, 60) ➞ 0

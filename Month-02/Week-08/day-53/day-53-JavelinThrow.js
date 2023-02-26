class JavalynThrow {
  constructor(v, a) {
    this.v = v;
    this.a = a;
  }

  method() {
    const height = (this.v * Math.sin((this.a * 3.14) / 180)) ** 2 / (2 * 9.81);
    const range =
      ((2 * this.v * Math.sin((this.a * 3.14) / 180)) / 9.81) *
      (this.v * Math.cos((this.a * 3.14) / 180));
    return `Ymax=${Math.round(height)}m, Ymax=${Math.round(range)}m`;
  }
}

const javalynThrow = new JavalynThrow(100.1, 89);
console.log(javalynThrow.method());
// input : 36.7, 45 output: Ymax=34m, Ymax=137m
// input : 51.3, 20 output: Ymax=16m, Ymax=172m
// input : 100.1, 89 output: Ymax=511m, Ymax=37m

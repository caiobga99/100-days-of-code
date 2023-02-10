class HalloweenSale {
  constructor(p, d, m, s) {
    this.p = p;
    this.d = d;
    this.m = m;
    this.s = s;
  }
  howManyGames() {
    let games = 0;
    while (this.p > this.m && this.s >= this.p) {
      if (games === 0) {
        games++;
        this.s -= this.p;
      }

      this.p -= this.d;
      this.s -= this.p;
      games++;
    }
    return games;
  }
}

const halloweenSale = new HalloweenSale(20, 3, 6, 80); 
console.log(halloweenSale.howManyGames());

// howManyGames(20, 3, 6, 80) ➞ 6
class Josephus {
  constructor(n, i) {
    this.i = i;
    this.circle = new Array(n).fill().map((_, i) => i + 1);
  }
  josephusProblem() {
    let ind = 0;
    let index = (ind = 1);
    while (this.circle.length > 1) {
      if (ind % this.i === 0) {
        this.circle.splice(index - 1, 1);
        ind = 1;
      } else {
        index++;
        ind++;
      }
      if (index > this.circle.length) index = 1;
    }
    return this.circle[0];
  }
}


const TestJosephus = new Josephus(11, 1);
console.log(TestJosephus.josephusProblem());

// TestJosephus(41, 3) ➞ 31

// TestJosephus(35, 11) ➞ 18

// TestJosephus(11, 1) ➞ 11

// TestJosephus(2, 2) ➞ 1
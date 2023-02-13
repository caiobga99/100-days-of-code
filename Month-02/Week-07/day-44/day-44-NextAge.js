class NextAge {
  constructor(side1, side2) {
    this.side1 = side1;
    this.side2 = side2;
  }

  next() {
    return this.side1 + this.side2 - 1;
  }
}

const nextAge = new NextAge(9, 2);
console.log(nextAge.next());

// const nextAge = new NextAge(8, 10); // 17
// const nextAge = new NextAge(5, 7); // 11
// const nextAge = new NextAge(9, 2); // 10

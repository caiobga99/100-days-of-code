class CountCarryOperations {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  carryOperations() {
    let carry = 0;
    let count = 0;

    while (this.a > 0 || this.b > 0) {
      carry = Math.floor((carry + (this.a % 10) + (this.b % 10)) / 10);
      count += carry;
      this.a = Math.floor(this.a / 10);
      this.b = Math.floor(this.b / 10);
    }
    return count;
  }
}

const countCarryOperations = new CountCarryOperations(1, 2);
console.log(countCarryOperations.carryOperations());

// carryOperations(123, 456) ➞ 0
// carryOperations(555, 555) ➞ 3
// carryOperations(123, 594) ➞ 1
// carryOperations(555, 545) ➞ 3
// carryOperations(1, 20000) ➞ 0
// carryOperations(1, 2) ➞ 0

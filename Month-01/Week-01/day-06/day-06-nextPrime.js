const readlineSync = require("readline-sync");
class Prime {
  constructor(number) {
    this.number = number;
  }
  isPrime(num) {
    let count = 0;
    for (let i = 0; i <= num; i++) {
      num % i === 0 ? count++ : count;
    }
    return count === 2;
  }
  getNextPrime() {
    while (!this.isPrime(this.number)) {
      this.number++;
    }
    return this.number;
  }
}
const PrimeNumber = new Prime(readlineSync.question("inform the number! \n"));
console.log(PrimeNumber.getNextPrime());

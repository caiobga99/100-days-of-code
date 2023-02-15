class Xor {
    constructor(x, y) {
       x = x^y;
       y = x^y;
       this.result = x^y;
       this.y = y;
    }
    xor() {
        return this.result - this.y;
    }
}

const XOR = new Xor(2, 1);
console.log(XOR.xor());
// XOR(10, 41) ➞ 31
// XOR(69, 420) ➞ 351
// XOR(12345, 890412) ➞ 878067
// XOR(2, 1) ➞ -1

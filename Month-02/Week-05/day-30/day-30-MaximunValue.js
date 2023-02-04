class MaximunValue {
  constructor(n, digit) {
    this.digit = digit;
    this.n = n;
    this.num = n.toString().replace("-", "");
    this.res = [];
  }

  max() {
    
    for(let index = 0; index <= this.num.length; index++){
        let sub = '';
        if(this.n < 0) sub += '-';
        for(let i = 0; i <= this.num.length; i++){
            if(this.res.length === i){
                this.res.push(sub);
                this.res[i] += this.digit.toString();
                this.res[i] += this.num.substring(i);
                this.res[i] = Number(this.res[i])
                break;
            }   
            if(!this.res[index]){
                sub += this.num[i];
                continue;
            }
            this.res += this.num[i];
        }
    }

    return this.res.sort((a,b) => b-a)[0];
  }
}

const TestMaximunValue = new MaximunValue(860, 7);
console.log(TestMaximunValue.max());

// Given N = 276, Digit = 3, function should return 3276
// Given N = -999, Digit = 4, function should return -4999
// Given N = 0, Digit = 3, function should return 30
// Given N = 860, Digit = 7, function should return 8760
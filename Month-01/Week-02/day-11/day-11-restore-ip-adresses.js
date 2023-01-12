class RestoreIpAdresses {
  constructor(number) {
    this.number = number;
    this.resultado = [];
  }

  formatIp() {
    if (this.number.length < 4 || this.number.length > 12)
      return "Number Invalid";
    for (let i = 0; i < 3; i++) {
      for (let j = i + 1; j < i + 4; j++) {
        if (j > this.number.length - 1) continue;
        for (let k = j + 1; k < j + 4; k++) {
          if (k > this.number.length - 1) continue;
          for (let l = k + 1; l < k + 4; l++) {
            if (l > this.number.length - 1) continue;
            let p1 = this.number.slice(0, i + 1);
            let p2 = this.number.slice(i, j + 1);
            let p3 = this.number.slice(j, k + 1);
            let p4 = this.number.slice(k, l + 1);
            if (p1 <= 255 && p2 <= 255 && p3 <= 255 && p4 <= 255)
              this.resultado.push(`${p1} . ${p2} . ${p3} . ${p4}`);
          }
        }
      }
    }
    return this.resultado;
  }
}

const TestRestoreIpAdresses = new RestoreIpAdresses("101023");
console.log(TestRestoreIpAdresses.formatIp());

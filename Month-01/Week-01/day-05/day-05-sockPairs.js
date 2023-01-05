const readlineSync = require("readline-sync");
class SockPairs {
  constructor(sock) {
    this.socksCounts = sock.split("").sort();
  }
  pairsOfSock() {
    if (typeof this.socksCounts != "string") {
      return 0;
    }
    let pairs = 0;
    for (let i = 0; i < this.socksCounts.length; i++) {
      if (this.socksCounts[i] == this.socksCounts[i + 1]) {
        pairs++;
        i++;
      }
    }
    return pairs;
  }
}

const TestSockPairs = new SockPairs(
  readlineSync.question("inform the socks! \n")
);
console.log(TestSockPairs.pairsOfSock());
// "" ➞ 0
// AA ➞ 1
// ABABC ➞ 2
// KKAAAIII ➞ 3
// CABBACCC ➞ 4

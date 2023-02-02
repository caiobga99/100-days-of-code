class ClimbingTheLeaderBoard {
  constructor(ranked, player) {
    this.ranked = ranked;
    this.player = player;
  }

  playerRank() {
    const top = new Set();
    const arr = [];
    const res = [];

    for (let value of this.ranked) {
      top.add(value);
    }
    for (let value of top) {
      arr.push(value);
    }
    for (let value of this.player) {
      arr.push(value);
      arr.sort((a, b) => b - a);
      res.push(arr.indexOf(value) + 1);
      arr.splice(arr.indexOf(value), 1);
    }
    return res;
  }
}

const TestClimbingTheLeaderBoard = new ClimbingTheLeaderBoard(
  [100, 90, 90, 80],
  [70, 80, 105]
);
console.log(TestClimbingTheLeaderBoard.playerRank());

// playerRank([100, 90, 90, 80], [70, 80, 105])  ➞ [4, 3, 1]
// playerRank([100, 90, 90, 80], [106, 107, 105])  ➞ [1, 1, 1]

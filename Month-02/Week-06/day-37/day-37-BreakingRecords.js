class BreakingRecords {
  constructor(scores) {
    this.scores = scores;
  }

  metod() {
    let records = [[this.scores[0]], [this.scores[0]]];
    this.scores.map((value) =>
      value > records[0][records[0].length - 1] ? records[0].push(value) : null
    );
    this.scores.map((value) =>
      value < records[1][records[1].length - 1] ? records[1].push(value) : null
    );

    return [records[0].length - 1, records[1].length - 1];
  }
}

// const breakingRecords = new BreakingRecords([12, 24, 10, 24]); // [1, 1]
const breakingRecords = new BreakingRecords([10, 5, 20, 20, 4, 5, 2, 23, 1]); //[2, 4]
console.log(breakingRecords.metod());

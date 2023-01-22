class RandomMazeGenerator {
  constructor(column, row) {
    this.column = column;
    this.row = row;
  }
  random(info) {
    let bool = info === "col" ? 40 : 20;
    let nm = Math.floor(Math.random() * 100 + 1);
    if (nm > 0 && nm <= bool) return true;
    return false;
  }

  drawMaze() {
    let indcolumn = this.column;
    let sort;

    while (indcolumn > 0) {
      for (let i = 1; i <= this.row; i++) {
        sort = this.random("row");
        if (
          indcolumn === this.column ||
          (i == 1 && indcolumn === this.column) ||
          (i === this.row && indcolumn === this.row) ||
          sort === true
        ) {
          process.stdout.write("+---");
        } else {
          process.stdout.write("+   ");
        }
      }
      process.stdout.write("+\n");
      for (let i = 0; i <= this.row; i++) {
        sort = this.random("col");
        if (i == 0 || i === this.row || sort === true) {
          process.stdout.write("|   ");
        } else {
          process.stdout.write("    ");
        }
      }
      process.stdout.write("\n");
      indcolumn--;
    }
    for (let i = 1; i <= this.row; i++) {
      process.stdout.write("+---");
    }
    process.stdout.write("+");
  }
}
const TestRandomMazeGenerator = new RandomMazeGenerator(3, 6);
TestRandomMazeGenerator.drawMaze();

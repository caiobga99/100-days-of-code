class ChristmasTree {
  constructor(h) {
    this.h = h;
    this.hash = 1;
    this.t = "";
  }
  tree() {
    while (this.h > 0) {
      this.t += " ".repeat(this.h - 1);
      this.t += "#".repeat(this.hash);
      this.t += " ".repeat(this.h - 1);
      this.t += "\n";
      this.h--;
      this.hash += 2;
    }
    return this.t;
  }
}

const christmasTree = new ChristmasTree(5);
console.log(christmasTree.tree());

// ree(1) ➞ [
//     "#"
//   ]

//   tree(2) ➞ [
//     " # ",
//     "###"
//   ]

//   tree(5) ➞ [
//     "    #    ",
//     "   ###   ",
//     "  #####  ",
//     " ####### ",
//     "#########"
//   ]

//   tree(0) ➞ []

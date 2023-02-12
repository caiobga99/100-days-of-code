class DrawingBook {
  constructor(book) {
    this.book = book;
  }

  minPages() {
    let start =
      this.book[0] - this.book[1] > Math.abs(1 - this.book[1])
        ? 1
        : this.book[0];
    let index = 0;

    while (start !== this.book[1]) {
      if (start < this.book[1]) start += 1;
      else start -= 1;
      index++;
    }
    return Math.ceil(index / 2);
  }
}

const drawingBook = new DrawingBook([5, 3]);
console.log(drawingBook.minPages());

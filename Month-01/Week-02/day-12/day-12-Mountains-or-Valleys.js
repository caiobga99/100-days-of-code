class MountainsOrValleys {
  constructor(arr) {
    this.arr = arr;
  }

  VallesOrMountains() {
    let contMountain = 0;
    let contValleys = 0;
    for (let i = 0; i < this.arr.length - 1; i++) {
      this.arr[i] > this.arr[i - 1] && this.arr[i] > this.arr[i + 1]
        ? contMountain++
        : contMountain;
      this.arr[i] < this.arr[i - 1] && this.arr[i] < this.arr[i + 1]
        ? contValleys++
        : contValleys;
    }
    if (contMountain !== 1 && contValleys !== 1) return "Neither!";
    if (contMountain === 1) return "Mountain!";
    if (contValleys === 1) return "Valley!";
  }
}

const test1 = [1, 3, 5, 4, 3, 2]; //Mountain
const test2 = [-1, 0, -1]; //Mountain
const test3 = [-1, -1, 0, -1, -1]; //Mountain
const test4 = [10, 9, 8, 7, 2, 3, 4, 5]; //Valley
const test5 = [350, 100, 200, 400, 700]; //Valley
const test6 = [1, 2, 3, 2, 4, 1]; //Neither (return Valley(Err))
const test7 = [5, 4, 3, 2, 1]; //Neither
const test8 = [5, 4, 3, 2, 1]; //Neither

const TestMountainsOrValleys = new MountainsOrValleys(test8);
console.log(TestMountainsOrValleys.VallesOrMountains());
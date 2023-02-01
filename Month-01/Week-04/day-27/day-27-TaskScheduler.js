class TaskScheduler {
  constructor(arr, int) {
    this.arr = arr;
    this.int = int;
    this.newArr = [];
  }
  task() {
    while (this.arr.length > 0) {
      this.newArr.push(this.arr[0]);
      this.arr.shift();
      this.arr.reverse();
    }
    return this.newArr.length + this.int;
  }
}

const TestTaskScheduler = new TaskScheduler(["A", "A", "A", "B", "B", "B"], 2);
console.log(TestTaskScheduler.task());

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16

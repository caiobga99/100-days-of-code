class AsteroidCollision {
  constructor(arr) {
    this.arr = arr;
  }
  asteroid() {
    for (let i = 1; i < this.arr.length; i++) {
      if (this.arr[i] < 0 && this.arr[i - 1] > 0) {
        if (Math.abs(this.arr[i]) === Math.abs(this.arr[i - 1]))
          this.arr.splice(i - 1, 2);
        else
          Math.abs(this.arr[i]) > Math.abs(this.arr[i - 1])
            ? this.arr.splice(i - 1, 1)
            : this.arr.splice(i, 1);
        i = 0;
      }
    }
    return this.arr;
  }
}
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Input: asteroids = [8,-8]
// Output: []
// Input: asteroids = [10,2,-5]
// Output: [10]
// Input: asteroids = [-2,-1,1,2]
// Output: [-2,-1,1,2]
const asteroidCollision = new AsteroidCollision([-2,-1,1,2]);
console.log(asteroidCollision.asteroid());
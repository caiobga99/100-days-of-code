class MergeSortedArray {
  merge(arr1, arr2) {
    return [...arr1, ...arr2].filter((e) => e != 0).sort();
  }
}
const newArray = new MergeSortedArray();
console.log(newArray.merge([1, 2, 3, 0, 0, 0], [2, 5, 6]));
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

/*
#Err#
class Array {
  constructor(array1, array2) {
    this.array1 = array1;
    this.array2 = array2;
  }
  menorArray() {
    if (this.array1.length > this.array2.length) {
      while (this.array1.length > this.array2.length) {
        this.array1.splice(
          this.array1[this.array1.length - 2],
          this.array1[this.array1.length - 1]
        );
      }
      return this.array1.concat(this.array2).sort();
    }
  }
}
const teste = new Array([1,2,3,4,5,6], [1,2,3]);
console.log(teste.menorArray());
*/

import merge from './merge.js';

function mergeSort(arr) {
  if (arr.length > 1) {
    // const mid = Math.floor(arr.length / 2);
    // const arr1 = mergeSort(arr.slice(0, mid));
    // const arr2 = mergeSort(arr.slice(mid));
    return merge(
      mergeSort(arr.slice(0, arr.length / 2)),
      mergeSort(arr.slice(arr.length / 2))
    );
  } else {
    return arr;
  }
}

console.log(mergeSort([1, 4, 8, 2, 6, 9, 5, 1, 7]));
console.log(mergeSort([]));
console.log(mergeSort([13, 4, 8, 2, 6, 9, 5, 1, 20, 7]));
console.log(mergeSort([123, 434, 84, 21, 66, 9, 57, 11, 201, 78]));

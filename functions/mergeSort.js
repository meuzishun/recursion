export default function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const arr1 = mergeSort(arr.slice(0, arr.length / 2));
  const arr2 = mergeSort(arr.slice(arr.length / 2));
  const sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
  }

  if (arr1.length > 0) sorted.push(...arr1);
  if (arr2.length > 0) sorted.push(...arr2);

  return sorted;
}

// console.log(mergeSort([1, 4, 8, 2, 6, 9, 5, 1, 7]));
// console.log(mergeSort([]));
// console.log(mergeSort([13, 4, 8, 2, 6, 9, 5, 1, 20, 7]));
// console.log(mergeSort([123, 434, 84, 21, 66, 9, 57, 11, 201, 78]));
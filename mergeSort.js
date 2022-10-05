function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const arr1 = mergeSort(arr.slice(0, arr.length / 2));
  const arr2 = mergeSort(arr.slice(arr.length / 2));

  let i = 0;
  let j = 0;

  const sorted = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  for (; i < arr1.length; i++) {
    sorted.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    sorted.push(arr2[j]);
  }

  return sorted;
}

console.log(mergeSort([1, 4, 8, 2, 6, 9, 5, 1, 7]));
console.log(mergeSort([13, 4, 8, 2, 6, 9, 5, 1, 20, 7]));
console.log(mergeSort([123, 434, 84, 21, 66, 9, 57, 11, 201, 78]));

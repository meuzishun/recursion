function merge(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  let i = 0;
  let j = 0;
  let k = 0;

  const sorted = [];

  while (i <= m && j <= n) {
    if (arr1[i] < arr2[i]) {
      sorted[k++] = arr1[i++];
    } else {
      sorted[k++] = arr2[j++];
    }
  }
  for (; i <= m; i++) {
    sorted[k++] = arr1[i];
  }
  for (; j <= n; j++) {
    sorted[k++] = arr2[j];
  }

  return sorted;
}

console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));
console.log(merge([1, 5, 7, 10, 13], [2, 3, 4, 6, 8, 9, 11, 12, 13]));

export default function merge(arr1, arr2) {
  // let i = 0;
  // let j = 0;

  const sorted = [];

  // while (i < arr1.length && j < arr2.length) {
  //   if (arr1[i] < arr2[j]) {
  //     sorted.push(arr1[i]);
  //     i++;
  //   } else {
  //     sorted.push(arr2[j]);
  //     j++;
  //   }
  // }

  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
  }

  // for (; i < arr1.length; i++) {
  //   sorted.push(arr1[i]);
  // }
  // for (; j < arr2.length; j++) {
  //   sorted.push(arr2[j]);
  // }

  if (arr1.length > 0) sorted.push(...arr1);
  if (arr2.length > 0) sorted.push(...arr2);

  return sorted;
}

// console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));
// console.log(merge([1, 5, 7, 10, 13], [2, 3, 4, 6, 8, 9, 11, 12, 13]));

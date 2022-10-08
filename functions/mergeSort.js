import split from './split.js';
import merge from './merge.js';

export default function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const [arr1, arr2] = split(arr);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

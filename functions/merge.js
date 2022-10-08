export default function merge(arr1, arr2) {
  const sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
  }

  if (arr1.length > 0) sorted.push(...arr1);
  if (arr2.length > 0) sorted.push(...arr2);

  return sorted;
}

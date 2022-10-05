function fibs(len) {
  let prev = 0;
  let next = 1;
  let temp;
  let arr = [];
  for (let i = 0; i < len; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      temp = prev + next;
      prev = next;
      next = temp;
      arr.push(next);
    }
  }
  return arr;
}

// console.log(fibs(8));

// function fibsRec(len) {
//   return len === 1
//     ? [0]
//     : len === 2
//     ? [0, 1]
//     : fibsRec(len - 1).concat(
//         fibsRec(len - 1)[fibsRec(len - 1).length - 1] +
//           fibsRec(len - 1)[fibsRec(len - 1).length - 2]
//       );
// }

// function fibsRec(len) {
//   if (len === 1) return [0];
//   if (len === 2) return [0, 1];
//   const arr = fibsRec(len - 1);
//   return arr.concat(arr.at(-1) + arr.at(-2));
// }

// console.log(fibsRec(8));

// function merge(arr1, arr2) {
//   let m = arr1.length;
//   let n = arr2.length;
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   const sorted = [];

//   while (i <= m && j <= n) {
//     if (arr1[i] < arr2[i]) {
//       sorted[k++] = arr1[i++];
//     } else {
//       sorted[k++] = arr2[j++];
//     }
//   }
//   for (; i <= m; i++) {
//     sorted[k++] = arr1[i];
//   }
//   for (; j <= n; j++) {
//     sorted[k++] = arr2[j];
//   }

//   return sorted;
// }

function merge(arr1, arr2) {
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

// console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]));
// console.log(merge([1, 5, 7, 10, 13], [2, 3, 4, 6, 8, 9, 11, 12, 13]));

function split(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return [split(arr.slice(0, mid)), split(arr.slice(mid))];
}

// console.log(split([4, 2, 7]));

function mergeSort1(arr) {
  if (arr.length > 1) {
    // const mid = Math.floor(arr.length / 2);
    // const arr1 = mergeSort1(arr.slice(0, mid));
    // const arr2 = mergeSort1(arr.slice(mid));
    return merge(
      mergeSort1(arr.slice(0, arr.length / 2)),
      mergeSort1(arr.slice(arr.length / 2))
    );
  } else {
    return arr;
  }
}

function mergeSort2(arr) {
  if (arr.length === 1) return arr;

  const arr1 = mergeSort(arr.slice(0, arr.length / 2));
  // console.log(`Array 1 is ${arr1}`);
  const arr2 = mergeSort(arr.slice(arr.length / 2));
  // console.log(`Array 2 is ${arr2}`);

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
    // if (arr1[0] < arr2[0]) {
    //   sorted.push(arr1.shift());
    //   console.log(`Sorted array is now: ${sorted}`);
    // } else {
    //   sorted.push(arr2.shift());
    // }
    // console.log(`Array 1 is now: ${arr1}`);
    // console.log(`Array 2 is now: ${arr2}`);
    arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
  }

  if (arr1.length > 0) {
    // console.log(`Appending array 1: ${arr1}`);
    sorted.push(...arr1);
    // console.log(`Sorted is now: ${sorted}`);
  }

  if (arr2.length > 0) {
    // console.log(`Appending array 2: ${arr2}`);
    // console.log(typeof arr1);
    // console.log(typeof sorted);
    sorted.push(...arr2);
    // console.log(`Sorted is now: ${sorted}`);
  }

  // console.log(arr1);
  // console.log(arr2);

  // for (; i < arr1.length; i++) {
  //   sorted.push(arr1[i]);
  // }

  // for (; j < arr2.length; j++) {
  //   sorted.push(arr2[j]);
  // }

  return sorted;
}

function mergeSort(arr) {
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

console.log(mergeSort([1, 4, 8, 2, 6, 9, 5, 1, 7]));
console.log(mergeSort([]));
console.log(mergeSort([13, 4, 8, 2, 6, 9, 5, 1, 20, 7]));
console.log(mergeSort([123, 434, 84, 21, 66, 9, 57, 11, 201, 78]));

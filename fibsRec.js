function fibsRec(len) {
  if (len === 1) return [0];
  if (len === 2) return [0, 1];
  const arr = fibsRec(len - 1);
  return arr.concat(arr.at(-1) + arr.at(-2));
}

// console.log(fibsRec(8));

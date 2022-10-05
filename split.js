function split(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return [split(arr.slice(0, mid)), split(arr.slice(mid))];
}

console.log(split([4, 2, 7]));

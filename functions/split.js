export default function split(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);

  return [arr.slice(0, mid), arr.slice(mid)];
}

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

function fibsRec(len) {
  return len === 1
    ? [0]
    : len === 2
    ? [0, 1]
    : fibsRec(len - 1).concat(
        fibsRec(len - 1)[fibsRec(len - 1).length - 1] +
          fibsRec(len - 1)[fibsRec(len - 1).length - 2]
      );
}

// console.log(fibsRec(8));

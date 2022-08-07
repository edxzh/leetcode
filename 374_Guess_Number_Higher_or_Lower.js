const guessNumber = (n) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let guessResult = guess(mid);

    if (guessResult === -1) {
      right = mid - 1;
    } else if (guessResult === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};

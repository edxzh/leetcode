const mySqrt = (x) => {
  let l = 0;
  let r = x / 2 + 1;
  let mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    let midSq = mid * mid

    if (midSq > x) {
      r = mid - 1;
    } else if (midSq < x) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return r;
};

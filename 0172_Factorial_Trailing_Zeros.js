const trailingZeroes = (n) => {
  let result = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);

    result += n;
  }

  return result;
};

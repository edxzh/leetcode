const isPowerOfFour = (n) => {
  const isPowerOfTwo = (n) => (n & n - 1) === 0;

  const isPositive = (n) => n > 0;

  const isOnlyPowerOfFour = (n) => (n & 0b1010101010101010101010101010101) === n;

  return isPositive(n) && isPowerOfTwo(n) && isOnlyPowerOfFour(n);
};

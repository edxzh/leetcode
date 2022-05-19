const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let num = x;
  let revert = 0;

  while (num > 0) {
    revert = revert * 10 + (num % 10);

    num = Math.floor(num / 10);
  }

  return revert == x;
};

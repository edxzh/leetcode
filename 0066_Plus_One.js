const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;

      return digits;
    }

    digits[i] = 0;
  }

  return [1].concat(Array(digits.length).fill(0));
};

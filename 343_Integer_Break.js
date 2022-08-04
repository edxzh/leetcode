const integerBreak = (n) => {
  if (n === 2) return 1;
  if (n === 3) return 2;

  let numOfThree = Math.floor(n / 3);
  let remainerOfThree = n % 3;

  if (remainerOfThree === 1) {
    numOfThree--;
    remainerOfThree += 3;
  }

  if (remainerOfThree === 0) {
    return Math.pow(3, numOfThree);
  } else {
    return Math.pow(3, numOfThree) * remainerOfThree;
  }
};

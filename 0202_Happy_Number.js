const isHappy = (n) => {
  const sumOfSquare = (n) => {
    let strN = n.toString();
    let result = 0;

    for (let c of strN) {
      result += Math.pow(parseInt(c), 2);
    }

    return result;
  }

  let seen = {};

  while (n !== 1 && !seen[n]) {
    seen[n] = true;

    n = sumOfSquare(n);
  }

  return n === 1;
};

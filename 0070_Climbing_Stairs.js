const climbStairs = (n) => {
  let n1 = 0;
  let n2 = 1;
  let counter = 1;
  let nextTerm;

  while(counter <= n) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    counter++;
  }

  return nextTerm;
};

const generate = (numRows) => {
  let res = [[1]];

  for (let i = 1; i <= numRows; i++) {
    let newRow = [];

    for (let j = 0; j < i; j++) {
      let first = res[i - 1][j - 1] || 0;
      let last = res[i - 1][j] || 0;

      newRow[j] = first + last;
    }

    res.push(newRow);
  }

  res.shift();

  return res;
};

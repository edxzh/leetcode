const convertToTitle = (columnNumber) => {
  const TOTAL_LETTERS = 26;
  const A_CHAR_CODE_AT = "A".charCodeAt();

  let result = "";

  while (columnNumber > 0) {
    let num = columnNumber % TOTAL_LETTERS || TOTAL_LETTERS;
    columnNumber = Math.floor(columnNumber / TOTAL_LETTERS);

    if (num === TOTAL_LETTERS) {
      columnNumber -= 1;
    }

    let char = String.fromCharCode(num + A_CHAR_CODE_AT - 1);

    result = char + result;
  }

  return result;
};

const titleToNumber = (columnTitle) => {
  const TOTAL_LETTERS = 26;
  const A_CHAR_CODE_AT = "A".charCodeAt();

  let result = 0;

  for (let [index, title] of columnTitle.split("").reverse().entries()) {
    let curValue = TOTAL_LETTERS ** index * (title.charCodeAt() - A_CHAR_CODE_AT + 1)

    result += curValue;
  }

  return result;
};

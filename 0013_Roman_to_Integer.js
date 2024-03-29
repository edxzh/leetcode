const romanToInt = (s) => {
  const map = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
  let result = map[s[s.length - 1]];

  for (let i = 0; i < s.length - 1; i++) {
    let cur = map[s[i]];
    let next = map[s[i+1]];

    if (cur >= next) {
      result += cur;
    } else {
      result -= cur;
    }
  }

  return result;
};

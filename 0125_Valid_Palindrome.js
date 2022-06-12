const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;

  if (s.length <= 1) {
    return true;
  }

  const isLetter = (c) => {
    return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
  }

  while (i < j) {
    let start = s[i].toLowerCase();
    let end = s[j].toLowerCase();

    if (!isLetter(start)) {
      i++;
      continue;
    }

    if (!isLetter(end)) {
      j--;
      continue;
    }

    if (start !== end) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

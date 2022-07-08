const isAnagram = (s, t) => {
  let count = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let c of s) {
    if (c in count) {
      count[c]++;
    } else {
      count[c] = 1;
    }
  }

  for (let c of t) {
    if (!count[c]) {
      return false;
    } else {
      count[c]--;
    }
  }

  return true;
};

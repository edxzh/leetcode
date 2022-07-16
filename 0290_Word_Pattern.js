const wordPattern = (pattern, s) => {
  let p2s = {};
  let s2p = {};

  let wordList = s.split(" ");

  if (pattern.length !== wordList.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    let p = pattern[i];
    let w = wordList[i];

    if (!p2s[p] && !s2p[w]) {
      p2s[p] = w;
      s2p[w] = p;
    }

    if (p2s[p] !== w) {
      return false;
    }

    if (s2p[w] !== p) {
      return false;
    }
  }

  return true;
};

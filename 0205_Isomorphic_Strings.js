const isIsomorphic = (s, t) => {
  let s2t = {};
  let t2s = {};

  for (let i = 0; i < s.length; i++) {
    if (!s2t[s[i]] && !t2s[t[i]]) {
      s2t[s[i]] = t[i];
      t2s[t[i]] = s[i];
    }

    if (s2t[s[i]] && s2t[s[i]] !== t[i]) {
      return false;
    }

    if (t2s[t[i]] && t2s[t[i]] !== s[i]) {
      return false;
    }
  }

  return true;
};

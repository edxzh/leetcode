const lengthOfLongestSubstring = (s) => {
  let currentLongest = "";
  let allTimeLongest = "";

  for (let e of s) {
    if (currentLongest.includes(e)) {
      let replicatedLetterIndex = currentLongest.indexOf(e);

      currentLongest = currentLongest.substring(replicatedLetterIndex + 1) + e;
    } else {
      currentLongest += e;

      if (currentLongest.length > allTimeLongest.length) {
        allTimeLongest = currentLongest;
      }
    }
  }

  return allTimeLongest.length;
};

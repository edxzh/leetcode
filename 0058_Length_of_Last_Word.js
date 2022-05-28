const lengthOfLastWord = (s) => {
  let reachFirstWord = s[s.length - 1] === " " ? false : true;
  let counter = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (reachFirstWord === false) {
      if (s[i] === " ") {
        continue;
      } else {
        reachFirstWord = true;
        counter++;
      }
    } else {
      if (s[i] === " ") {
        break;
      } else {
        counter++;
      }
    }
  }

  return counter;
};

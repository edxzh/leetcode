const isValid = (s) => {
  if (s.length % 2 == 1) {
    return false;
  }

  const parentheseMap = {
    "}": "{",
    "]": "[",
    ")": "("
  };
  const rightParenthesses = [")", "]", "}"];
  let stack = [];

  for (let i = s.length - 1; i >= 0; i--) {
    const lastChar = s[i];
    if (rightParenthesses.includes(lastChar)) {
      stack.push(lastChar);
    } else {
      const lastElementInStack = stack[stack.length-1];
      if (parentheseMap[lastElementInStack] == lastChar) {
        stack.pop();
      } else {
        return false;
      }
    }
  };

  return stack.length == 0;
};

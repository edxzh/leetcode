const longestCommonPrefix = (strs) => {
  let common = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(common)) {
      common = common.slice(0, common.length - 1);
    }

    if (common === "") {
      break;
    }
  }

  return common;
}

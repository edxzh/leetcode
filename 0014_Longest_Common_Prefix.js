const longestCommonPrefix = (strs) => {
  let common = strs[0];

  for (let c of strs) {
    while (!c.startsWith(common)) {
      common = common.slice(0, common.length - 1);
    }

    if (common == "") {
      break;
    }
  }

  return common;
}

var addBinary = (a, b) => {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let carry = 0;
  let result = "";

  while (aIndex >= 0 || bIndex >= 0) {
    let ai = a[aIndex] == "1" ? 1 : 0;
    let bi = b[bIndex] == "1" ? 1 : 0;

    let newBit = (ai + bi + carry) % 2;

    result = newBit.toString() + result;

    carry = (ai + bi + carry) > 1 ? 1 : 0;

    aIndex--;
    bIndex--;
  }

  if (carry > 0) {
    result = carry.toString() + result;
  }

  return result;
};

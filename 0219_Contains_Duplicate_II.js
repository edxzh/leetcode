const containsNearbyDuplicate = (nums, k) => {
  let numIndexHash = {};

  for (let [index, num] of nums.entries()) {
    if (numIndexHash[num] === undefined ||
      index - numIndexHash[num] > k) {
      numIndexHash[num] = index;
    } else {
      return true;
    }
  }

  return false;
}

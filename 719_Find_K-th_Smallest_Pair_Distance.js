const smallestDistancePair = (nums, k) => {
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums[nums.length - 1] - nums[0];

  const count_ngt = (mid) => {
    let slow = 0;
    let result = 0;

    for (let fast = 0; fast < nums.length; fast++) {
      while (nums[fast] - nums[slow] > mid) {
        slow += 1;
      }

      result += fast - slow;
    }

    return result;
  }

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (count_ngt(mid) >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

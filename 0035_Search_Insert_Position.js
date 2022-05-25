const searchInsert = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let mid_val = nums[mid];

    if(mid_val === target) {
      return mid;
    } else if (mid_val < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};

var removeDuplicates = (nums) => {
  let length = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[length] = nums[i];
      length++;
    }
  }

  return length;
};

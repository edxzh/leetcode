const maxSubArray = (nums) => {
  let curMax = nums[0];
  let allMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(nums[i], curMax + nums[i]);
    allMax = Math.max(allMax, curMax);
  }

  return allMax;
};

const missingNumber = (nums) => {
  let result = nums.length;

  for (let i = 0; i < nums.length; i++) {
    let temp = i - nums[i];
    result += temp;
  }

  return result;
};

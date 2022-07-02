const summaryRanges = (nums) => {
  let result = [];

  let start = nums[0];
  let end = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      end = nums[i + 1];
    } else {
      if (start === end) {
        result.push(nums[i].toString());

        start = nums[i + 1];
        end = nums[i + 1];
      } else {
        result.push(`${start}->${end}`);

        start = nums[i + 1];
        end = nums[i + 1];
      }
    }
  }

  return result;
};

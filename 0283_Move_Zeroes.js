const moveZeroes = (nums) => {
  if (!nums) {
    return;
  }

  let pointer = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[pointer] = num;
      pointer++;
    }
  }

  while (pointer < nums.length) {
    nums[pointer] = 0;
    pointer++;
  }

  return nums;
};

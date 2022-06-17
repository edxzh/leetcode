const majorityElement = (nums) => {
  let majority = nums[0];
  let counter = 1;

  for (let i = 1; i < nums.length; i++) {
    if (counter === 0) {
      majority = nums[i];
    }

    if (nums[i] === majority) {
      counter++;
    } else {
      counter--;
    }

    if (counter > nums.length / 2) {
      break;
    }
  }

  return majority;
};

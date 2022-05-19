const twoSum = (nums, target) => {
  let dict = {}

  for (let [index, num] of nums.entries()) {
    let compliment = target - num;
    if (compliment in dict) {
      return [dict[compliment], index];
    } else {
      dict[num] = index;
    }
  }
}

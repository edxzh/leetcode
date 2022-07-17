class NumArray {
  constructor(nums) {
    this.nums = nums;
  }

  sumRange(left, right) {
    let sum = 0;

    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }

    return sum;
  }
}

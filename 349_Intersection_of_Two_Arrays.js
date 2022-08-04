const intersection = (nums1, nums2) => {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];

  set1.forEach(num => {
    if (set2.has(num)) {
      result.push(num);
    }
  });

  return result;
};

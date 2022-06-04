const merge = (nums1, m, nums2, n) => {
  let len = nums1.length - 1
  i1 = m - 1;
  i2 = n - 1;

  while (i2 >= 0) {
    if (nums1[i1] > nums2[i2]) {
      nums1[len] = nums1[i1];
      i1--;
    } else {
      nums1[len] = nums2[i2];
      i2--;
    }

    len--;
  }

  return nums1;
};

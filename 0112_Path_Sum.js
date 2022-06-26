const hasPathSum = (root, targetSum) => {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  targetSum -= root.val;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

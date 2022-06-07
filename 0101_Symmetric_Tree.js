const isSymmetric = (root) => {
  if (!root) {
    return true;
  }

  const isSymmetric = (left, right) => {
    if (!left && !right) {
      return true;
    }

    if (!left || !right || left.val !== right.val) {
      return false
    }

    return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
  }

  return isSymmetric(root.left, root.right);
};

const isBalanced = (root) => {
  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    return Math.max(l, r) + 1;
  }

  if (!root) {
    return true;
  }

  if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};

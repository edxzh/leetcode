const removeLeafNodes = (root, target) => {
  const dfs = (node, parent, isLeft = true) => {
    if (!node) {
      return null;
    }

    dfs(node.left, node, true);
    dfs(node.right, node ,false);

    if (node.val === target && parent && !node.left && !node.right) {
      if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
  }

  let ans = new TreeNode(-1);
  ans.left = root;

  dfs(root, ans, true);

  return ans.left;
}

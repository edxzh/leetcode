const pruneTree = (root) => {
  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    const l = dfs(root.left);
    const r = dfs(root.right);

    if (l == 0) {
      root.left = null;
    }

    if (r == 0) {
      root.right = null;  
    } 

    const sum = root.val + l + r;

    return sum;
  };

  let ans = new TreeNode(-1);
  ans.left = root;
  dfs(ans);

  return ans.left;
};

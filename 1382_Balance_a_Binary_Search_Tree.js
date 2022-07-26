const balanceBST = (root) => {    
  const inOrder = (node) => {
    if (!node) {
      return [];
    }

    return [...inOrder(node.left), node.val, ...inOrder(node.right)];
  }

  const dfs = (nums) => {
    if(nums.length === 0) {
      return null;
    }

    const mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid]);

    node.left = dfs(nums.slice(0, mid));
    node.right = dfs(nums.slice(mid+1));

    return node;
  }

  let nums = inOrder(root);

  return dfs(nums);
};

const binaryTreePaths = (root) => {
  if (!root) {
    return [];
  }

  if (!root.left && !root.right) {
    return [`${root.val}`];
  }

  let left = binaryTreePaths(root.left).map(e => `${root.val}->${e}`);
  let right = binaryTreePaths(root.right).map(e => `${root.val}->${e}`);

  return [...left, ...right];
};

const minDepth = (root) => {
  let queue = [root];
  let depth = 0;

  if (!root) {
    return depth;
  }

  while (queue.length > 0) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

      if (!node.left && !node.right) {
        return depth + 1;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth;
};

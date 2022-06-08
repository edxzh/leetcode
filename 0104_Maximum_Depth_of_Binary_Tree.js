const maxDepth = (root) => {
  let depth = 0;
  let queue = [root];

  if (!root) {
    return 0;
  }

  while (queue.length > 0) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let node = queue.shift();

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

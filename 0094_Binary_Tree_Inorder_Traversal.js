const inorderTraversal = (root) => {
  const [WHITE, GREY] = [0, 1];
  let stack = [[WHITE, root]];
  let res = [];

  while (stack.length !== 0) {
    let [color, node] = stack.pop();
    if (node === null) {
      continue;
    }

    if (color === WHITE) {
      stack.push([WHITE, node.right]);
      stack.push([GREY, node]);
      stack.push([WHITE, node.left]);
    } else {
      res.push(node.val);
    }
  }

  return res;
};

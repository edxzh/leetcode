const postorderTraversal = (root) => {
  let [WHITE, GREY] = [0, 1];
  let stack = [[root, WHITE]];

  let res = [];

  while (stack.length > 0) {
    let [node, color] = stack.pop();

    if (node === null) {
      continue;
    }

    if (color === WHITE) {
      stack.push([node, GREY]);
      stack.push([node.right, WHITE]);
      stack.push([node.left, WHITE]);
    } else {
      res.push(node.val);
    }
  }

  return res;
};

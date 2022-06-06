const isSameTree = (p, q) => {
  let queue = [[p, q]];

  while (queue.length > 0) {
    let nodes = queue.shift();

    let firstNode = nodes[0];
    let secondNode = nodes[1];

    if (!firstNode && !secondNode) {
      continue;
    }

    if (!firstNode || !secondNode || firstNode.val !== secondNode.val) {
      return false;
    }

    queue.push([firstNode.left, secondNode.left]);
    queue.push([firstNode.right, secondNode.right]);
  }

  return true;
}

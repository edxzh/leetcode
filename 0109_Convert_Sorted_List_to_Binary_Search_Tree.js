const sortedListToBST = (head) => {
  const dfs = (head, tail) => {
    if (head === tail) {
      return null;
    }

    let fast = head;
    let slow = head;

    while (fast !== tail && fast.next !== tail) {
      fast = fast.next.next;
      slow = slow.next;
    }

    let root = new TreeNode(slow.val);

    root.left = dfs(head, slow);
    root.right = dfs(slow.next, tail);

    return root;
  }

  if (!head) {
    return null;
  }

  return dfs(head, null);
};

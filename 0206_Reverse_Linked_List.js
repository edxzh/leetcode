const reverseList = (head) => {
  let pre = null;
  let current = head;
  let next;

  while (current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
};

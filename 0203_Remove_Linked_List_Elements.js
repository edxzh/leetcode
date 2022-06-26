const removeElements = (head, val) => {
  let dummy = new ListNode(-1, head);
  let current = dummy;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }

  }

  return dummy.next;
};

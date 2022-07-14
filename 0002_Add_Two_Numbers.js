const addTwoNumbers = (l1, l2) => {
  let head = new ListNode();
  let result = head;

  let carry = 0;

  while (l1 || l2 || carry > 0) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    let nodeValue = sum % 10;
    result.next = new ListNode(nodeValue);

    carry = Math.floor(sum / 10);
    result = result.next;
  }

  return head.next;
};

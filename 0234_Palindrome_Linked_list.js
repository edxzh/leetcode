const reverseLinkedList = (head) => {
  let pre = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  return pre;
}

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = reverseLinkedList(slow.next);
  slow = slow.next;

  while (slow) {
    if (head.val !== slow.val) {
      return false;
    }

    head = head.next;
    slow = slow.next;
  }

  return true;
}

const mergeTwoLists = (list1, list2) => {
  let dummy = cur = new ListNode();

  while(list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }

    cur = cur.next;
  }

  if (list1 !== null) {
    cur.next = list1;
  }

  if (list2 !== null) {
    cur.next = list2;
  }

  return dummy.next;
};

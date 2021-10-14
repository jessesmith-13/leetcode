// Given the head of a linked list, remove the nth node from the end of the list and return its head.

class ListNode {
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null: next;
  }

  removeNthFromEnd(head, n) {
    let length = 0,
      cur = head;
    while (cur) {
      length++;
      cur = cur.next;
    }
    let nth = length - n - 1;
    cur = head;
    while (nth > 0) {
      cur = cur.next;
      nth--;
    }
    if (nth < 0) {
      head = head.next
    }
    cur.next = cur.next === null ? null : cur.next.next;
    return head;
  }
}

// const newList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const newList = new ListNode(1, new ListNode(2));
// const newList = new ListNode(1);
const newList = new ListNode(1, new ListNode(2));
console.log(newList.removeNthFromEnd(newList, 2));
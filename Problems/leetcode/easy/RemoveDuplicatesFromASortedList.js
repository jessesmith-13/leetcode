// Given the head of a sorted linked list, delete all duplicates 
// such that each element appears only once. Return the linked list sorted as well.

class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var deleteDuplicates = function(head) {
  let start = head,
    end = head;
  while (end) {
    while (end.val === start.val) {
      if (!end.next) {
        end = null;
        break;
      } else {
        end = end.next;
      }
    }
    if (end === null) {
      start.next = null;
    } else {
      start = start.next;
      start.val = end.val;
    }
  }
  return head;
};

const newList = new LinkedList(2);
newList.next = new LinkedList(2);
console.log(deleteDuplicates(newList));
// console.log(newList);
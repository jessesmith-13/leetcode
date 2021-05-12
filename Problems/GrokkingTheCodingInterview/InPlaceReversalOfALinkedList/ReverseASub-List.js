//INCOMPLETE
// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "",
      temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

const reverse_sub_list = function(head, p, q) {
  //set previous to the head, set next to the head
  let previous = head,
    next = head;
  //while next doesn't equal q
  while (next.value !== q) {
    //set next to next.next
    next = next.next;
  }
  //set next to next.next
  next = next.next;
  //while previous.next doesn't equal p
  while (previous.next.value !== p) {
    //set previous to previous.next
    previous = previous.next;
  }
  //set subPrevious to previous.next, subCurrent to subPrevious.next
  let subPrevious = previous.next,
    subCurrent = subPrevious.next;
  //set subPrevious.next to next
  subPrevious.next = next;
  //while subCurrent doesn't equal next
  while (subCurrent !== next) {
    //subNext is equal to subCurrent.next
    let subNext = subCurrent.next;
    //subCurrent.next = subPrevious
    subCurrent.next = subPrevious;
    //subPrevious = subCurrent
    subPrevious = subCurrent;
    //subCurrent = subNext
    subCurrent = subNext;
  }
  //previous.next = subPrevious
  previous.next = subPrevious;
  //return previous
  return previous;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function(head) {
  //declare fastPointer(head), slowPointer(head)
  let fastPointer = head,
    slowPointer = head,
    firstPass = true;
  //while the fastPointer doesn't the equal slowpointer
  while (fastPointer !== slowPointer || firstPass) {
    //if fastPointer.next or fastpointer.next.next equal null
    if (fastPointer.next === null || fastPointer.next.next === null) {
      //return false
      return false;
      //otherwise
    } else {
      //fastPointer = fastpointer.next.next
      fastPointer = fastPointer.next.next;
      //slowPointer = slowPointer.next
      slowPointer = slowPointer.next;
    }
    firstPass = false;
  }
  return true
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

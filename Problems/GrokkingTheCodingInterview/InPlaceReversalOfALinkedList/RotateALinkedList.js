// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

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


const rotate = function(head, rotations) {
  //define variables: current(head), start(head), previous
  let current = head,
    start = head,
    previous;
  //while rotations does not equal 1
  while (rotations !== 1) {
    //if the current is null
    if (current === null) {
      //current is reassigned to the had
      current = head;
    //otherwise
    } else {
      //current = current.next
      current = current.next;
    }
    //decrement rotations
    rotations--;
  }
  //previous = current
  previous = current;
  //current = current.next
  current = current.next;
  //previous.next = null
  previous.next = null;
  //head becomes current
  head = current;
  //while current doesn't equal previous
  while (current !== previous) {
    //if current.next is null
    if (current.next === null) {
      //current.next is start
      current.next = start;
      //current is start
      current = start;
    }
    //current is current.next
    current = current.next;
  }
  //return head
  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 8).get_list()}`)

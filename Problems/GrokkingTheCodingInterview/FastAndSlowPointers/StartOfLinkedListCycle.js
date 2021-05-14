// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function(head){
  //declare variables: pointer1(head), pointer2(head), initialPass(true), length(0)
  let pointer1 = head,
    pointer2 = head,
    initialPass = true,
    length = 0;
  //while pointer1 doesn't equal pointer2 or initialPass is true
  while (pointer1 !== pointer2 || initialPass) {
    //move pointer2 ahead by 2
    pointer2 = pointer2.next.next;
    //move pointer1 ahead by 1
    pointer1 = pointer1.next;
    //if initialPass is true
    if (initialPass) {
      //flip it!
      initialPass = !initialPass;
    }
  }
  //flip initialPass back to true
  initialPass = true;
  //while pointer1 doesn't equal pointer2 or initialPass is true
  while (pointer1 !== pointer2 || initialPass) {
    //increment pointer2 by 1
    pointer2 = pointer2.next;
    //increase length by 1
    length++;
    //flip initialPass
    if (initialPass) {
      initialPass = !initialPass;
    }
  }
  //now that we have our length, set both of the pointers back to the head
  pointer1 = head, pointer2 = head;
  //while the length is greater than 0
  while (length > 0) {
    //move pointer two ahead by 1
    pointer2 = pointer2.next;
    //decrement length
    length--;
  }
  //while pointer1 and pointer2 don't equal each other
  while (pointer2 !== pointer1) {
    //move them both ahead by 1
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  //set the head to either one
  head = pointer1;
  //return head
  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

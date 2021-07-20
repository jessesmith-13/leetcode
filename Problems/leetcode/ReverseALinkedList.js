// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let previous = null,
			current = head;
	while (current !== null) {
		let next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}
	head = previous;
  return head;
}

let list = new LinkedList(1);
list.next = new LinkedList(2);
list.next.next = new LinkedList(3);
list.next.next.next = new LinkedList(4);
list.next.next.next.next = new LinkedList(5);
console.log(reverseLinkedList(list));
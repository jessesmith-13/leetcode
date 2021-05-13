// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

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



const reverse_every_k_elements = function(head, k) {
  let count,
    start = head,
    end = head,
    // prevEnd = head,
    firstPass = true,
    lastEnd = head,
    previous,
    current;
  while (end !== null) {
    console.log('blah')
    count = 0;
    while (count < k - 1) {
      if (end.next === null) {
        break;
      }
      end = end.next;
      count++;
    }
    if (firstPass === false) {
      lastEnd.next = end;
      end = end.next;
    } else {
      end = end.next;
    }
    
    previous = start;
    current = start.next;
    if (end === null) {
      previous.next = null;
    }
    while (current !== end) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    if (firstPass === true) {
      firstPass = false;
      head = previous;
    }
    lastEnd = start;
    start = end;
  }
  return head;
}



head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`)

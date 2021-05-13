// Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
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


const reverse_alternate_k_elements = function(head, k) {
  //declare variables: i, reverse (true), previous (head), current (head), start (head), end (head), firstPass(true)
  let i,
    reverse = true,
    previous = head,
    current = head,
    start = head,
    preStart = head,
    end = head,
    firstPass = true;
  //while the end doesn't equal null
  while (end !== null) {
    //set i to 0
    i = 0;
    //while i < k or while end doesn't equal null
    while (i < k - 1) {
      if (end === null) {
        break;
      }
      //set end to end.next
      end = end.next;
      //increment i by 1
      i++;
    }
    if (!firstPass && reverse) {
      preStart.next = end;
    }
    if (!firstPass) {
      preStart = end;
    }
    end = end.next;
    //if reverse is true
    if (reverse) {
      //while current doesn't equal the end
      while (current !== end) {
        //next = current.next
        next = current.next;
        //current.next = previous
        current.next = previous;
        //previous = current
        previous = current;
        //current = next
        current = next;
      }
      //if it's the first pass
      if (firstPass) {
        //set the head to previous
        head = previous;
        //flip firstPass to false
        firstPass = false;
      }
      //set start.next to current;
      start.next = current;
    //otherwise, we're not reversing this section
    } else {
      //set start to end
      start = end;
      //set current to end
      current = end;
      //set previous to current
      previous = current;
    }
    //flip reverse
    reverse = !reverse;
  }
  //return head
  return head;
};



head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`)

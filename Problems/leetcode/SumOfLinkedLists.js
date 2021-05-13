// You’re given two Linked Lists of potentially unequal length. Each Linked List
//   represents a non-negative integer, where each node in the Linked List is a
//   digit of that integer, and the first node in each Linked List always
//   represents the least significant digit of the integer. Write a function,
//   sumOfLinkedLists, that returns the head of a new Linked List that represents
//   the sum of the integers represented by the two input Linked Lists.
//   Each LinkedList node has an integer value as well as a next node pointing to the
//   next node in the list or to None / null if it’s the tail of the list. The value
//   of each LinkedList node is always in the range of 0 - 9.

//   Note: your function must create and return a new Linked List, and you’re not
//   allowed to modify either of the input Linked Lists.

//   Sample Input:
//   linkedListOne = 2 -> 4 -> 7 -> 1
//   linkedListTwo = 9 -> 4 -> 5
//   Sample Output:
//   1 -> 9 -> 2 -> 2
//   linkedListOne represents 1742
//   linkedListTwo represents 549
//   1742 + 549 = 2291

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const sumLinkedLists = (ll1, ll2) => {
  //declare variables: num1(''), num2(''), current1(ll1), current2(ll2)
  //while current1 doesn't equal null
    //add the current value converted to a string to my num1 string
    //current becomes current1.next
  //while current2 doesn't equal null
    //add the current value converted to a string to my num2 string
    //current becomes current2.next
  //num1 becomes the reverse of num1
  //num2 becomes the reverse of num2
  //convert both to numbers, and add them together, saving them to a sum variable
  //convert that number back into a string
  //create a new linked list, starting with the value of my first number (converted back into a number)
  //iterate through my string, starting at the first index
    //assign a new node to my new linked list, with the value being the converted number of the current index
  //return the linked list


  //create summed linked list
  let summedList;
  //declare variables: current1(ll1), current2(ll2), remainder(0), sum(0)
  let current,
    remainder = 0,
    sum = 0,
    firstPass = true;;
  //while current1 doesn't equal null, or current2 doesn't equal null
  while (!(ll1 === null && ll2 === null)) {
    
    // current = summedList;
    if (ll1 === null) {
      value1 = 0;
      value2 = ll2.value;
    } else if (ll2 === null) {
      value2 = 0;
      value1 = ll1.value;
    } else {
      value1 = ll1.value;
      value2 = ll2.value;
    }
    //add those two values up, save to sum
    sum = value1 + value2 + remainder;
    //if sum is greater than 9
    if (sum > 9) {
      //sum is going to be sum - 10
      sum = sum - 10;
      //remainder is going to be 1
      remainder = 1;
    //else
    } else {
      //remainder is 0
      remainder = 0;
    }
    //the current value in the new linked list is going to be sum
    if (firstPass) {
      summedList = new LinkedList(sum)
      firstPass = false;
      current = summedList;
    } else {
      current.next = new LinkedList(sum);
      current = current.next;
    }
    
    console.log(current);
    //go to the next node in the new linkedList
    // current = current.next;
    //go to the next nodes in the input lists
    if (ll1 === null) {
      ll2 = ll2.next;
    } else if (ll2 === null) {
      ll1 = ll1.next;
    } else {
      ll1 = ll1.next;
      ll2 = ll2.next;
    }
  }
  //return summedList
  return summedList
}

const list1 = new LinkedList(2);
list1.next = new LinkedList(4)
list1.next.next = new LinkedList(7)
list1.next.next.next = new LinkedList(1)

const list2 = new LinkedList(9)
list2.next = new LinkedList(4)
list2.next.next = new LinkedList(5)

console.log(sumLinkedLists(list1, list2));
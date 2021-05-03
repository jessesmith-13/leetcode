// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

//I - Two non empty linked listss
//O - a new linked list representing the sum of the two inputs
//C - Listed above
//E - n/a

var addTwoNumbers = function(l1, l2) {
  const l3 = [];
  let remainder = 0;
  let longer;
  if (l1.length >= l2.length) {
    longer = l1
  } else {
    longer = l2;
  }

  for (let i = 0; i < longer.length; i++) {
    if (l2[i] === undefined) {
      l2[i] = 0;
    }
    if (l1[i] + l2[i] + remainder < 10) {
      l3[i] = l1[i] + l2[i] + remainder;
      remainder = 0;
    } else {
      l3[i] = (l2[i] + l1[i] + remainder) - 10;
      remainder = 1;
    }

    console.log(i, l3);
    console.log('---------');
  }
  
  if (remainder === 1) {
    l3.push(remainder);
  }
  return l3;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))

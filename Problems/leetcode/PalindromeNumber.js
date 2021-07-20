// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

var isPalindrome = function(x) {
  x = x.toString();
  if (x[0] === '-') {
    return false;
  }
  let pointer1 = 0,
    pointer2 = x.length - 1;
  while (pointer1 < pointer2) {
    if (x[pointer1] !== x[pointer2]) {
      return false;
    }
    pointer1++;
    pointer2--;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
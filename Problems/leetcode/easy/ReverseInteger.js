// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the 
// value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

//-2147483648, 2147483647

var reverse = function(x) {
  x = x.toString();
  let isNegative = false,
  reverse = '';
  if (x[0] === '-') {
    isNegative = true;
    x = x.slice(1);
  }
  for (let i = x.length - 1; i >= 0; i--) {
    reverse += x[i];
  }
  if (isNegative) {
    reverse = -(Number(reverse));
  } else {
    reverse = Number(reverse);
  }
  if (reverse > (2 ** 31 - 1) || reverse < ((-2) ** 31)) {
    return 0;
  }
  return reverse;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
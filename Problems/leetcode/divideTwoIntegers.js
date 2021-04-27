// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// Return the quotient after dividing dividend by divisor.
// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. 
// For this problem, assume that your function returns 231 − 1 when the division result overflows.

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.

// Example 3:
// Input: dividend = 0, divisor = 1
// Output: 0
// Example 4:

// Input: dividend = 1, divisor = 1
// Output: 1


var divide = function(dividend, divisor) {
 if (dividend === 0) {
    return 0;
  }
    //declare variables: isNegative (false), count (0)
  let isNegative = false,
    count = 0;

  //if either the dividend or the divisor but not both is negative
  if ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) {
    //flip isNegative to true
    isNegative = true;
  }
  //reassign dividend and divsor to their absolute values
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // if (divisor === dividend) {
  //     if (isNegative) {
  //         return -1;
  //     } else {
  //         return 1;
  //     } 
  // }
  //while dividend is greater than 0
  while (dividend >= divisor) {
    //subtract the divisor from it
    dividend -= divisor;
    //increment the count by 1
    count++;
  }

  if (isNegative) {
    count = -count;
  }
  //if isNegative is true
  if (count > Math.pow(2, 31) - 1 || count < -Math.pow(2, 31)) {
    //return the negative count
    return count - 1;
  }
  return count;
};

console.log(divide(2147483647, 1));
console.log(Math.pow(2, 31) - 1);

//INCOMPLETE
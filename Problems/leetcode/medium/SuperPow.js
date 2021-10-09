// Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

// Example 1:
// Input: a = 2, b = [3]
// Output: 8

// Example 2:
// Input: a = 2, b = [1,0]
// Output: 1024

// Example 3:
// Input: a = 1, b = [4,3,3,8,5,2]
// Output: 1

// Example 4:
// Input: a = 2147483647, b = [2,0,0]
// Output: 1198

const superPow = function(a, b) {
  // return (a ** Number(b.filter(num => num.toString()).join(''))) % 1337;
  // return b.filter(num => num.toString()).join('');
  return ((2147483647 % 1337) * (200 % 1337)) % 1337;
};

console.log(superPow(2, [3]));
console.log(superPow(2, [1,0]));
console.log(superPow(1, [4,3,3,8,5,2]));
console.log(superPow(2147483647, [2,0,0]));


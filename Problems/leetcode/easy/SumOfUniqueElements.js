// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

// Example 1:
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.

// Example 3:
// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

var sumOfUnique = function(nums) {
  let sum = 0;
  let numCount = new Map();
  nums.forEach(num => {
    typeof numCount.get(num) === 'undefined' ? numCount.set(num, 1) : numCount.set(num, numCount.get(num) + 1)
  })
  numCount.forEach((count, num) => {
    if (count === 1) {
      sum += num;
    }
  });
  return sum;
};

console.log(sumOfUnique([1,2,3,2]));
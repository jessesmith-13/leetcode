// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

var canPartition = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
      for (let j = i+1; j <= nums.length - 1; j++) {
        let sum1 = getSum(nums.slice(i, j));
        let sum2 = getSum(nums.slice(j).concat(nums.slice(0, i)));
        if (sum1 === sum2) {
          return true;
        }
      }
    }
    return false;
};

const getSum = (arr) => {
  return arr.reduce((a, c) => {
    return a + c;
  })
};

const example = [1,2,3,5];
console.log(canPartition(example))

// console.log([1, 2, 3].slice(0, 0))

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:
// Input: nums = [1]
// Output: [[1]]

var permute = function(nums) {
  const combinations = [];
  const go = (current, nums) => {
    if (nums.length <= 0) {
      combinations.push(current);
    }
    for (let i = 0; i < nums.length; i++) {
      current.push(nums[i]);
      go(current.slice(), nums.slice(0, i).concat(nums.slice(i+1)));
      current.pop();
    }
  }
  go([], nums)
  return combinations;
};

console.log(permute([1, 2, 3]));
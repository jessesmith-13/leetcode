// Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
// and each integer appears once or twice, return an array of all the integers that appears twice.

 

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1,2]
// Output: [1]

// Example 3:
// Input: nums = [1]
// Output: []

var findDuplicates = function(nums) {
  //define variables: doubles ([])
  const doubles = [];
  //sort the array
  nums.sort((a, b) => a - b);
  //iterate through nums
  for (let i = 0; i < nums.length; i++) {
    //if the current num is the same as the next one
    if (nums[i] === nums[i+1]) {
      //push that num into doubles
      doubles.push(nums[i]);
      //increase i by 1
      i++;
    }
  }
  //return doubles
  return doubles;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1])); //[2, 3]
console.log(findDuplicates([1,1,2])); //[1]
console.log(findDuplicates([1])); //[]
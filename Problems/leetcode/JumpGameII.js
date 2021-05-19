//INCOMPLETE!!!!

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

 

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [2,3,0,1,4]
// Output: 2

var jump = function(nums) {
  if (nums.length === 1 && nums[0] === 0) {
    return 0;
  }
  //declare variables: start (0), end(0), jumps(0), i (0)
  let start = 0,
    end = 0,
    jumps = 0;
  //while end is less than or equal to the end of the array
  while (end <= nums.length - 1) {
    //declare variable: max(-1)
    let max = -1;
    //end becomes the current end plus the current number
    end += nums[end];
    //while start is less than or equal to end
    if (end >= nums.length - 1) {
      jumps++;
      break;
    }
    while (start <= end) {
      //if start is greater than max
      if (nums[start] > max) {
        //start becomes max
        max = nums[start];
      }
      //start++
      start++;
    }
    //end and start become the index that max is
    end = nums.indexOf(max), start = nums.indexOf(max);
    //jump increases by 1
    jumps++;
  }
  return jumps
};

console.log(jump([2,3,1,1,4]))
console.log(jump([2,3,0,1,4]))
console.log(jump([0]))
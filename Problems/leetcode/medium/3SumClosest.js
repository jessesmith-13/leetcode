//INCOMPLETE

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// [-4, -1, 1, 2]



// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0


var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a- b);
  let closestSum,
    start = 0,
    end = nums.length - 1;
    
  while (start < end - 1) {
    let i = start + 1,
      currentSum;
    while (i < end) {
      currentSum = nums[start] + nums[end] + nums[i];
      console.log('current sum', currentSum);
      console.log('digits', nums[start], nums[i], nums[end]);
      console.log('closest sum', closestSum);
      console.log('-------------------------------------')
      // console.log(currentSum);
      
      if (typeof closestSum === 'undefined') {
        closestSum = currentSum;
      } else {
        if (Math.abs(target - currentSum) <= Math.abs(target - closestSum)) {
          closestSum = currentSum;
        }
      }

      if (i === start + 1 && currentSum > target) {
        end--;
        i = start + 1;
        continue;
      } else if (i === end - 1 && currentSum < target) {
        start++;
        i = start + 1;
        continue;
      }
      i++;
    }

    if (closestSum < target) {
      start++;
    } else if (closestSum > target) {
      end--;
    } else {
      return target;
    }
  }
  
  return closestSum;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(threeSumClosest([0,0,0], 1));
// console.log(threeSumClosest([1,2,4,8,16,32,64,128],82)); //81
console.log(threeSumClosest([-4,-1,1,2],1)); //-1
//[2, 16, 64]




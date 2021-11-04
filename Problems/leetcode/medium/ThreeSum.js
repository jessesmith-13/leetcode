// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
  let output = [];
  nums = nums.sort((a,b)=>a-b);
  let left = 0,
    right = nums.length - 1,
    mid,
    previousZeroes = [],
    stringifiedNums;
  while (left < right - 1) {
    mid = left + 1;
    let sum;
    while (mid < right) {
      sum = getSum(nums[left], nums[mid], nums[right]);
      stringifiedNums = nums[left].toString() + nums[mid].toString() +nums[right].toString()
      if (sum === 0 && !previousZeroes.includes(stringifiedNums)) {
        previousZeroes.push(stringifiedNums);
        output.push([nums[left], nums[mid], nums[right]]);
      }
      mid++;
    }
    if (sum >= 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
  return output;
};

var getSum = (left, mid, right) => {
  return left + right + mid;
}

//[-4,-1,-1,0,1,2]
console.log(threeSum([-1,0,1,2,-1,-4])); //[[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,0,0,0,0,0]));
// Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

// Example 1:
// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.

// Example 2:
// Input: [8, 2, 6, 5], target=50 
// Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5] 
// Explanation: There are seven contiguous subarrays whose product is less than the target.

const find_subarrays = function(arr, target) {
  //define variables: result ([]), right
  let result = [],
    right;
  //iterate through arr
  for (let i = 0; i < arr.length; i++) {
    //if the current number is less than the target
    if (arr[i] < target) {
      //reassign right to be the current index + 1
      right = i + 1;
      //push that subarray in
      result.push([arr[i]])
      //if the current number plus the right number is less than the target
      if (arr[i] * arr[right] < target) {
        //push the pair into the result array
        result.push([arr[i], arr[right]]);
      }
    }
  }
  //return result
  return result;
};

console.log(find_subarrays([2, 5, 3, 10], 30));
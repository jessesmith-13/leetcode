// Given an array of unsorted numbers and a target number, find a triplet in the array 
// whose sum is as close to the target number as possible, return the sum of the triplet. 
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// Example 1:
// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

// Example 2:
// Input: [-3, -1, 1, 2], target=1
// Output: 0
// Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

// Example 3:
// Input: [1, 0, 1, 1], target=100
// Output: 3
// Explanation: The triplet [1, 1, 1] has the closest sum to the target.

const triplet_sum_close_to_target = function(arr, target_sum) {
  //define variables: closestSum
  let closestSum;
  //sort the arr
  arr.sort((a, b) => a - b);
  //iterate through the arr
  for (let i = 0; i < arr.length; i++) {
    //reassign closestSum equal to findSum()
    closestSum = findSum(arr, i + 1, i, closestSum, target_sum);
  }
  //return closestSum;
  return closestSum;
};

const findSum = (arr, left, i, closestSum, target) => {
  //define variables: right (arr.length - 1)
  let right = arr.length - 1;
  //while left < right
  while (left < right) {
    //define what the current sum is
    const currentSum = arr[i] + arr[left] + arr[right];
    //if the closestSum is undefined 
    if (closestSum === undefined) {
      //assign it to the currentSum
      closestSum = currentSum;
      //otherwise if the current sum - the target equals 0
    } else if (currentSum - target === 0) {
      //reassign closestSum to that
      closestSum = currentSum;
      //break the loop
      break;
    //otherwise if the current sum - the target is the same as the absolute value of closestSum - target
    } else if (Math.abs(currentSum - target) === Math.abs(closestSum - target)) {
      //reassign the closestSum the min of the two sums
      closestSum = Math.min(closestSum, currentSum);
    //otherwise if the absolute value of the current sum - target is smaller than the absolute value of the closestSum - target
    } else if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
      //reassign the closestSum to the currentSum
      closestSum = currentSum;
    }
    //increment the left by 1
    left++;
  }
  //return closestSum
  return closestSum;
}

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
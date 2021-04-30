// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Example 1:
// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

// Example 2:
// Input: [2, 5, 9, 11], target=11
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

const pair_with_targetsum = function(arr, target_sum) {
  let startingIndex = 0,
    endingIndex = arr.length - 1;
    while (startingIndex < endingIndex) {
      if (arr[startingIndex] + arr[endingIndex] > target_sum) {
        endingIndex--;
      } else if (arr[startingIndex] + arr[endingIndex] < target_sum) {
        startingIndex++;
      } else {
        return [startingIndex, endingIndex];
      }
    }
  return [-1, -1];
}

console.log(pair_with_targetsum([2, 5, 9, 11], 11));
console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
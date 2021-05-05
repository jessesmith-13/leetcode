//INCOMPLETE


// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target 
// where i, j, and k are three different indices. 
// Write a function to return the count of such triplets.

// Example 1:
// Input: [-1, 0, 2, 3], target=3 
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

// Example 2:
// Input: [-1, 4, 2, 1, 3], target=5 
// Output: 4
// Explanation: There are four triplets whose sum is less than the target: 
// [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

const triplet_with_smaller_sum = function(arr, target) {
  //sort the array
  arr.sort((a, b) => a - b);
  //define variables: tripletsCount (0), left, right
  let tripletsCount = 0,
    left,
    right,
    currentSum;
  //iterate through the arr, going up until the end - 2
  for (let i = 0; i < arr.length - 2; i++) {
    //left is equal to i + 1
    left = i + 1;
    //right is equal to the end of the arr
    right = arr.length - 1;
    //while left is less than right
    while (left < right) {
      //define the currentSum
      currentSum = arr[i] + arr[left] + arr[right];
      //if currentSum is less than the target
      if (currentSum < target) {
        //increase tripletsCount by the space between right and left, since all of those triplets will also be valid
        tripletsCount += right - left;
        //increment the left by 1
        left++;
        //otherwise if the currentSum is greater than or equal to the target
      } else {
        //decrement the right by 1
        right--;
      }
    }
  }
  //return tripletsCount
  return tripletsCount;
};


console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
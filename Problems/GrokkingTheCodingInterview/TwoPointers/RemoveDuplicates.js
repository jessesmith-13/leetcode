// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

// Example 1:
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

// Example 2:
// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].

const remove_duplicates = function(arr) {
  //define my variables: i (1), nextNonDupe (1)
  let i = 1, 
    nextNonDupe = 1;
  //while i is less than the arr length
  while (i < arr.length) {
    //if the array indexed at the nextNoneDupe - 1 doesn't equal the array indexed at i
    if (arr[nextNonDupe - 1] !== arr[i]) {
      //the array at the nextNoneDupe becomes the array at i
      arr[nextNonDupe] = arr[i];
      //increment the nextNonDupe by 1
      nextNonDupe++;
    }
    //increment i by 1
    i++;
  }
  //return nextNonDupe for the length of the subarr with unique characters
  return nextNonDupe;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
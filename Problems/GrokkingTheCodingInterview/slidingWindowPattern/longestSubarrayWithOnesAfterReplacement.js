// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

// Example 1:
// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

// Example 2:
// Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
// Output: 9
// Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

const length_of_longest_substring = function(arr, k) {
  //declare variables, windowStart (0), longestLength (0), longestCurrentLength (0), originalKVal (k)
  let windowStart = 0,
    longestLength = 0,
    longestCurrentLength = 0,
    originalKValue = k;
  //iterate through arr
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //if the current num is 1
    if (arr[windowEnd] === 1) {
      //increase the longestCurrentLength by 1
      longestCurrentLength++;
    //otherwise if the current number isn't 1 and k is greater than 0
    } else if (arr[windowEnd] !== 1 && k > 0) {
      //increase the longestCurrentLength by 1
      longestCurrentLength++;
      //decrement k by 1
      k--;
    //otherwise
    } else {
      //set the longestLength equal to either the longestLength or the longestCurrentLength
      longestLength = Math.max(longestLength, longestCurrentLength);
      //increment windowStart by 1
      windowStart++;
      //set windowEnd to windowStart - 1
      windowEnd = windowStart - 1;
      //set the longestCurrentLength back to 0
      longestCurrentLength = 0;
      //set k to it's original value
      k = originalKValue;
    }
  }
  longestLength = Math.max(longestLength, longestCurrentLength);
  //return longestLength
  return longestLength;
};

console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
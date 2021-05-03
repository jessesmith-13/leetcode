// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

// Example 1:
// Input: String="aabccbb", k=2
// Output: 5
// Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

// Example 2:
// Input: String="abbcb", k=1
// Output: 4
// Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

// Example 3:
// Input: String="abccde", k=1
// Output: 3
// Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

const length_of_longest_substring = function(str, k) {
  //declare variables, windowStart (0), longestLength (0), longestSubstr([]), originalKValue(k)
  let windowStart = 0,
    longestLength = 0,
    longestSubstr = [],
    originalKValue = k;
  //iterate through the str
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //if longestSubstr does not include the current letter and the length is 0 or if the longestSubstr at index 0 does include the current character
    if ((longestSubstr.length === 0) || longestSubstr[0] === str[windowEnd]) {
      //push letter into longestSubstr
      longestSubstr.push(str[windowEnd]);
    //otherwise if the longestSubstr does not include the current letter and k is greater than 0
    } else if (str[windowEnd] !== longestSubstr[0] && k > 0) {
      //push letter into longestSubstr
      longestSubstr.push(str[windowEnd])
      //decrement k by 1
      k--;
      //otherwise
    } else {
      //set longestLength to either longestLength or the length of current subArray
      longestLength = Math.max(longestLength, longestSubstr.length);
      //set k back to originalKValue
      k = originalKValue;
      //increment windowStart by 1
      windowStart++;
      //set windowEnd equal to windowStart - 1
      windowEnd = windowStart - 1;
      //set the longestSubstr to empty
      longestSubstr = [];
    }
  }
  longestLength = Math.max(longestLength, longestSubstr.length);
  //return longestLength
  return longestLength;
};

console.log(length_of_longest_substring('abccde', 1));
// Given a string, find the length of the longest substring, which has no repeating characters.

// Example 1:
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".

// Example 2:
// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".

// Example 3:
// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

const non_repeat_substring = function(str) {
  //declare my variables, the window start (0), the uniqueChars ([]), the longestLength (0)
  let windowStart = 0,
    uniqueChars = [],
    longestLength = 0;
  //iterate through my string
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //if unique chars array doesn't contain the current letter
    if (!uniqueChars.includes(str[windowEnd])) {
      //push the current letter in!
      uniqueChars.push(str[windowEnd]);
    //otherwise
    } else {
      //set the longest length equal to either the longest length or the length of the unique chars array
      longestLength = Math.max(longestLength, uniqueChars.length);
      //increase the window start by 1
      windowStart++;
      //set the window end to the window start - 1
      windowEnd = windowStart - 1;
      //set the unique chars array to empty!
      uniqueChars = [];
    }
  }
  //return longestLength
  return longestLength
};

console.log(non_repeat_substring('abccde'))

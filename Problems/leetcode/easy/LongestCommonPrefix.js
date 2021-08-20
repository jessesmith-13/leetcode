// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  strs.sort((a, b) => a.length - b.length);
  let i = 0,
  shortestWord = strs[0],
  isCommon = true,
  longestCommonPrefix = '';
  while (i < shortestWord.length) {
    if (isCommon) {
      for (let j = 1; j < strs.length; j++) {
        let currentWord = strs[j];
        if (currentWord[i] !== shortestWord[i]) {
          isCommon = false;
          break; 
        }
      }
    }
    if (!isCommon) {
      break;
    }
    longestCommonPrefix += shortestWord[i];
    i++;
  }
  return longestCommonPrefix;
};


console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
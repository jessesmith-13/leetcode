// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

var longestPalindrome = function(s) {
  let longest = s[0],
    start = 0,
    end;
  while (start < s.length - 1) {
    end = s.length - 1;
    while (end > start) {
      let currentSub = s.slice(start, end + 1);
      if (isPalindrome(currentSub)) {
        if (currentSub.length > longest.length) {
          longest = currentSub;
        }
      }
      end--;
    }
    start++;
  }
  return longest;
};

var isPalindrome = (subStr) => {
  return subStr === subStr.split('').reverse().join('');
}

console.log(longestPalindrome('babadab'))


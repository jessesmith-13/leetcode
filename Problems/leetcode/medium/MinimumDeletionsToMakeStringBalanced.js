// You are given a string s consisting only of characters 'a' and 'b'​​​​.
// You can delete any number of characters in s to make s balanced. s is balanced
// if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.
// Return the minimum number of deletions needed to make s balanced.

// Example 1:
// Input: s = "aababbab"
// Output: 2
// Explanation: You can either:
// Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
// Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").

// Example 2:
// Input: s = "bbaaaaabb"
// Output: 2
// Explanation: The only solution is to delete the first two characters.

var minimumDeletions = function(s) {
  let deletions = 0,
    start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] === 'b' && s.slice(start + 1, end + 1).includes('a')) {
      deletions++;
    }
    start++;
    if (s[end] === 'a' && s.slice(start, end).includes('b')) {
      deletions++;
    }
    end--;
    console.log(deletions);
  }
  return deletions;
};

//if there are more b's than a's, then delete the a, otherwise
// console.log(minimumDeletions('aa|babba|b'));
console.log(minimumDeletions("bbaaaaabb"));
console.log(minimumDeletions("baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb"));
//"baaba|bbaabbaaabaabbabbbabaaaaaabaabababaaa|babbb"
//15
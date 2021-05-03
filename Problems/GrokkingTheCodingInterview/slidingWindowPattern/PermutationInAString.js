// Given a string and a pattern, find out if the string contains any permutation of the pattern.
// Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

// abc
// acb
// bac
// bca
// cab
// cba
// If a string has ‘n’ distinct characters, it will have n!n! permutations.

// Example 1:
// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

// Example 2:
// Input: String="odicf", Pattern="dc"
// Output: false
// Explanation: No permutation of the pattern is present in the given string as a substring.

// Example 3:
// Input: String="bcdxabcdy", Pattern="bcdyabcdx"
// Output: true
// Explanation: Both the string and the pattern are a permutation of each other.

// Example 4:
// Input: String="aaacb", Pattern="abc"
// Output: true
// Explanation: The string contains "acb" which is a permutation of the given pattern.

const find_permutation = function(str, pattern) {
  //define a hash map, setting it to an empty object
  let hashMap = {};
  //define other variables: windowStart (0), hasPermutation (false), permutationCount (0)
  let windowStart = 0,
    permutationCount = 0;
  //iterate through the pattern
  for (let i = 0; i < pattern.length; i++) {
    //if the hash map at the current letter is undefined
    if (hashMap[pattern[i]] === undefined) {
      //set it equal to 0
      hashMap[pattern[i]] = 0;
    }
    //increase the hash map at the current character by 1
    hashMap[pattern[i]]++;
  }
  //iterate through the string
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //define the right character
    const rightChar = str[windowEnd];
    //if the right character is found within the hash map
    if (rightChar in hashMap) {
      //decrement that char by one
      hashMap[rightChar]--;
      //if that character is 0 in the hash map
      if (hashMap[rightChar] === 0) {
        //increase permutationCount by 1
        permutationCount++;
      }
    }
    //if permutationCount is equal to the amount of keys within hashMap
    if (permutationCount === Object.keys(hashMap).length) {
      //return true
      return true;
    }
    //if the window end minus the window start + 1 is greater than or equal to the length of the pattern
    if (windowEnd - windowStart + 1 >= pattern.length) {
      //define the left char
      const leftChar = str[windowStart];
      //if the left character in the hash map is 0
      if (hashMap[leftChar] === 0) {
        //decrease permutationCount by 1
        permutationCount--;
      }
      //increase the windowStart by 1
      windowStart++;
    }
  }
  //return hasPermutation
  return false;
};


console.log(find_permutation('aaacb', 'abc'));
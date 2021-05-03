// Given a string and a pattern, find all anagrams of the pattern in the given string.
// Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:
// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

// Example 1:
// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

// Example 2:
// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

const find_string_anagrams = function(str, pattern) {
  //define variables: resultIndeces ([]), windowStart (0), hashMap ({}), matchCount (0)
  let resultIndices = [],
    windowStart = 0,
    hashMap = {},
    matchCount = 0;
  //iterate through the pattern
  for (let i = 0; i < pattern.length; i++) {
    //if the currerent char is undefined
    if (hashMap[pattern[i]] === undefined) {
      //set it to 0
      hashMap[pattern[i]] = 0
    }
    //increment the current char by one
    hashMap[pattern[i]]++;
  }
  //iterate through the string
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //define the rightChar
    const rightChar = str[windowEnd];
    //if the rightChar can be found within the hashMap
    if (rightChar in hashMap) {
      //decrement the char by 1
      hashMap[rightChar]--;
      //if the char is 0
      if (hashMap[rightChar] === 0) {
        //increment the matchCount by 1!
        matchCount++;
      }
    }
    
    //if the matchCount is equal to the number of keys within the hashMap
    if (matchCount === Object.keys(hashMap).length) {
      //push the windowStart into resultIndices
      resultIndices.push(windowStart);
    }
    //if the windowEnd - windowStart + 1 >= the pattern's length
    if (windowEnd + 1 >= pattern.length) {
      //define the left char
      const leftChar = str[windowStart];
      //if the left char within hashMap is 0
      if (hashMap[leftChar] === 0) {
        //increase the char by 1
        hashMap[leftChar]++;
        //decrease the matchCount by 1
        matchCount--;
      }
      //increase windowStart by 1
      windowStart++;
    }
  }
  return resultIndices;
};

console.log(find_string_anagrams('ppqp', 'pq'))
console.log(find_string_anagrams('abbcabc', 'abc'))

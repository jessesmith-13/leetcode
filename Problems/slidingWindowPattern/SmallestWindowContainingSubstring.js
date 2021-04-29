//INCOMPLETE

// Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

// Example 1:
// Input: String="aabdec", Pattern="abc"
// Output: "abdec"
// Explanation: The smallest substring having all characters of the pattern is "abdec"

// Example 2:
// Input: String="abdbca", Pattern="abc"
// Output: "bca"
// Explanation: The smallest substring having all characters of the pattern is "bca".

// Example 3:
// Input: String="adcad", Pattern="abc"
// Output: ""
// Explanation: No substring in the given string has all characters of the pattern.

const find_substring = function(str, pattern) {
  //define variables: smallestSubstr (''), windowStart (0), hashMap ({}), matchCount (0), currentSubstr ('')
  let smallestSubstr = '',
    windowStart = 0,
    hashMap = {},
    matchCount = '';
  //iterate through the pattern
  for (let i = 0; i < pattern.length; i++) {
    //if hashMap at character is undefined
    if (hashMap[pattern[i]] === undefined) {
      //set it to 0
      hashMap[pattern[i]] = 0;
    }
    //increment character by 1
    hashMap[pattern[i]]++;
  }
  //iterate through str
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //define rightChar
    const rightChar = str[windowEnd];
    //define leftChar
    const leftChar = str[windowStart];
    //if hashMap includes rightChar
    if (rightChar in hashMap && hashMap[rightChar] !== 0) {
      //decrement rightChar by 1
      hashMap[rightChar]--;
      //if rightChar equals 0
      if (hashMap[rightChar] === 0) {
        //increase matchCount by 1
        matchCount++;
      }
    }
    //if matchCount equals the amount of keys within hashMap
    if (matchCount === Object.keys(hashMap).length) {
      //if smallestSubstr has a length of 0 or if windowEnd minus windowStart plus 1 is less than the length of smallestSubstr
      if (smallestSubstr.length === 0 || windowEnd - windowStart + 1 < smallestSubstr.length) {
        //the current substring becomes the smallestSubstr
        smallestSubstr = str.substr(windowStart, windowEnd + 1)
      }
      //increment the windowStart by 1
      windowStart++;
      //add one to leftChar within hashMap
      hashMap[leftChar]++;
      //subtract one from matchCount
      matchCount--;
    }
  }
  //return smallestSubstr
  return smallestSubstr;
}

console.log(find_substring('aabdec', 'abc'));

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

// Example 1:

// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
  let vowels = 'aeiou';
  let vowelsInS = s.split('').filter(letter => vowels.includes(letter));
  let vowelCount = 0;
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      let replacement = vowelsInS.pop();
      s[i] = replacement;
      vowelCount++;
    }
  }
  return s.join('');
};

console.log(reverseVowels('hello'));
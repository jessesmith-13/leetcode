// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving 
 //the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function(s, t) {
  //declare uniques1, uniques2
  let uniques1 = [],
    uniques2 = [];
  //iterate over s
  for (let i = 0; i < s.length; i++) {
    //if it isn't found within uniques,
    if (!uniques1.includes(s[i])) {
      //push it in
      uniques1.push(s[i])
      //otherwise it is
    } else {
      //in which case we push in the index where we can find it
      uniques1.push(uniques1.indexOf(s[i]));
    }

    if (!uniques2.includes(t[i])) {
      //push it in
      uniques2.push(t[i])
    //otherwise 
    } else {
      //we push in the index where we can find it
      uniques2.push(uniques2.indexOf(t[i]));
    }
    //if either uniques1 or uniques2 at that index is a number and not both of them
    if ((typeof uniques1[i] === 'number' || typeof uniques2[i] === 'number') && !(typeof uniques1[i] === 'number' && typeof uniques2[i] === 'number')) {
      //return false
      return false;
    }
    //if the typeof the uniques 1 is a number and uniques 2 is a number and they're not the same
    if (typeof uniques1[i] === 'number' && typeof uniques2[i] === 'number' && uniques1[i] !== uniques2[i]) {
      //return false
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
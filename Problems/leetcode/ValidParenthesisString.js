// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "(*)"
// Output: true

// Example 3:
// Input: s = "(*))"
// Output: true

var checkValidString = function(s) {
  //declare variable: count (0), hashMap({})
  let count = 0,
    hashMap = {};
  hashMap['('] = 0, hashMap[')'] = 0;
  //iterate through s
  for (let char of s) {
    //if the count falls belows 0
    if (count < 0) {
      //return false
      return false;
    }
    hashMap[char]++;
    //if the current char is a left paren
    if (char === '(') {
      //increase the count by 1
      count++;
      //continue
      continue;
    }
    //if the current char is a right paren
    if (char === ')') {
      //decrease the count by 1
      count--;
      //continue
      continue;
    }
    //if the current char is an asterisk and the right is greater than the left
    if (char === '*' && hashMap[')'] > hashMap['(']) {
      //decrease the count by 1
      count--;
      //continue
      continue;
    }
    //if the current char is an asterisk and the left is greater than the right
    if (char === '*' && hashMap['('] > hashMap[')']) {
      //increase the count by 1
      count++;
      //continue
      continue;
    }
  }
  //return whether the count is 0
  return count === 0;
};

console.log(checkValidString("(*))")); //true
console.log(checkValidString("(*)")); //true
// console.log(checkValidString('()'));
// console.log(checkValidString('(*)'));
// console.log(checkValidString('((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()'));
// console.log(checkValidString("(((((*)))**"));
// console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"));

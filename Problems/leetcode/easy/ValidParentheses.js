// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

var isValidParantheses = function(s) {
    let stack = [],
    open = '([{',
    closers = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
    for (let i = 0; i < s.length; i++) {
      if (open.includes(s[i])) {
        stack.push(s[i])
      } else {
        if (closers[s[i]] !== stack[stack.length - 1]) {
          return false;
        } else {
          stack.pop();
        }
      }
    }
    return true;
};

console.log(isValidParantheses("()[]{}"))
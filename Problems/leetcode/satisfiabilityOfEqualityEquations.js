// Given an array equations of strings that represent relationships between variables, each string equations[i] 
// has length 4 and takes one of two different forms: "a==b" or "a!=b".  Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.
// Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.

 

// Example 1:
// Input: ["a==b","b!=a"]
// Output: false
// Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.

// Example 2:
// Input: ["b==a","a==b"]
// Output: true
// Explanation: We could assign a = 1 and b = 1 to satisfy both equations.

// Example 3:
// Input: ["a==b","b==c","a==c"]
// Output: true

// Example 4:
// Input: ["a==b","b!=c","c==a"]
// Output: false

// Example 5:
// Input: ["c==c","b==d","x!=z"]
// Output: true
var graph = (value) => {
  this.value = value;
  this.edge = null;
  return this;
}

var equationsPossible = function(equations) {
  const notEquals = equations.filter(equation => equation.includes('!'));
  const equals = equations.filter(equation => !equation.includes('!'));
  return true;
};

console.log(equationsPossible(["a==b","b!=a"]))
console.log(equationsPossible(["b==a","a==b"]))
console.log(equationsPossible(["a==b","b==c","a==c"]))
console.log(equationsPossible(["a==b","b!=c","c==a"]))
console.log(equationsPossible(["c==c","b==d","x!=z"]))

// A string s of lowercase English letters is given. We want to partition this string into as many parts 
// as possible so that each letter appears in at most one part, and return a list of integers representing 
// the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

//i: string of characters, lowercase
//o: array of integers
//c:
//e:

var partitionLabels = function(s) {
  //declare variables: furthestIndex, uniques([]), result([])
  let furthestIndex = -Infinity,
  uniques = [],
  result = [];
  //iterate through s
  for (let i = 0; i < s.length; i++) {
    
    if (uniques.includes(s[i]) && i !== furthestIndex) {
      continue;
    }
    //declare variable: end(the end of the array)
    let end = s.length - 1;
    //while end doesn't equal i
    while (s[end] !== s[i]) {
      //end--
      end--;
    }
    //if end is greater than furthestIndex
    if (end > furthestIndex) {
      //furthestIndex equals end
      furthestIndex = end;
    }
    //if i is greater than or equal to furthestIndex, 
    if (i >= furthestIndex && furthestIndex !== -Infinity) {
      //push i + 1 into the result array
      result.push(i + 1);
      //s is set to string.slice(current index + 1)
      s = s.slice(i + 1);
      //i is set back to 0
      i = -1;
      //set furthestIndex to -infinity
      furthestIndex = -Infinity;
    }
    uniques.push(s[i]);
  }
  return result;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("caedbdedda")); //[1, 9]

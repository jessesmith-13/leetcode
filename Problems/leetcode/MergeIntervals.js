// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
  //declare vars: result([]), start(-1)
  let result = [],
    min = -Infinity,
    max = Infinity;
  //iterate through intervals
  for (let i = 0; i < intervals.length; i++) {
    
  }
  //return result
  return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,4]]))
console.log(merge([[1,4],[0,1]]))

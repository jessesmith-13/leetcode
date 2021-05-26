// INCOMPLETE

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
  //sort the array, lowest to highest
  intervals.sort((a, b) => a[0] - b[0])

  //declare vars: result([]), start(-1)
  let result = [],
    min = Infinity,
    max = -Infinity,
    start = -1;
  //iterate through intervals
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      min = Math.min(min, intervals[i][0], intervals[i + 1][0])
      max = Math.max(max, intervals[i][1], intervals[i + 1][1])
      if (i === intervals.length - 2) {
        result.push([min, max])
      }
    } else {
      if (min === Infinity) {
        result.push(intervals[i])
      } else {
        result.push([min, max]);
        min = Infinity;
        max = -Infinity;
      }
      if (i === intervals.length - 2) {
        result.push(intervals[i + 1]);
      }
    }
  }
  //return result
  return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,4]])) //[0, 4]
console.log(merge([[1,4],[0,1]])) //[0, 4]
console.log(merge([[1,4],[0,0]])) //[0, 0], [1, 4]
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]])) //[1, 10]


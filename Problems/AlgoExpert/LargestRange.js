// Write a function that takes in an array of integers and return an array of length 2 representing the largest 
// range of integers contained in that array. The first number in the output array should be the first number 
// in the range, while the second number should be the last number in the range. A range of numbers is defined 
// as a set of numbers that come right after each other in the set of real integers. For instance, the output array 
// [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. Note that numbers don't need to be 
// sorted or adjacent in the input array in order to form a range. You can assume that there will only be one largest range.

//Example:
//input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
//output: [0, 7]

function largestRange(array) {
  if (array.length === 1) {
		return [array[0], array[0]]
	}
  array.sort((a, b) => a - b);
  let start = 0,
    end = 0,
    longestRange,
    longestDistance = -Infinity;
    while (end !== array.length - 1) {
      if (array[end + 1] !== array[end] + 1) {
        if (end === start) {
          end++;
          start++;
        } else if (calculateDistance(array[start], array[end]) > longestDistance) {
          longestRange = [array[start], array[end]]
          longestDistance = calculateDistance(array[start], array[end]);
        }
        end++;
        start = end;
      } else {
        end++;
      }
    }
  if (calculateDistance(array[start], array[end] > longestDistance)) {
    longestRange = [array[start], array[end]];
  }
  return longestRange;
}

const calculateDistance = (start, end) => {
  if (start < 0 && end < 0) {
    return end - start + 2;
  } else {
    return end - start + 1;
  }
}

// console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]))

console.log([[]].length);
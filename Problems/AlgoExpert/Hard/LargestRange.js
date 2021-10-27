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
  let hashMap = {},
  longestLength = -Infinity,
  longestRange = [];
  array.forEach(num => {
    if (!hashMap[num]) {
      hashMap[num] = true;
    }
  })
  for (let i = 0; i < array.length; i++) {
    let start = array[i],
    end = array[i];
    if (hashMap[array[i]]) {
      hashMap[array[i]] = false
      while (hashMap[start - 1]) {
        start--;
        hashMap[start] = false;
      }
      while (hashMap[end + 1]) {
        end++;
        hashMap[end] = false;
      }
      if (getLength(start,end) > longestLength) {
        longestLength = getLength(start,end);
        longestRange = [start,end];
      }
    }
  }
  return longestRange
}

function getLength(start, end) {
  return end - start;
}

console.log(largestRange([0, 1, 11, 3, 15, 5, 2, 4, 10, 7, 12, 6]))

// [0,1,2,3,4,5,6,7,10,11,12,15]
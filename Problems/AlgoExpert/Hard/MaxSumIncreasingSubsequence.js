// Write a function that takes in a non-empty array of integers and returns the greatest sum that can be generated from a 
// strictly-increasing subsequence in the array as well as an array of the numbers in that subsequence.Write

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
// For instanceof, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a 
// single number in an array and the array itself are both valid subsequences of the array.Write

// You can assume that there will only be one increasing subsequence with the greatest sum.

// Example:

// array = [10, 70, 20, 30, 50, 11, 30]
// output = [110, [10, 20, 30, 50]] The subsequences [10, 20, 30, 50] is strictly increasing and yields the greatest sum: 110


//solved using dynamic programming

function maxSumIncreasingSubsequence(array) {
  const sums = [array[0]];
  const summedNums = [[array[0]]];
  for (let i = 1; i < array.length; i++) {
    let j = 0;
    let curNum = array[i];
    let curSumNums = [];
    let sum;
    
    while (j < i) {
      sum = array[i];
      let prevNum = array[j];
      if ((prevNum < curNum && sums[j] + array[i] > sums[i])) {
        sums[i] = sums[j] + array[i];
        curSumNums.push(array[j]);
      }
      j++;
    }

    curSumNums.push(array[i]);
    summedNums.push(curSumNums);
  }
  console.log('sums',sums);
  let max = -Infinity;
  let maxSumNums;
  for (let i = 0; i < sums.length; i++) {
    if (sums[i] > max) {
      max = sums[i];
      maxSumNums = summedNums[i];
    }
  }
  return [max, maxSumNums];
}

console.log(maxSumIncreasingSubsequence([-1, 1]));
let array = [];
// Write a function that takes in an array of integers and returns the length of the longest peak in the array.

// A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak),
// at which point they become strictly decreasing. At least three integers are required to form a peak.

// For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly,
// the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.

function longestPeak(array) {
  let longestPeak = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let next = i + 1;
    if (array[next] > array[i]) {
      let prev = next;
      next++;
      while (array[next] > array[prev]) {
        next++;
        prev++;
        if (next >= array.length) {
          return longestPeak;
        }
      }
      if (array[next] === array[prev]) {
        i = prev;
        continue;
      }
      while (array[next] < array[prev]) {
        next++;
        prev++;
      }
      longestPeak = Math.max(longestPeak, prev + 1 - i);
      i = prev - 1;
    }
  }
  return longestPeak;
}

const array = [1, 2, 3, 3, 4, 0, 10];
console.log(longestPeak(array));
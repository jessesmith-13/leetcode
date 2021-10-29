// Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals
// in no particular ondragover.

// Each interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of the interval.

// Note that back-to-back intervals aren't considered to be overlapping. For example [1, 5] and [6, 7] aren't overlapping; however,
// [1, 6] and [6, 7] are indeed overlapping.

// Also note that the start of any particular interval will always be less than or equal to the end of that interval.

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (let i = 0; i < array.length; i++) {
    let currentRange = array[i];
    let nextRange = array[i + 1];
    let min,
      max;
    if (typeof nextRange === 'undefined') {
      merged.push(currentRange);
      return merged;
    }
    if (currentRange[1] >= nextRange[0]) {
      min = currentRange[0];
      max = currentRange[1];
      while (i < array.length && typeof array[i + 1] !== 'undefined' && max >= nextRange[0]) {
        max = Math.max(max, nextRange[1]);
        i++;
        currentRange = array[i];
        nextRange = array[i + 1];
      }
      merged.push([min, max]);
    } else {
      merged.push(currentRange);
    }
  }
  return merged;
}

const array = [
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10]
  ];
console.log(mergeOverlappingIntervals(array))
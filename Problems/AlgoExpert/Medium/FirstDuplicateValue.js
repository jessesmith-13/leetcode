// Given an array of intgers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer
// that appears more than once (when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose 
// first duplicate value has the minimum index.

// If no integer appears more than once, your function should return -1

// Note that you're allowed to mutate the input array

function firstDuplicateValue(array) {
  const visited = [];
  for (let i = 0; i < array.length; i++) {
    if (visited.includes(array[i])) {
      return array[i];
    }
    visited.push(array[i]);
  }
  return -1;
}

const array = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(array)) // 2 

// 2 is the first integer that appears more than once.
// 3 also appears more than once, but the second 3 appears after the second 2
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero.

// Example 2:
// Input: [-5, 2, -1, -2, 3]
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.

const search_triplets = function(arr) {
  let triplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    triplets = triplets.concat(findTriplets(arr, -arr[i], i + 1, i));
  }
  return triplets;
};

const findTriplets = (arr, target, start, index) => {
    let end = arr.length - 1,
      triplets = [];
  while (start < end) {
    if (start === index) {
      start++;
    } else if (end === index) {
      end--;
    }
    if (arr[start] + arr[end] < target) {
      start++;
    } else if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] === target) {
      triplets.push([-target, arr[start], arr[end]].sort((a, b) => a - b));
      start++;
      end--;
    }
  }
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(findTriplets([-3, -2, -1, 0, 1, 1, 2], 2, 1));
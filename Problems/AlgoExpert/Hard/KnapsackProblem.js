// You're given an array of arrays where each subarray holds two integer values and represents an item; the first integer is the item's
// value, and the second integer is the item's weight. You're also given an integer representing the maximum capacity of a knapsack that you can have.

// Your goal is to fit items in your knapsack without having the sum of their weights exceed the knapsack's capacity, all the while maximizing
// their combined value. Note that you only have one of each item at your disposal.

// Write a function that returns the maximized combined vlaue of the items that you should pick as well as an array of the indices of each item picked.

// If there are multiple combinations of items that maximize the total value in the knapsack, your function can return any of them.

function knapsackProblem(items, capacity) {
  let knapsackVals = new Array(items.length + 1).fill([]).map(array => array.concat(new Array(capacity + 1).fill(0)));
  for (let i = 1; i < knapsackVals.length; i++) {
    let currentWeight = items[i - 1][1];
    let currentVal = items[i - 1][0];
    for (let j = 1; j < knapsackVals[i].length; j++) {
      if (currentWeight <= j) {
        knapsackVals[i][j] = Math.max(
          knapsackVals[i - 1][j],
          knapsackVals[i - 1][j - currentWeight] + currentVal
        );
      } else {
        knapsackVals[i][j] = knapsackVals[i - 1][j];
      }
    }
  }
  let i = items.length;
  let j = capacity;
  let currentVal = knapsackVals[i][j];
  let maxValItems = [];
  while (currentVal > 0) {
    if (knapsackVals[i][j] === knapsackVals[i - 1][j]) {
      i--;
    } else {
      maxValItems.push(i - 1)
      j -= items[i - 1][1];
      i--;
    }
    currentVal = knapsackVals[i][j];
  }
  return [knapsackVals[items.length][capacity], maxValItems];
}
const items = [[1, 2], [4, 3], [5, 6], [6, 7]];
const capacity = 10;
console.log(knapsackProblem(items, capacity)); // [10, [1, 3]] items [4, 3] and [6, 7]

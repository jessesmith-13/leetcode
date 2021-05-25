// Given a set with distinct elements, find all of its distinct subsets.

// Example 1:
// Input: [1, 3]
// Output: [], [1], [3], [1,3]

// Example 2:
// Input: [1, 5, 3]
// Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]

const find_subsets = function(nums) {
  let subsets = [];
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    const n = subsets.length;
    for (let j = 0; j < n; j++) {
      let subset = subsets[j].slice(0);
      subset.push(nums[i]);
      subsets.push(subset);
    }
  }
  return subsets;
};


console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)

let subsets = [[], [1]];
console.log('subsets', subsets[0].slice(0));
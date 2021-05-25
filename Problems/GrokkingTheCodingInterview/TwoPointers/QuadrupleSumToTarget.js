// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, 
// whose sum is equal to the target number.

// Example 1:
// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.

// Example 2:
// Input: [2, 0, -1, 1, -2, 2], target=2
// Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
// Explanation: Both the quadruplets add up to the target.

const search_quadruplets = function(arr, target) {
  //declare variables: quadruplets ([])
  quadruplets = [];
  //sort arr
  arr.sort((a, b) => a - b);
  //iterate through arr
  for (let i = 0; i < arr.length; i++) {
    //define variables: left(i + 1), middle(i + 2), right(end of the array)
    let left = i + 1,
      middle = i + 2,
      right = arr.length - 1;
      //while the middle is less than the right
    while (middle < right) {
      sum = arr[i] + arr[left] + arr[middle] + arr[right];
      //if the 4 sum up to the target
      if (sum === target) {
        //push the four into quadruplets
        quadruplets.push([arr[i], arr[left], arr[middle], arr[right]]);
        //m++
        middle++;
        //left++
        left++;
        //right--
        right--;
        //if the the 4 summed is less than the target
      } else if (sum < target) {
        //m++
        middle++;
        sum = arr[i] + arr[left] + arr[middle] + arr[right];
        if (sum < target) {
          left++;
        }
        //if the 4 summed is greater than the target
      } else if (sum > target) {
        //r--      
        right--;
      }
    }
  }
  //return quadruplets
  return quadruplets;
};

// console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));
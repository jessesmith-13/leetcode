// Given an array containing 0s, 1s and 2s, sort the array in-place. 
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
// The flag of the Netherlands consists of three colors: red, white and blue; and since our input array 
// also consists of three different numbers that is why it is called Dutch National Flag problem.

// Example 1:
// Input: [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]

// Example 2:
// Input: [2, 2, 0, 1, 2, 0]
// Output: [0 0 1 2 2 2 ]

const dutch_flag_sort = function(arr) {
  // return arr.sort((a, b) => a - b);

  //declare variables: high (the end of the arr), low(0), i(0)
  let high = arr.length - 1,
    low = 0,
    i = 0;
  //while the i is less than or equal to high
  while (i <= high) {
    //if the current number is 0
    if (arr[i] === 0) {
      //swap it with the low
      [arr[i], arr[low]] = [arr[low], arr[i]]
      //increment i by 1
      i++;
      //increment low by 1
      low++;
      //if the current number is 1
    } else if (arr[i] === 1) {
      //increment i by 1
      i++;
      //if the current number is 2
    } else if (arr[i] === 2) {
      //swap it with high
      [arr[i], arr[high]] = [arr[high], arr[i]];
      //decrease high by 1
      high--;
    }
  }
  //return array
  return arr;
};

console.log(dutch_flag_sort([1, 0, 2, 1, 0]))
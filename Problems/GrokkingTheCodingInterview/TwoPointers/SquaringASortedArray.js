// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

// Example 1:
// Input: [-2, -1, 0, 2, 3]
// Output: [0, 1, 4, 4, 9]

// Example 2:
// Input: [-3, -1, 0, 1, 2]
// Output: [0, 1, 1, 4, 9]

const make_squares = function(arr) {
  //define variables: squares ([]), start (0) , end (0)
  squares = new Array(arr.length).fill(0),
    start = 0,
    end = arr.length - 1;
  //while the start is <= end
  for (let i = arr.length - 1; i > 0; i--) {
    //if the end number squared is greater than the start number squared
    if (arr[end] ** 2 > arr[start] ** 2) {
      //the new array at the end index becomes the original array at the end index
      squares[i] = arr[end] ** 2;
      //decrement the end by 1
      end--;
      //otherwise
    } else {
      //the new array at the end index becomes the start index
      squares[i] = arr[start] ** 2;
      //increment start by 1
      start++;
    }
  }
  //return squares
  return squares;
};

console.log(make_squares([-3, -1, 0, 1, 2]));

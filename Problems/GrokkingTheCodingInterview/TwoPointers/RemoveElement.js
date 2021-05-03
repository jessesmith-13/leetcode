// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

// Example 1:
// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

// Example 2:
// Input: [2, 11, 2, 2, 1], Key=2
// Output: 2
// Explanation: The first two elements after removing every 'Key' will be [11, 1].

const removeElement = (arr, key) => {
  //define variables: nextEle (0)
  let nextEle = 0;
  //iterate through the arr
  for ( let i = 0; i < arr.length; i++) {
    //if the arr at i doesn't equal the key
    if (arr[i] !== key) {
      //the array at the nextEle becomes the array at i
      arr[nextEle] = arr[i];
      //increment the nextEle by 1
      nextEle++;
    }
  }
  //return the nextEle
  return nextEle;
}

console.log(removeElement([2, 11, 2, 2, 1], 2));
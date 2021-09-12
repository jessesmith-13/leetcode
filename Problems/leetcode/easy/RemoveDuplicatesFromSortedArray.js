// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
  //start is 0, visited is empty array, k is 0
  let start = 0,
    end = start + 1;
    visited = [],
    k = 0;
  //while start is less than the length
  while (start < nums.length) {
    //push start into visited
    visited.push(nums[start]);
    //while end is less than the length
    while (end < nums.length) {
      //if the end is not in visited
      if (!visited.includes(nums[end])) {
        //start++
        start++;
        //nums at start equals end
        nums[start] = nums[end];
        //break
        break;
        //else
      } else {
        //end++
        end++;
      }
    }
    //k++
    k++;
    //if end is the length of nums
    if (end === nums.length) {
      //break
      break;
    }
  }
    //return k
    return k;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

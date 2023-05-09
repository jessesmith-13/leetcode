// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

var maximumProduct = function(nums) {
  nums = nums.sort((a,b) => a - b);
  // if length of nums is 3, return the product
  if (nums.length === 3) return nums.reduce((a,v) => a*v);
  // separate out arrays into neg + positive
  const negatives = nums.filter(num => num < 0);
  // if we have less than 2 negative numbers, just return the product of 3 highest positives
  if (negatives.length < 2) {
    return nums.slice(nums.length-3).reduce((a,v) => a*v);
  }
  // set our highestProductWithNegatives equal to our 2 lowest negatives multiplied by our highest number in nums
  const highestProductWithNegatives = negatives[0] * negatives[1] * nums[nums.length-1];
  const highestProductOtherwise = nums.slice(nums.length-3).reduce((a,v) => a*v);
  console.log(`HIGHESTPRODUCTWITHNEGS ${negatives}`)
  // compare that against the highest three numbers in nums, and return the greater product
  return highestProductWithNegatives > highestProductOtherwise ? highestProductWithNegatives : highestProductOtherwise;
};

const nums = [-100,-98,-1,2,3,4];
console.log (maximumProduct(nums));

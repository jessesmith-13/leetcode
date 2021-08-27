// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers 
// can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let currentPlot = flowerbed[i];
    let previousPlot= flowerbed[i - 1];
    let nextPlot = flowerbed[i + 1];
    console.log(previousPlot);
    if (currentPlot === 0 && (previousPlot === 0 || typeof previousPlot === 'undefined') && (nextPlot === 0 || typeof nextPlot === 'undefined')) {
      flowerbed[i] = 1;
      n--;
    }
    if (n <= 0) {
      return true;
    }
  }
  return false;
};

console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 4));
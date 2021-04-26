// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

// Example 1:
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// Example 2:
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']


const fruits_into_baskets = function(fruits) {
  //declare a starting window, empty fruit baskets array, maximum number of fruits starting at 0, unique fruit count starting at 0
  let windowStart = 0,
      fruitBasket = [],
      maxNumOfFruits = 0,
      uniqueFruits = 0;
  //iterate through the fruits
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    //if the fruit baskets array does not contain the current fruit
    if (!fruitBasket.includes(fruits[windowEnd])) {
      //increase the unique fruit count by 1
      uniqueFruits++;
    }
    //if the unique fruit count is greater than 2
    if (uniqueFruits > 2) {
      //set the max fruits count to either the greater of max fruits or the current length of the basket
      maxNumOfFruits = Math.max(maxNumOfFruits, fruitBasket.length);
      //set the basket back to empty
      fruitBasket = [];
      //increase the start window
      windowStart++;
      //set the end window equal to the start window - 1
      windowEnd = windowStart - 1;
      //set the unique fruit count back to 0
      uniqueFruits = 0;
      //otherwise
    } else {
      //put the fruit into the fruit basket
      fruitBasket.push(fruits[windowEnd])
      //set the max fruits count to either the greater of max fruits or the current length of the basket
      maxNumOfFruits = Math.max(maxNumOfFruits, fruitBasket.length);
    }
  }
  //return max num of fruits
  return maxNumOfFruits;
};

console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']))
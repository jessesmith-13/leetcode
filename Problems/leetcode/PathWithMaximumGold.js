//INCOMPLETE

// In a gold mine grid of size m x n, each cell in this mine has an integer representing 
// the amount of gold in that cell, 0 if it is empty.
// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.
 

// Example 1:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// Example 2:
// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

var getMaximumGold = function(grid) {
 //declare variables: highestGoldTotal(0)
 //iterate through rows
  //iterate through cols
    //if the current number doesn't equal 0
      //call totalGold with the grid, row, col, highestGoldTotal
};

const totalGold = (grid, row, col, highestGoldTotal) => {
  let currentSum = 0;
  const innerFunc = (startingPoint, row, col) => {
    if (isValidMove(grid, row - 1, col)) { //up
      innerFunc(row - 1, col)
    }
    if (isValidMove(grid, row, col + 1)) { //right
      innerFunc(row, col + 1);
    }
    if (isValidMove(grid, row + 1, col)) { //down
      currentSum += startingPoint + innerFunc(row + 1, col)
    }
    if (isValidMove(grid, row, col - 1)) { //left
      innerFunc(row, col - 1);
    }
  }
  innerFunc(grid[row][col], row, col)
}

const isValidMove = (grid, row, col) => {
  if (grid[row][col] === undefined || grid[row][col] === 0) {
    return false;
  }
  return true;
}
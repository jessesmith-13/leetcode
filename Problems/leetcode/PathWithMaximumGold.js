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
  //define variables: startingPoint, highestGoldTotal (0), moveGrid
  //iterate through the rows
    //iterate through the columns
    //if the current number is 0
      //continue
    //otherwise
      //set the moveGrid to a grid full of O's
      //set the starting point to the current coordinates
      //call the helper function with the grid, moveGrid and starting coordinates
};

const totalGold = (grid, moveGrid, row, col, highestGoldTotal) => {
  //declare variables: goldTotal (0), currentPosition(grid[row][col])
  //while there are still valid moves
    //reset the moveGrid
    //add the current position to the total
    //if the position above is valid
      //set 
  //add the current position to the total
  //if the space above the current position is a valid move
  //return highestGoldTotal
}

const isValidMove = (moveGrid, row, col) => {
  //if the space is valid, return true
  //return false;
}
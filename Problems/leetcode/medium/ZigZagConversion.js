// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

var convert = function(s, numRows) {
  let rows = numRows;
  let grid = [];
  while (rows > 0) {
    grid.push([]);
    rows--;
  }
  let i = 0,
    col = 0,
    row = 0;
  while (i < s.length) {
    //going down
    while (row < numRows) {
      grid[row][col] = s[i];
      i++;
      row++;
    }
    col++;
    row-=2;
    //going up diagonal
    while (row >= 0) {
      grid[row][col] = s[i];
      row--;
      col++;
      i++;
    }
    row+=2;
  }
  let output = '';
  grid.forEach(row => row.forEach(col => {
    if (typeof col !== 'undefined') {
      output += col
    }
  }));

  return output;
};

// console.log(convert('PAYPALISHIRING', 3))

// const testArr = [];
// testArr[3] = 'wow';
// console.log(testArr[0]);

console.log(2**31);
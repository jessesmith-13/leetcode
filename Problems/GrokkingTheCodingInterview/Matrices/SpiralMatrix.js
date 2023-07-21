// Given an m×n matrix, return an array containing the matrix elements in spiral order, starting from the top-left cell.

const spiralOrder = (matrix) => {
  let results = [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = -1;
  let direction = 1;

  while (rows > 0 && cols > 0) {

    for (let i = 0; i < cols; i++) {
      col += direction;
      results.push(matrix[row][col]);
    }

    rows--;

    for (let i = 0; i < rows; i++) {
      row += direction;
      results.push(matrix[row][col]);
    }

    cols--;
    direction *= -1;
  }
  
  return results;
}

const matrix = [
  [10,1,14,11,14],
  [13,4,8,2,13],
  [10,19,1,6,8],
  [20,10,8,2,12],
  [15,6,8,8,18]
];

console.log(spiralOrder(matrix));
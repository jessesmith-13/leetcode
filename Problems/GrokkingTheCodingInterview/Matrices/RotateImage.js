// Given an n×n matrix, rotate the matrix 90 degrees clockwise. The performed rotation should be in place, i.e., 
// the given matrix is modified directly without allocating another matrix.

// Note: The function should only return the modified input matrix.

const rotateImage = (matrix) => {
  const n = matrix.length
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      // swap the top left with the top right
      [matrix[i][j], matrix[j][n-1-i]] = [matrix[j][n-1-i], matrix[i][j]]

      //swap the top left with the bottom right
      [matrix[i][j], matrix[n-1-i][n-1-j]] = [matrix[n-1-i][n-1-j], matrix[i][j]];

      // swap the top left with the bottom left
      [matrix[i][j], matrix[n-1-j][i]] = [matrix[n-1-j][i], matrix[i][j]]
    }
  }
  return matrix;
}

const matrix = [
  [10, 1, 14, 11, 14], 
  [13, 4, 8, 2, 13], 
  [10, 19, 1, 6, 8], 
  [20, 10, 8, 2, 12], 
  [15, 6, 8, 8, 18]
]
console.log(rotateImage(matrix));
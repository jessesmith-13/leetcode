// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees 
//(clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
//DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
  matrix.reverse();
  for (let i in matrix) {
    for (let j = 0; j < i; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }
  return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
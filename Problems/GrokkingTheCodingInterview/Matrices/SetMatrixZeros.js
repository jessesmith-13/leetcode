// Given a matrix, mat, if any element within the matrix is zero, set that row and column to zero.

const setMatrixZeros = (mat) => {
  // First we're going to set up two flags to see if there are any zeros in the first column and first row. This is to ensure
  // We're not falsly reasigning zeroes as we check the rest of the matrix, so we're going to swing back at the end of the algorithm,
  // and if either flag is true, we'll fill the cols/rows with zeros
  let frow = false;
  let fcol = false;
  const rows = mat.length;
  const cols = mat[0].length;

  // aight first we're going to check to see if our first row contains any zeros, and change our flag accordingly
  for (let i = 0; i < cols; i++) {
    if (mat[0][i] === 0) {
      frow = true;
      break;
    }
  }

  // now we'll do the same with the first column
  for (let i = 0; i < rows; i++) {
    if (mat[i][0] === 0) {
      fcol = true;
      break;
    }
  }

  // Word, now we're going to want to continue with the rest of the matrix (starting at the second row and col), and if we find any
  // of them stinkin zeros, we'll be setting the first of that row and col to 0
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      let curNum = mat[i][j];
      if (curNum === 0) {
        mat[0][j] = 0;
        mat[i][0] = 0;
      }
    }
  }

  // Now that we have all of the first elements of our cols and rows properly zerod, we're going to want to first check every rows 
  // first element to see if it has a zero, and if it does, we'll fill in that row with zeroes. We'll be starting from the second row
  for (let i = 1; i < rows; i++) {
    if (mat[i][0] === 0) {
      mat[i].fill(0);
    }
  }

  // Then we'll do the same with the columns, starting from the second col
  for (let j = 1; j < cols; j++) {
    if (mat[0][j] === 0) {
      for (let i = 1; i < rows; i++) {
        mat[i][j] = 0;
      }
    }
  }

  // Now finally, we're going to circle back and check our flags, and if either are true, we'll just fill in either with all zeros, 
  // starting with the first row
  if (frow) {
    mat[0].fill(0);
  }

  // Now check the first column
  if (fcol) {
    for (let i = 0; i < rows; i++) {
      mat[i][0] = 0;
    }
  }

  // Now we return the matrix, and hope we got all of that right >.<
  return mat;
}


const mat = [
  [1,2,3],
  [4,5,6],
  [7,0,9]];
console.log(setMatrixZeros(mat));
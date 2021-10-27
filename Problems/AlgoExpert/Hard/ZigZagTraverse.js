function zigzagTraverse(array) {
  let result = [array[0][0]]
  let row = 1,
    col = 0,
    columns = array[0].length,
    colAndRowTotal = (columns - 1) + (array.length - 1),
    top = 0,
    bottom = array.length - 1,
    right = columns - 1,
    left = 0;
    console.log(array.length - 1, columns - 1);
  while (row + col < colAndRowTotal) {
    while (row >= 0) {
      result.push(array[row][col]);
      if (col === right) {
        break;
      }
      row--;
      if (col !== columns - 1) {
        col++;
      }
    }
    if (row < top && col === right) {
      row += 2;
    } else if (row < top) {
      row++;
    } else {
      row++;
    }
    while (col >= 0) {
      result.push(array[row][col]);
      if (row === bottom) {
        break;
      }
      col--;
      row++;t
    }
    if (col < left) {
      col++;
    } else if (row === bottom) {
      col++;
    }
  }
  return result;
}

let array = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
]

console.log(zigzagTraverse(array));


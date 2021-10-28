function spiralTraverse(array) {
  const spiral = [];
  let endingCol = array[0].length - 1;
  let endingRow = array.length - 1;
  let startingCol = 0;
  let startingRow = 0;
  while (startingCol <= endingCol && startingRow <= endingRow) { // haven't been through center layer
    for (let j = startingCol; j <= endingCol; j++) {
      spiral.push(array[startingRow][j]);
    }
    for (let i = startingRow + 1; i <= endingRow; i++) {
      spiral.push(array[i][endingCol]);
    }
    for (let j = endingCol - 1; j >= startingCol; j--) {
      if (startingCol === endingCol) break;
      spiral.push(array[endingRow][j]);
    }
    for (let i = endingRow - 1; i > startingRow; i--) {
      if (endingRow === startingRow) break;
      spiral.push(array[i][startingCol]);
    }
    startingRow++;
    endingRow--;
    startingCol++;
    endingCol--;
  }
  return spiral;
}

const array = [
  [1, 2, 3],
    [12, 13, 4],
    [11, 14, 5],
    [10, 15, 6],
    [9, 8, 7]
];

console.log(spiralTraverse(array));
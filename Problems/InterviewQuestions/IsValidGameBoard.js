const isValidGameBoard = (board) => {
  let count = 0,
  i = board.length - 1;
  while (i >= 0) {
    if ((board[i] > 0 && count > 0) || i === 0) {
      if (board[i] < count) {
        return false
      } else {
        count = 0;
      }
    }
    i--;
    count++;
  }
  return true;
}

console.log(isValidGameBoard([1,0,0,1,1]));
console.log(isValidGameBoard([3,0,0,1,1]));
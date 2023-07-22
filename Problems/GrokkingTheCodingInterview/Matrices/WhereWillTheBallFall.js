const findExitColumn = (input1) => {
  const results = [];

  //We're going to simply loop through our columns, and use our current position as starting coordinates
  for (let col = 0; col < input1[0].length; col++) {
    let row = 0;
    let curCol = col;
    let blocked = false;
    // Now we move downwards through the box by having the 1 or -1 dictate whether or not to move right or left
    while (row < input1.length && !blocked) {
      if ((input1[row][curCol] === 1 && input1[row][curCol+1] === -1) || (input1[row][curCol] === -1 && input1[row][curCol - 1] === 1)) {
        blocked = true;
        results.push(-1);
        break;
      }
      if (typeof input1[row][curCol] === 'undefined') {
        blocked = true;
        results.push(-1);
        break;
      }
      curCol+=input1[row][curCol];
      row++;
    }
    if (!blocked) {
      results.push(curCol);
    }
  }
  return results;
};

const input1 = [
  [1,1,1,-1],
  [-1,-1,1,1,],
  [1,1,-1,-1],
  [-1,-1,1,1],
]
// console.log(findExitColumn(input1));

let testStr = 'blahhh';
console.log(testStr[2]);

// There
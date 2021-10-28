function moveElementToEnd(array, toMove) {
  let i = 0,
    j = array.length - 1;
  while (i < j) {
    if (array[j] === toMove) {
      j--;
    } else if (array[i] === toMove) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    } else {
      i++;
    }
  }
  i = 0;
  j = array.length - 1;
  while (i < j)
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)) // [1, 3, 4, 2, 2, 2, 2, 2]
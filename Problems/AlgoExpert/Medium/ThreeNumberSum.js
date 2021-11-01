function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let sums = [];
  for (let i = 0; i < array.length; i++) {
    let j = array.length - 1;
    let k = i + 1;
    while (k < j) {
      let curSum = array[i] + array[k] + array[j];
      if (curSum < targetSum) {
        k++;
      } else if (curSum > targetSum) {
        j--;
      } else {
        sums.push([array[i], array[k], array[j]]);
        k++;
        j--;
      }
    }
  }
  return sums;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

//-8, -6, 1, 2, 3, 5, 6, 12
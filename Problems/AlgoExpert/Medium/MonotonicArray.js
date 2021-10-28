function isMonotonic(array) {
  if (array.length === 0 || array.length === 1) {
    return true;
  }
  let nonIncreasing = true;
  let nonDecreasing = true;
  for (let i = 0; i < array.length - 1; i++) {
    let cur = array[i];
    let next = array[i + 1];
    if (next > cur) {
      nonDecreasing = false;
    } else if (next < cur) {
      nonIncreasing = false;
    }
  }
  return nonIncreasing || nonDecreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
console.log(isMonotonic([1, 2, 3, 4, 5, 9]))
console.log(isMonotonic([1, 2]))
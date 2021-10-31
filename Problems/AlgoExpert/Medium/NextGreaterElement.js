function nextGreaterElement(array) {
  const nextGreaterEles = [];
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;
    for (let j = i + 1; j !== i; j++) {
      if (j >= array.length) {
        j = -1;
        continue;
      }
      if (array[j] > array[i]) {
        nextGreaterEles.push(array[j]);
        break;
      }
    }
    console.log('nextGreaterEles', nextGreaterEles);
    if (typeof nextGreaterEles[i] === 'undefined') {
      nextGreaterEles[i] = -1;
    }
  }
  return nextGreaterEles;
}

const arr = [-9, 0, -5, 1, 3, -2, 18, 2, 5, 18]
console.log(nextGreaterElement(arr));
// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array
// is equal to the product of every other number in the input array.

// In ohter words, the value at output[i] is equal to the product of every number in the input array other than input[i].

// Note that you're expected to solve this problem without using division.

function arrayOfProducts(array) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    let productArray = array.slice(0, i).concat(array.slice(i + 1));
    output.push(getProduct(productArray));
  }
  return output;
}

function getProduct(array) {
  return array.reduce((prev, next) => {
    return prev * next;
  }, 1)
}
const array = [5, 1, 4, 2];
console.log(arrayOfProducts(array)); 
// [8, 40, 10, 20]
// 8 is equal to 1 x 4 x 2
// 40 is equal to 5 x 4 x 2
// 10 is equal to 5 x 1 x 2
// 20 is equal to 5 x 1 x 4

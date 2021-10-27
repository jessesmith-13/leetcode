// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose 
// absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the disstance between them on the real number line. 
// For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference

// example: 

// input:
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arraytwo = [26, 134, 135, 15, 17]

// output: [28, 26]


function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestDifference = +Infinity;
  let smallestPair = [];
  let i = 0;
  let j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    let num1 = arrayOne[i];
    let num2 = arrayTwo[j];
    let absoluteDifference = getAbsoluteDifference(num1, num2);
    console.log('abs', absoluteDifference)
    if (absoluteDifference < smallestDifference) {
      smallestDifference = absoluteDifference;
      smallestPair = [num1, num2]
    }
    num1 < num2 ? i++ : j++;
  }
  return smallestPair;
}

function getAbsoluteDifference(num1, num2) {
  if ((num1 < 0 || num2 < 0) && !(num1 < 0 && num2 < 0)) {
    return Math.abs(num1 + num2);
  }
  return Math.abs(num1 - num2);
}

const arrayOne = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123]
const arrayTwo = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
console.log(smallestDifference(arrayOne, arrayTwo));
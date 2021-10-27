// You're given a non-empty array of positive integers where each integer represents the maximum number of steps you can take forward in the array.
// For example, if the element at index 1 is 3, you can go from index 1 to index 2, 3, or 4.

// Write a function that returns the minimum number of jumps needed to reach the final index.

// Note that jumping from index i to index i + x always constitutes one jump, no matter how large x is.a

// function minNumberOfJumps(array) {
//   let i = 0;
//   let jumps = 0;
//   while (i < array.length - 1) {
//     let curStepsAmount = array[i];
//     let maxNum;
//     let maxNumIndex;
//     let j = i + 1;
//     if (i + curStepsAmount >= array.length - 1) {
//       jumps++;
//       break;
//     }
//     while (curStepsAmount > 0) {
//       if (typeof maxNum === 'undefined' || array[j] >= maxNum) {
//         maxNum = array[j];
//         maxNumIndex = j;
//       }
//       curStepsAmount--;
//       j++;
//     }
//     jumps++;
//     i = maxNumIndex;
//   }
//   return jumps;
// }


function minNumberOfJumps(array) {
  let i = array.length - 1;
  let jumps = 0;
  while (i > 0) {
    let furthest;
    let j = i - 1;
    while (j >= 0) {
      if (j + array[j] >= i) {
        furthest = j;
      }
      j--;
    }
    i = furthest;
    jumps++;
  }
  return jumps;
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])); // 4, because 3 --> (4 or 2) --> (2 or 3) --> 7 --> 3
console.log(minNumberOfJumps([2, 1, 2, 3, 1])); 
// console.log(Math.max(1, 1, 1));
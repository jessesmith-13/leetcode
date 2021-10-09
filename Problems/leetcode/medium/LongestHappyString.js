// A string is called happy if it does not have any of the strings 'aaa', 'bbb' or 'ccc' as a substring.
// Given three integers a, b and c, return any string s, which satisfies following conditions:

// s is happy and longest possible.
// s contains at most a occurrences of the letter 'a', at most b occurrences of the letter 'b' and at most c occurrences of the letter 'c'.
// s will only contain 'a', 'b' and 'c' letters.
// If there is no such string s return the empty string "".

// Example 1:
// Input: a = 1, b = 1, c = 7
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.

// Example 2:
// Input: a = 2, b = 2, c = 1
// Output: "aabbc"

// Example 3:
// Input: a = 7, b = 1, c = 0
// Output: "aabaa"
// Explanation: It's the only correct answer in this case.

var longestDiverseString = function(a, b, c) {
  let happyString = '',
  validPlacements = true,
  currentSubStrCount;
  const tuples = [
    ['a', a],
    ['b', b],
    ['c', c],
  ].sort((d, e) => d[1] - e[1]).reverse();
  let i = 0;
  while (validPlacements) {
    currentSubStrCount = 0
    let currentTuple = tuples[i];
    let currentLetter = currentTuple[0];
    // let currentLetterCount = currentTuple[1];
    if (currentTuple[1] === 0) {
      if (i === tuples.length - 1) {
        i = 0
      } else {
        i++;
      }
      continue;
    }
    while (currentSubStrCount < 2 && currentTuple[1] > 0) {
      happyString += currentLetter;
      currentTuple[1]--;
      currentSubStrCount++;
    }
    console.log(tuples);
    if (!validPlacements) {
      break;
    }
    let remainingTuples = tuples.filter(tuple => tuple[1] !== 0);
    if (remainingTuples.length === 1) {
      currentSubStrCount = 0;
      while (remainingTuples[0][1] > 0 && currentSubStrCount < 2) {
        happyString += remainingTuples[0][0];
        remainingTuples[0][1]--;
        currentSubStrCount++;
      }
      break;
    }
    if (i === tuples.length - 1) {
      i = 0
    } else {
      i++;
    }
  }
  return happyString;
};

console.log(longestDiverseString(7, 1, 0));
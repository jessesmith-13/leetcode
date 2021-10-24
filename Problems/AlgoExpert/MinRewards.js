function minRewards(scores) {
  let rewards = [],
    prev;
  rewards[0] = 1
  for (let i = 1; i < scores.length; i++) {
    prev = i-1;
    if (scores[i] < scores[prev]) {
      let j = i - 1;
      rewards[i] = 1;
      while (j >= 0) {
        if (scores[j] < scores[j+1]) {
          break;
        }
        rewards[j] = Math.max(rewards[j], rewards[j+1] + 1);
        j--;
        console.log('rewards', rewards)
      }
    } else {
      rewards[i] = rewards[prev] + 1;
    }
  }
  return rewards.reduce((prev, cur) => {
    return prev + cur;
  }, 0)
}

console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));  // [4, 3, 2, 1, 2, 3, 4, 5, 1]

// [8,  4,   2,   1,   3,    6,    7,     9,   5]
// [              1    2     3     4      5      ]

// [ 4,   3,     2,    1,    2,   3,    4,    5,    1 ]
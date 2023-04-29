// You are given two strings current and correct representing two 24-hour times.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

// Return the minimum number of operations needed to convert current to correct.

 

// Example 1:

// Input: current = "02:30", correct = "04:35"
// Output: 3
// Explanation:
// We can convert current to correct in 3 operations as follows:
// - Add 60 minutes to current. current becomes "03:30".
// - Add 60 minutes to current. current becomes "04:30".
// - Add 5 minutes to current. current becomes "04:35".
// It can be proven that it is not possible to convert current to correct in fewer than 3 operations.
// Example 2:

// Input: current = "11:00", correct = "11:01"
// Output: 1
// Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.

var convertTime = function(current, correct) {
  const targetTimeInMinutes = Number(correct.split(':')[0] * 60) + Number(correct.split(':')[1]);
  const currentTimeInMinutes = Number(current.split(':')[0] * 60) + Number(current.split(':')[1]);
  console.log (targetTimeInMinutes, currentTimeInMinutes)
  let amountOfTimeRemaining = targetTimeInMinutes - currentTimeInMinutes;
  let operationCounter = 0;

  while (amountOfTimeRemaining > 0) {
    if (amountOfTimeRemaining - 60 >= 0) {
      amountOfTimeRemaining -= 60;
      operationCounter++;
      console.log('should run 23 times');
      continue;
    }
    if (amountOfTimeRemaining - 5 >= 0) {
      amountOfTimeRemaining -= 5;
      operationCounter++;
      console.log('should run 11 times')
      continue;
    }
    amountOfTimeRemaining -= 1;
    operationCounter++;
    console.log('should run 4 times');
  }
  return operationCounter;
};

const input = "00:00";
const correct = "23:59";
console.log(convertTime(input, correct));
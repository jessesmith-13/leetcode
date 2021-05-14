// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. 
// All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const find_happy_number = function(num) {
  //declareVariables: fastNum = num, slowNum = num
  let fastNum = num,
    slowNum = num;
  //while findSquareSumsFast of the number doesn't equal findSquareSumsSlow
  while (findSquareSumsFast(fastNum) !== findSquareSumsSlow(slowNum)) {
    //if either equal 1
    if (findSquareSumsFast(fastNum) === 1 || findSquareSumsSlow(slowNum) === 1) {
      //return true
      return true;
    }
    fastNum = findSquareSumsFast(fastNum);
    slowNum = findSquareSumsSlow(slowNum);
  }
  return false;
};

const findSquareSumsFast = (num) => {
  let sum = 0,
    secondSum = 0;
  num.toString().split('').forEach(num => sum += Number(num) ** 2);
  sum.toString().split('').forEach(num => secondSum += Number(num) ** 2);
  return secondSum;
}

const findSquareSumsSlow = (num) => {
  let sum = 0;
  num.toString().split('').forEach(num => sum += Number(num) ** 2);
  return sum;
}

console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)

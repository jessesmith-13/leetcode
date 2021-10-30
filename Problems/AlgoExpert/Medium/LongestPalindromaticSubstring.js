function longestPalindromicSubstring(string) {
  let longestPalindrome = string[0];
  for (let i = 0; i < string.length; i++) {
    let j = string.length - 1;
    while (j > i) {
      let curSubstr = string.slice(i, j + 1)
      if (isPalindrome(curSubstr) && curSubstr.length > longestPalindrome.length) {
        longestPalindrome = curSubstr;
      }
      j--;
    }
  }
  return longestPalindrome;
}

function isPalindrome(subStr) {
  return subStr === subStr.split('').reverse().join('');
}

const str = 'abaxyzzyxf'
console.log(longestPalindromicSubstring(str)); //'xyzzyx
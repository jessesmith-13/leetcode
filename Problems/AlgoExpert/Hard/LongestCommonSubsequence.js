function longestCommonSubsequence(str1, str2) {
  let str1Checked = '';
  let str2Checked = '';
  const common = [];
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    let str1Char = str1[i];
    let str2Char = str2[i];
    if (isNextCommon(str1Char, str2Checked, common[common.length - 1])) {
      common.push(str1Char);
    }
    str1Checked += str1Char;
    if (isNextCommon(str2Char, str1Checked, common[common.length - 1])) {
      common.push(str2Char);
    }
    str2Checked += str2Char;
  }
  return common;
}

function isNextCommon(letter, str, lastCommon) {
  let lastFound = false;
  for (let i = 0; i < str.length; i++) {
    if ((letter === str[i] && lastFound) || (letter === str[i] && typeof lastCommon === 'undefined')) {
      return true;
    }
    if (letter === str[i] && !lastFound) {
      return false;
    } 
    if (str[i] === lastCommon) {
      lastFound = true;
    }
  }
  return false;
}

const str1 = 'clement';
const str2 = 'antoine';
console.log(longestCommonSubsequence(str1, str2));
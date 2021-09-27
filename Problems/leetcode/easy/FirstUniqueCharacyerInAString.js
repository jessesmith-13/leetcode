var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
        let theRest = s.slice(0, i) + s.slice(i + 1);
        if (!theRest.includes(s[i])) {
          return i;
        }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
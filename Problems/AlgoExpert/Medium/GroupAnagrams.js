function groupAnagrams(words) {
  const anagrams = [];
  const visited = [];
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let curAnagrams = [words[i]];
    if (visited.includes(word1)) {
      continue;
    }
    for (let j = i + 1; j < words.length; j++) {
      let word2 = words[j];
      if (isAnagram(word1, word2)) {
        curAnagrams.push(word2);
        visited.push(word2);
      }
    }
    anagrams.push(curAnagrams);
  }
  return anagrams;
}

function isAnagram(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

const words = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
console.log(groupAnagrams(words));
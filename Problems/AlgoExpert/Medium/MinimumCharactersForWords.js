// Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words.
// The characters don't need to be in any particular order.

// For example, the characters ['y', 'r', 'o', 'u'] are needed to form the words ['your', 'you', 'or', 'yo'].

// Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters

function minimumCharactersForWords(words) {
  const minChars = [];
  for (let i = 0; i < words.length; i++) {
    let letterCount = getLetterCount(words[i]);
    for (let j = 0; j < words[i].length; j++) {
      let letterOccurence = getLetterOccurences(words[i][j], minChars);
      let currentLetterCount = letterCount[words[i][j]];
      while (currentLetterCount > letterOccurence) {
        currentLetterCount--;
        minChars.push(words[i][j]);
      }
    }
  }
  return minChars;
}

function getLetterCount(word) {
  const hashMap = {};
  for (let i = 0; i < word.length; i++) {
    if (!hashMap[word[i]]) {
      hashMap[word[i]] = 0;
    }
    hashMap[word[i]]++;
  }
  return hashMap;
}

function getLetterOccurences(letter, array) {
  let occurences = 0;
  array.forEach(char => {
    if (char === letter) {
      occurences++;
    }
  })
  return occurences;
}

const words = ['this', 'that', 'did', 'deed', 'them!', 'a'];
console.log(minimumCharactersForWords(words)); // ['t', 't', 'h', 'i', 's', 'a', 'd', 'd', 'e', 'e', 'm', '!']  <-- these chars could be ordered in any way
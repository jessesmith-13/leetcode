// Write a function that takes in a string of words separated by one or more whitespaces and returns a string that has these words in reverse order.
// For example, given the string 'tim is great', your function should return 'great is tim'.

// For this knapsackProblem, a word can contain special minimumCharactersForWords, punctuation, and minNumberOfJumps. The words in the string will be
// separated by one or more whitespaces, and the reversed string must contian the same whitespaces as the original string. 
// For example, given the string 'whitespaces    4', you would be expected to return '4    whitespaces'.

// Note that you're not allowed to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/fucntion.

// Also note that the input string isn't guaranteed to always contain words.

function reverseWordsInString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    let currentWord = [];
    while (i >= 0 && string[i] !== ' ') {
      let currentChar = string[i];
      currentWord.unshift(currentChar);
      i--;
    }
    reversed += currentWord.join('');
    while (string[i] === ' ') {
      reversed += ' ';
      i--;
    }
    i++;
  }
  return reversed;
}


const str = 'AlgoExpert is the best!'; // 'best! the is AlgoExpert'
console.log(reverseWordsInString(str))
// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

// Example 1:
// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".

// Example 2:
// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

const find_word_concatenation = function(str, words) {
  //define variables: resultIndices, windowStart, current word
  let resultIndices = [],
    windowStart = 0,
    currentWord = '',
    hashMap = {},
    concatCount = 0,
    wordLength;
  //iterate through the words
    //do the hashmap thing
    //set wordLength to one of the words
  //iterate through str
    //while the window end minus the window start + 1 is less than the wordLength
      //add the current character to currentWord
    //if the currentWord is found within the hashmap and it doesn't equal 0
      //decrement it by 1
      //increment concatCount by 1
    //otherwise
      //increment the windowEnd by the word length - 1
      //set the windowStart to the windowEnd + 1
      //increment the current
    //if the concatCount equals the length of the words
      //push the starting index into resultIndices
    //
  return result_indices;
};

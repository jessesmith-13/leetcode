// In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

// Return the minimum number of rabbits that could be in the forest.

// Examples:
// Input: answers = [1, 1, 2]
// Output: 5
// Explanation:
// The two rabbits that answered "1" could both be the same color, say red.
// The rabbit than answered "2" can't be red or the answers would be inconsistent.
// Say the rabbit that answered "2" was blue.
// Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
// The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

// Input: answers = [10, 10, 10]
// Output: 11

// Input: answers = []
// Output: 0

function numRabbits(answers) {
    let answerMap = {};
    for(let answer of answers){
       if(!answerMap[answer])  answerMap[answer] = 0;
        answerMap[answer]++;
    }
    let result = 0;
    
    //need to find how many groups with the same number
    for(let key of Object.keys(answerMap)){
        result += Math.floor((answerMap[key] + parseInt(key)) /(1 + parseInt(key)))*(1 + parseInt(key));
    }
    
    return result;
};

console.log(numRabbits([1, 1, 2]));
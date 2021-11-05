function multiStringSearch(bigString, smallStrings) {
  const bools = [];
  for (let i = 0; i < smallStrings.length; i++) {
    bools.push(includes(smallStrings[i], bigString));
  }
  return bools;
}

function includes(smallString, bigString) {
  const len = smallString.length;
  for (let i = 0; i < bigString.length; i++) {
    if (bigString.slice(i, len + i) === smallString) {
      return true;
    }
  }
  return false;
}

const bigString = 'this is a big string';
const smallStrings = ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa'];
console.log(multiStringSearch(bigString, smallStrings));
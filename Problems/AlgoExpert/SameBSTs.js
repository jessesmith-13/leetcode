// An array of integers is said to represent the Binary Search Tree (BST) obtained 
// by inserting each integer in the array, from left to right, into the BST.

// Write a function that takes in two arrays of integers and determines hether these arrays 
// represent the same BST. Note that you're not allowed to construct any BSTs in your code.

// A BST is a Binary Tree that consists only of BST NodeList. A node is said to be a valid BST 
// node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; 
// its value is less than or equal to the values of ever node to its right; and its children nodes are eitehr valid BST nodes themselves or None / null

function sameBsts(arrayOne, arrayTwo) {
  if (!sameSubTree(arrayOne, arrayTwo)) {
    return false
  };
  if (arrayOne.length === 0) {
    return true;
  }
  let parent = arrayOne[0];
  let lefts1 = arrayOne.slice(1).filter(node => node < parent);
  let rights1 = arrayOne.slice(1).filter(node => node >= parent)
  let lefts2 = arrayTwo.slice(1).filter(node => node < parent)
  let rights2 = arrayTwo.slice(1).filter(node => node >= parent);
  // console.log('parent', parent);
  // console.log(sameBsts(lefts1, lefts2) && sameBsts(rights1, rights2)) ;
  return sameBsts(rights1, rights2) && sameBsts(lefts1, lefts2);
}

const go = (arr1, arr2) => {
}

const sameSubTree = (arr1, arr2) => {
  if (arr1.length === arr2.length && arr1[0] === arr2[0]) {
    return true;
  } else {
    return false;
  }
}
const arr1 = [10,15,8,12,94,81,5,2,11];
const arr2 = [10,8,5,15,2,12,11,94,81];
console.log(sameBsts(arr1, arr2)); //true
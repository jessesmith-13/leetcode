// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {
  //declare variables: result([]), queue([])
  result = [], queue = [];
  //add the root to the queue
  queue.push(root);
  //while the queue's length is greater than 0
  while (queue.length > 0) {
    //declare vars: currentLevel([]), levelSize is equal to the length of the queue
    let currentLevel = [], levelSize = queue.length;
    //iterate through the levelSize
    for (let i = 0; i < levelSize; i++) {
      //pop off the first node in the queue and save it to currentNode
      let currentNode = queue.shift();
      //add the current node's value to the current level
      currentLevel.push(currentNode.value);
      if (currentNode.left !== null) {
        //push left into the queue
        queue.push(currentNode.left);
      }
      //if the right isn't null
      if (currentNode.right !== null) {
        //push the right into the queue
        queue.push(currentNode.right);
      }
    }
    //push the current level into the result
    result.push(currentLevel);
    //if the left isn't null
  }
  console.log(result);
  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);

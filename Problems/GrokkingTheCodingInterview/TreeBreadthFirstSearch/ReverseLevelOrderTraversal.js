// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, 
// i.e., the lowest level comes first. You should populate the values of all nodes in each level from left 
// to right in separate sub-arrays.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const traverse = function(root) {
  //declare vars: result([]), queue ([]), levelSize
  let result = [],
    levelSize,
    queue = [];
  //push the current node into the queue
  queue.push(root);
  //while the length of the queue is greater than 0
  while (queue.length > 0) {
    //declare var: currentLevel([])
    let currentLevel = [];
    //the levelSize is the length of the queue
    levelSize = queue.length;
    //iterate through the current levelSize
    for (let i = 0; i < levelSize; i++) {
      //shift off the currentNode
      let currentNode = queue.shift();
      //add the current nodes value to the current Level
      currentLevel.push(currentNode.value);
      //if the left is truthy
      if (currentNode.left) {
        //push the left node into the queue
        queue.push(currentNode.left);
      }
      //if the right node is truthy
      if (currentNode.right) {
        //push the right node into the queue
        queue.push(currentNode.right);
      }
    }
    //add the currentLevel to the result
    result.push(currentLevel);
  }
  //return the result reversed
  return result.reverse();
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)

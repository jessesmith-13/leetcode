function invertBinaryTree(tree) {
  let queue = [tree];
  let invertedTree = new BinaryTree(tree.value)
  while (queue.length) {
    let current = queue.shift();
    if (current === null) {
      continue;
    }
    reverseLeftAndRightNodes(current);
    queue.push(current.left);
    queue.push(current.right);
  }
  return invertedTree;
}

function reverseLeftAndRightNodes(node) {
  const left = node.left;
  node.left = node.right;
  node.right = left;
  return node;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);
console.log(tree);
console.log(reverseLeftAndRightNodes(tree));
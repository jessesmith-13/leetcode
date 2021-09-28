// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const binaryTree = (value) => {
  const tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
}

const inorderTraversal = (root) => {
  const values = [];
  const traversal = (node) => {
    //check for lefts, if there are
    if (node.left) {
      //call recursion on left
      traversal(node.left);
    } 
    values.push(node.value);
    //check for right, if there is
    if (node.right) {
      //call recursion on right
      traversal(node.right);
    }
  }
  traversal(root)
  return values;
}

let newBinaryTree = binaryTree('A');
newBinaryTree.left = binaryTree('B');
newBinaryTree.left.left = binaryTree('D')
newBinaryTree.left.right = binaryTree('E');
newBinaryTree.right = binaryTree('C');
newBinaryTree.right.left = binaryTree('F')
newBinaryTree.right.right = binaryTree('G');

console.log(inorderTraversal(newBinaryTree));
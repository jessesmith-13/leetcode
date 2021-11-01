class BST {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function inOrderTraverse(tree, array) {
  if (tree === null) {
    return;
  }
  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree === null) {
    return
  }
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree === null) {
    return;
  }
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}


let bst = new BST(10);
bst.right = new BST(15);
bst.right.right = new BST(22);
bst.left = new BST(5);
bst.left.right = new BST(5);
bst.left.left = new BST(2);
bst.left.left.left = new BST(1);

console.log(postOrderTraversal(bst, []));
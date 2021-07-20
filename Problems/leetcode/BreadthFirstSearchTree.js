const breadthFirstSearch = (tree) => {
  let result = [];
  let queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}

const depthFirstSearch = (tree) => {
  let result = [];
  const traverse = (node) => {
    result.push(node.value);
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(tree);
  return result;
}

class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new Tree(1);
tree.left = new Tree(2)
tree.right = new Tree(3)
tree.left.left = new Tree(4)
tree.left.right = new Tree(5)
tree.right.left = new Tree(6);
tree.right.right = new Tree(7);

console.log(breadthFirstSearch(tree));
console.log(depthFirstSearch(tree));
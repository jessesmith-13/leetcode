//INCOMPLETE


class Tree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function maxPathSum(tree) {
  let sum = tree.value;

  const findMaxPath = (node) => {
    if (node === null) {
      return;
    }
    findMaxPath(node.right);
    findMaxPath(node.left);
  }
  findMaxPath(tree)
  return sum;
}

let tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4)
tree.left.right = new Tree(5)
tree.right.left = new Tree(6)
tree.right.right = new Tree(7)
console.log(maxPathSum(tree));

//Incomplete

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
  let parents = {};
  parents[tree.value] = null;
  let targetObj;
  let nodesDistanceFromK = [];
  let distance = 0;
  const dfs = (node) => {
    if (node.value === target) {
      targetObj = node;
    }
    if (node.left) {
      parents[node.left.value] = node.value;
      dfs(node.left);
    }
    if (node.right) {
      parents[node.right.value] = node.value;
      dfs(node.right);
    }
  }
  dfs(tree);
  const bfs = (node, distance) => {
    let queue = [node];
    while (queue.length > 0) {
      let cur = queue.shift();

    }
  }
  bfs(targetObj, distance);
  return parents;
}


let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right = new BinaryTree(3);
tree.right.right = new BinaryTree(6);
tree.right.right.left = new BinaryTree(7);
tree.right.right.right = new BinaryTree(8);

// console.log(findNodesDistanceK(tree, 3, 2));
console.log(findNodesDistanceK(tree));
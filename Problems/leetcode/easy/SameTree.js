// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


class TreeNode = (val, left, right) => {
  let node = {};
  node.val = (val===undefined ? 0 : val)
  node.left = (left===undefined ? null : left)
  node.right = (right===undefined ? null : right)
  return node;
}

var isSameTree = function(p, q) {
  const pValues = getTreeValues(p);
  const qValues = getTreeValues(q);
  if (pValues.length !== qValues.length) {
    return false;
  } else {
    for (let i = 0; i < qValues.length; i++) {
      if (pValues[i] !== qValues[i]) {
        return false;
      }
    }
  }
  return true;
};

const getTreeValues = (node) => {
  let values = [];
  const recurseThroughTree = (node) => {
    values.push(node.value);
    if (node.left) {
      recurseThroughTree(node.left);
    }
    if (node.right) {
      recurseThroughTree(node.right);
    }
  }
  recurseThroughTree(node);
  return values;
}

const tree1 = TreeNode(1);
tree1.left = TreeNode(2)
tree1.right = TreeNode(3);
const tree2 = TreeNode(1, 2, 3);

console.log(isSameTree(tree1, tree2));
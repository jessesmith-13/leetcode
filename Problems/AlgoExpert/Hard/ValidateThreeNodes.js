class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.left = null;
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  const nodeTwoVal = nodeTwo.value;
  let descendantVal;
  let nodeTwoFound = false,
  descendantFound = false;

  function binarySearch(node) {
    if (!node) {
      return;
    }
    if (node.value === nodeTwoVal && !descendantFound) {
      nodeTwoFound = true;
    }
    if (node.value === descendantVal && nodeTwoVal) {
      descendantFound = true;
    }
    if (!nodeTwoFound && node.value > nodeTwoVal) {
      binarySearch(node.left);
    } else if (!nodeTwoFound && node.value < nodeTwoVal) {
      binarySearch(node.right);
    } else if (!descendantFound && node.value > descendantVal) {
      binarySearch(node.left);
    } else if (!descendantFound && node.value < descendantVal) {
      binarySearch(node.right);
    }
  }
  descendantVal = nodeThree.value
  binarySearch(nodeOne);
  if (nodeTwoFound && descendantFound) {
    return true;
  }
  descendantVal = nodeOne.value;
  nodeTwoFound = false;
  descendantFound = false;
  binarySearch(nodeThree);
  return nodeTwoFound && descendantFound;
}



const bst = new BST(6);
bst.right = new BST(8);
bst.left = new BST(4);
bst.left.left = new BST(2);
bst.left.right = new BST(5);
bst.right.left = new BST(7);
bst.right.right = new BST(9);
bst.left.left.left = new BST(1);
bst.left.left.right = new BST(3);
console.log(validateThreeNodes(bst.right.right, bst.right, bst)); //9,8,6
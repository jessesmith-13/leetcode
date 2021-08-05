// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

var isSymmetric = function(root) {
  let level = 2,
    queue = [root[0], root[1]];
  while (queue.length > 0) {
    let pointer1 = 0,
      pointer2 = queue.length - 1;
    while (pointer1 < pointer2) {
      if (queue[pointer1] !== queue[pointer2]) {
        return false;
      }
      pointer1++;
      pointer2--;
    }
    
  }
  return true;
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
console.log(isSymmetric([1, 2, 2, null, 3, null, 3]));

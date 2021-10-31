//Incomplete

function sortStack(stack) {
  return sort(stack);
}

function sort(stack) {
  if (stack.length === 0) {
    return stack;
  }
  const top = stack.pop();
  sort(stack);
  insert(top, stack);
  return stack;
}

function insert(top, stack) {
  if (stack.length === 0 || top > stack[stack.length - 1]) {
    stack.push(top);
    return stack;
  } else {
    const newTop = stack.pop();
    insert(top, stack);
    stack.push(newTop);
  }
}

const stack = [-5, 2, -2, 4, 3, 1];
console.log(sortStack(stack)); // [-5, 2, 1, 2, 3, 4]
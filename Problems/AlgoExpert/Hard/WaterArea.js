function waterArea(heights) {
  let leftMax= getLeftMax(heights);
  let rightMax = getRightMax(heights);
  let total = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = Math.min(leftMax[i], rightMax[i]);
    if (heights[i] < minHeight) {
      total += minHeight - heights[i];
    }
  }
  return total;
}

const getLeftMax = (heights) => {
  let leftMax = [];
    leftMaxHeight = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > leftMaxHeight) {
      leftMaxHeight = heights[i];
    }
    leftMax.push(leftMaxHeight);
  }
  return leftMax;
}
const getRightMax = (heights) => {
  let rightMax = [],
    rightMaxHeight = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > rightMaxHeight) {
      rightMaxHeight = heights[i];
    }
    rightMax.push(rightMaxHeight);
  }
  return rightMax.reverse();
}

let heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]; //48
             //0, 0, 8, 16,19,27,35, 0, 38,40,42,45
console.log(getRightMax(heights))
console.log(getLeftMax(heights))
console.log(waterArea(heights));
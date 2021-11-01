// Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.

// A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.

// The input array named buildings contains positive, non-zero integers representing the heights of the buildings. 
// A building at index i thus has a height denoted by buldings[i]. All of the buildings face the same direction, and this direction is either east or west,
// denoted by the input string named direction, which will always be equal to either "EAST" or "WEST". In relation to the input
// array, you can interpret these directions as right for east and left for west.

// Important note: the indeces in the output array should be sorted in ascending order.

function sunsetViews(buildings, direction) {
  const buildingsWithSunsetViews = [];
  let reversed = false;
  if (direction === 'WEST') {
    buildings = buildings.reverse();
    reversed = true;
  }
  for (let i = 0; i < buildings.length; i++) {
    if (canSeeSunset(i, buildings[i], buildings)) {
      if (reversed) {
        buildingsWithSunsetViews.push(buildings.length - 1 - i);
      } else {
        buildingsWithSunsetViews.push(i);
      }
    }
  }
  if (reversed) {
    return buildingsWithSunsetViews.reverse();
  }
  return buildingsWithSunsetViews;
}

function canSeeSunset(buildingIndex, buildingHeight, buildings) {
  let i = buildingIndex + 1;
  while (i < buildings.length) {
    if (buildings[i] >= buildingHeight) {
      return false;
    }
    i++;
  }
  return true;
}

const buildings = [3, 5, 4, 4, 3, 1, 3, 2]; //[1, 3, 6, 7]
const direction = 'EAST'
console.log(sunsetViews(buildings, direction));
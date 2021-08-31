// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between 
// all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.
// The bus goes along both directions i.e. clockwise and counterclockwise.
// Return the shortest distance between the given start and destination stops.

 

// Example 1:

// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
 

// Example 2:

// Input: distance = [1,2,3,4], start = 0, destination = 2
// Output: 3
// Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.
 

// Example 3:

// Input: distance = [1,2,3,4], start = 0, destination = 3
// Output: 4
// Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

var distanceBetweenBusStops = function(distance, start, destination) {
  return Math.min(findClockWiseDistance(distance, start, destination), findCounterClockwiseDistance(distance, start, destination));
};

const findClockWiseDistance = (distance, start, destination) => {
  let sum = 0;
  while (start !== destination) {
    sum += distance[start];
    if (start === distance.length - 1) {
      start = 0;
    } else {
      start++;
    }
  }
  console.log('clockwise', sum);
  return sum;
}

const findCounterClockwiseDistance = (distance, start, destination) => {
  let sum = 0;
  while (start !== destination) {
    if (start === 0) {
      start = distance.length - 1;
    } else {
      start--;
    }
    sum += distance[start];
  }
  console.log('counterclockwise', sum);
  return sum;
}

console.log(distanceBetweenBusStops([1,2,3,4], 0, 3));
// console.log(distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2));
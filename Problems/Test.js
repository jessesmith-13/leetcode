let map = new Map();
map.set(2, true)
console.log(map.has(2));
// console.log(map);


// const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// const routes = [
//   ['PHX', 'LAX'],
//   ['PHX', 'JFK'],
//   ['JFK', 'OKC'],
//   ['JFK', 'HEL'],
//   ['JFK', 'LOS'],
//   ['MEX', 'LAX'],
//   ['MEX', 'BKK'],
//   ['MEX', 'LIM'],
//   ['MEX', 'EZE'],
//   ['LIM', 'BKK']
// ]
// const adjacencyList = new Map();

// const addNode = (airport) => {
//   adjacencyList.set(airport, []);
// }

// const addEdge = (origin, destination) => {
//   adjacencyList.get(origin).push(destination);
//   adjacencyList.get(destination).push(origin);
// }

// airports.forEach(addNode);
// routes.forEach(route => addEdge(...route));
// console.log(adjacencyList);

// const bfs = (start) => {
//   const queue = [start];

//   while (queue.length > 0) {
//     const airport = queue.shift();

//     const destinations = adjacencyList.get(airport);

//     for (const destination of destinations) {

//       console.log(destination);
//       queue.push(destination);

//       if (desination ===' BKK') {
//         console.log('found it!')
//       }
//     }
//   }
// }


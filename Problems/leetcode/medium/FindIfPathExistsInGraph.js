// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex start to vertex end.

// Given edges and the integers n, start, and end, return true if there is a valid path from start to end, or false otherwise.


// Example 1:


// Input: n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:


// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

var validPath = function(n, edges, start, end) {
  const adjList = {};
  for (let i = 0; i < edges.length; i++) {
    let node1 = edges[i][0];
    let node2 = edges[i][1];
    if (!adjList[node1]) {
      adjList[node1] = [node2];
    } else {
      adjList[node1].push(node2);
    }
    if (!adjList[node2]) {
      adjList[node2] = [node1];
    } else {
      adjList[node2].push(node1);
    }
  }
  return DFS(adjList, start, end);
};

function DFS(adjList, start, end) {
  const visisted = [];
  const go = (adjList, start, end) => {
    let curArray = adjList[start];
    visisted.push(start);
    for (let i = 0; i < curArray.length; i++) {
      if (curArray[i] === end) {
        return true;
      }
      if (!visisted.includes(curArray[i])) {
        go(adjList, curArray[i], end);
      }
    }
    return false;
  }
  return go(adjList, start, end);
}

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));

let adjList = {
  '0': [1, 2],
  '1': [0, 2],
  '2': [1, 0]
}

//visted = [0, 1]
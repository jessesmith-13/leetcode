class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1); 
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1].includes(v2) && this.adjacencyList[v2].includes(v1)) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
    }
  }

  removeVertex(v) {
    const connections = this.adjacencyList[v];
    for (let i = 0; i < connections.length; i++) {
      let currentVertex = connections[i];
      this.removeEdge(v, currentVertex);
    }
    delete this.adjacencyList[v];
  }

  dfs(start) {
    //declare visited obj, output arr, adj list
    let visited = {},
      output = [],
      adjList = this.adjacencyList;
    //declare helper func
    const go = (vertex) => {
      //base case: if there's no node, just return up the stack
      if (!vertex) return;
      //add vertex to visited
      visited[vertex] = true;
      //push vertex to output
      output.push(vertex);
      //iterate through the neighbors
      adjList[vertex].forEach(neighbor => {
        //if the neighbor hasn't been visited already
        if (!visited[neighbor]) {
          //call the recursion on the neighbor!
          go(neighbor);
        }
      })
    }
    //call helper func on the start
    go(start);
    //return output arr
    return output;
  }

  bfs(start) {
    let queue = [start],
      output = [],
      visited = [start],
      curVertex;
    while (queue.length) {
      curVertex = queue.shift();
      output.push(curVertex);
      this.adjacencyList[curVertex].forEach(neighbor => {
        if (!visited.includes(neighbor)) {
          visited.push(neighbor);
          queue.push(neighbor);
        }
      })
    }
    return output;
  }
}

let g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g);
console.log(g.bfs('A'));
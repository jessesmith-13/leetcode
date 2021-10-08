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

  bfs(start) {
    //declare visited obj, empty
    const visited = {};
    //declare adjList
    const adjList = this.adjacencyList;
    //declare results arr
    const results = [];
    //declare helper func, takes in a vertex
    const traverse = (v) => {
      //base case: if vertex is falsey, return
      if (!v) return;
      //add vertex to visited
      visited[v] = true;
      //push vertex to results
      results.push(v);
      //iterate through neighbors of the vertex
      adjList[v].forEach(neighbor => {
        //if the current node isn't in visited
        if (!visited[neighbor]) {
          //call recursive func on it!
          traverse(neighbor);
        }
      })
    }
    //call helper func
    traverse(start);
    //return results
    return results;
  }
}

let g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B');
g.addEdge('B', 'C');
console.log(g);
console.log(g.bfs('C'));
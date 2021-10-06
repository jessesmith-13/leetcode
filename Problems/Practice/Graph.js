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
}

let g = new Graph;
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addEdge(1, 3);
g.addEdge(2, 1);
g.removeVertex(3);
g.removeVertex(2);
console.log(g);
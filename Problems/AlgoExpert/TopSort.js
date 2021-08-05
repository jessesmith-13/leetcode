//INCOMPLETE

function topologicalSort(jobs, deps) {
  // Write your code here.
}

class JobsGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }

  addNode(job) {
    this.graph[job] = new Node(job);
    this.nodes.push(this.graph[job]);
  }
}

class Node {
  constructor(job) {
    this.prereqs = [];
    this.job = job;
    this.visisted = false;
    this.visiting = false;
  }
}
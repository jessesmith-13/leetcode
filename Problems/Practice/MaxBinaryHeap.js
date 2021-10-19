class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  
  insert(value) {
    let heap = this.heap;
    heap.push(value);
    let curIndex = heap.length - 1,
      parentIndex = Math.floor((curIndex - 1)/2);
    while (heap[curIndex] > heap[parentIndex] && typeof heap[parentIndex] !== undefined) {
      if (heap[curIndex] > heap[parentIndex]) {
        [heap[curIndex], heap[parentIndex]] = [heap[parentIndex], heap[curIndex]]
        curIndex = parentIndex;
      }
    }
  }

  remove() {
    const max = this.heap[0],
    last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return max;
  }
  
  bubbleDown() {
    let idx = 0,
      leftChildIdx,
      rightChildIdx,
      length = this.heap.length;
    while (true) {
      leftChildIdx = idx * 2 + 1;
      rightChildIdx = idx * 2 + 2;
      let rightChild, leftChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild > this.heap[idx]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if ((!swap && rightChild > this.heap[idx]) || (swap && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (!swap) {
        break;
      }
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }

  }
}

let newHeap = new MaxBinaryHeap();
newHeap.insert(101);
newHeap.insert(200);
newHeap.insert(5);
newHeap.insert(7);
newHeap.insert(9);
newHeap.insert(10);
newHeap.insert(6);
console.log(newHeap.remove());
console.log(newHeap.remove());
console.log(newHeap.remove());
console.log(newHeap.remove());
console.log(newHeap.remove());
console.log(newHeap.remove());
console.log(newHeap.remove());
console.log(newHeap);

//[200, 101, 100, 5]
class MedianFinder {
  constructor() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
  }

  addNum(num) {
    this.minHeap.enqueue(num);
    this.maxHeap.enqueue(this.minHeap.dequeue().element);

    if (this.minHeap.size() < this.maxHeap.size()) {
      this.minHeap.enqueue(this.maxHeap.dequeue().element);
    }
  }

  findMedian() {
    let firstMinHeap = this.minHeap.front().element;

    if (this.minHeap.size() > this.maxHeap.size()) {
      return firstMinHeap;
    } else {
      let firstMaxHeap = this.maxHeap.front().element;

      return (firstMinHeap + firstMaxHeap) / 2;
    }
  }
}

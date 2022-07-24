const lastStoneWeight = (stones) => {
  let priorityQueue = new MaxPriorityQueue();

  for (let stone of stones) {
    priorityQueue.enqueue(stone);
  }

  while (priorityQueue.size() > 1) {
    let y = priorityQueue.dequeue().element;
    let x = priorityQueue.dequeue().element;

    if (y !== x) {
      priorityQueue.enqueue(y - x);
    }
  }

  return priorityQueue.isEmpty() ? 0 : priorityQueue.dequeue().element;
};

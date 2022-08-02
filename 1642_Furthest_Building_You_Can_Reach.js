const furthestBuilding = (heights, bricks, ladders) => {
  let pq = new MaxPriorityQueue();

  for (let i = 0; i < heights.length - 1; i++) {
    let diff = heights[i + 1] - heights[i];

    if (diff <= 0) {
      continue;
    }

    if (bricks < diff && ladders > 0) {
      ladders -= 1;

      if (!pq.isEmpty() && pq.front().element > diff) {
        let maxDiff = pq.dequeue().element;

        bricks += maxDiff;
      } else {
        continue;
      }
    }

    bricks -= diff;

    if (bricks < 0) {
      return i;
    }

    pq.enqueue(diff);
  }

  return heights.length - 1;
};

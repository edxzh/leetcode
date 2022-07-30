const minRefuelStops = (target, startFuel, stations) => {
  stations.push([target, 0]);

  let cur = startFuel;
  let result = 0;

  let pq = new MaxPriorityQueue();
  let last = 0;

  for (let [i, fuel] of stations) {
    cur -= i - last;

    while (cur < 0 && !pq.isEmpty()) {
      cur += pq.dequeue().element;
      result += 1;
    }

    if (cur < 0) {
      return -1;
    }

    pq.enqueue(fuel);

    last = i;
  }

  return result;
};

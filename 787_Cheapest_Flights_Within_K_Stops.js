const findCheapestPrice = (_n, flights, src, dst, k) => {
  const graph = new Map();

  for (let [start, end, cost] of flights) {
    if (graph.has(start)) graph.get(start).push([end, cost]);
    else graph.set(start, [[end, cost]]);
  }

  const queue = new MinPriorityQueue({
    compare: (a, b) => a[0] > b[0],
  });

  queue.enqueue([0, src, k + 1]);
  const visited = new Map();

  while (queue.size()) {
    const [cost, city, stops] = queue.dequeue();
    visited.set(city, stops);

    if (city === dst) return cost;
    if (stops <= 0 || !graph.has(city)) continue;
    for (let [nextCity, nextCost] of graph.get(city)) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1)
        continue;
      queue.enqueue([cost + nextCost, nextCity, stops - 1]);
    }
  }

  return -1;
};;

const networkDelayTime = (times, n, k) => {
  const dijkstra = (graph, start, _end) => {
    let priorityQueue = [[0, start]];
    let map = {};

    while (priorityQueue.length !== 0) {
      const [cost, u] = priorityQueue.pop();
      if (map[u] !== undefined) {
        continue;
      }
      map[u] = cost;

      if (graph[u] !== undefined) {
        for (let [v, c] of graph[u]) {
          if (map[v] !== undefined) {
            continue;
          }

          let next = cost + c;
          priorityQueue.push([next, v]);
          priorityQueue.sort((a, b) => {
            if (a[0] === b[0]) {
              return b[1] - a[1];
            } else {
              return b[0] - a[0];
            }
          });
        }
      }
    }

    return map;
  };

  let graph = {};

  for (let [from, to, cost] of times) {
    if (graph[from - 1] !== undefined) {
      graph[from - 1].push([to - 1, cost]);
    } else {
      graph[from - 1] = [[to - 1, cost]];
    }
  }

  let dist = dijkstra(graph, k - 1, n);
  let values = Object.values(dist);

  if (values.length !== n) {
    return -1;
  } else {
    return Math.max(...values);
  }
};

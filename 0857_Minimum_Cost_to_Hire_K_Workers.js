const mincostToHireWorkers = (quality, wage, k) => {
  let effs = quality.map((q, i) => [q / wage[i], q]);
  effs.sort((a, b) => b[0] - a[0]);

  let pq = new MinPriorityQueue();
  let result = Infinity;
  let total = 0;

  for (let eff of effs) {
    let [rate, q] = eff;

    pq.enqueue(-q);
    total += q;

    if (pq.size() > k) {
      total += pq.dequeue().element;
    }

    if (pq.size() === k) {
      result = Math.min(result, total / rate);
    }
  }

  return result;
};

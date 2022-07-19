const nthSuperUglyNumber = (n, primes) => {
  let pq = new MinPriorityQueue();

  let count = 0;
  let result = 1;

  let retrivedElements = new Set();

  pq.enqueue(result);

  while (count < n) {
    result = pq.dequeue().element;

    count++;

    for (let i = 0; i < primes.length; i++) {
      let element = result * primes[i];

      if (!retrivedElements.has(element)) {
        retrivedElements.add(element);
        pq.enqueue(element);
      }
    }
  }

  return result;
};

const topKFrequent = (nums, k) => {
  let map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let result = [];

  let sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a]);

  for(let i = 0; i < k; i++){
    result.push(sortedKeys[i]);
  }

  return result;
};

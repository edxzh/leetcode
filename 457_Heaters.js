const findRadius = (houses, heaters) => {
  heaters.sort((a, b) => a - b);
  return Math.max(...houses.map(h => findMinDistance(h, heaters)));
};

const findMinDistance = (house, heaters) => {
  let left = 0;
  let right = heaters.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    let curHeater = heaters[mid];
    let nextHeater = heaters[mid + 1];

    if (curHeater <= house && house <= nextHeater) {
      return Math.min(house - curHeater, nextHeater - house);
    } else if (curHeater <= house) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (left === 0) return heaters[0] - house;
  if (left === heaters.length) return house - heaters[heaters.length - 1];

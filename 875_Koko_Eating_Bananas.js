const minEatingSpeed = (piles, h) => {
  const canEatAll = (piles, h, mid) => {
    let hoursNeeded = 0;

    for (let pile of piles) {
      hoursNeeded += Math.ceil(pile / mid);
    }

    return hoursNeeded <= h;
  }

  let l = 0;
  let r = Math.max(...piles);

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (canEatAll(piles, h, mid)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

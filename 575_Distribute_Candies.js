const distributeCandies = (candyType) => {
  const candyTypeSet = new Set(candyType);

  return Math.min(candyTypeSet.size, candyType.length / 2);
};

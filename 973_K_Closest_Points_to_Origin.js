const kClosest = (points, k) => {
  let sortedPoints = points.sort((a, b) => ((a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])));

  return sortedPoints.slice(0, k)
};

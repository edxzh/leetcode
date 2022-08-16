const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    let cur = prices[i];
    let next = prices[i + 1];

    if (next > cur) {
      profit += next - cur;
    }
  }

  return profit;
};

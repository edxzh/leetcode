const maxProfit = (prices) => {
  let profit = 0;
  let buyPrice = prices[0];
  let sellPrice = prices[0];

  for (let curPrice of prices) {
    if (curPrice < buyPrice) {
      buyPrice = curPrice;
      sellPrice = curPrice;
    }

    if (curPrice > sellPrice) {
      let curProfit = curPrice - buyPrice;
      profit = Math.max(profit, curProfit);
    }
  }

  return profit;
};

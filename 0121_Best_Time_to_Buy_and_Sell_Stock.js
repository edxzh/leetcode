const maxProfit = (prices) => {
  let profit = 0;
  let buyPrice = prices[0];
  let sellPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let curPrice = prices[i];

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

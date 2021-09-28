//Input: Array of prices where prices[i] is the price of a stock on any given day. You want to maximize your profit by choosing a single day to buy said stock and choose a different day in the future to
// sell that stock.
//output: maximum profit for that array of stock prices.
//*If you cannot make a profit, return 0

//example1: input: prices = [7, 1, 5, 3, 6, 4] output: 5
//example2: input: prices = [7, 6, 4, 3, 1] output: 0

const maximizeProfits = (stockPrices) => {
  let maximumProfit = 0,
    start = 0,
    end;
  while (start <= stockPrices.length - 2) {
    end = start + 1;
    while (end <= stockPrices.length - 1) {
      let profit = stockPrices[end] - stockPrices[start];
      if (profit > maximumProfit) {
        maximumProfit = profit;
      }
      end++;
    }
    start++;
  }
  return maximumProfit;
}

console.log(maximizeProfits([7,1,5,3,6,4]));
console.log(maximizeProfits([7,6,4,3,1]));
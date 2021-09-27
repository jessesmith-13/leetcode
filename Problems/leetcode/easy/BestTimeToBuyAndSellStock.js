//Input: Array of prices where prices[i] is the price of a stock on any given day. You want to maximize your profit by choosing a single day to buy said stock and choose a different day in the future to
// sell that stock.
//output: maximum profit for that array of stock prices.
//*If you cannot make a profit, return 0

//example1: input: prices = [7, 1, 5, 3, 6, 4] output: 5
//example2: input: prices = [7, 6, 4, 3, 1] output: 0

const maximizeProfits = (stockPrices) => {
  //initiate a maximumProfit var, starting at 0;
  //define a start and end, start being 0, end being start + 1
  let maximumProfit = 0,
    start = 0,
    end;
  //iterate through stock prices
  while (start <= stockPrices.length - 2) {
    end = start + 1;
    //iterate through stock prices
    while (end <= stockPrices.length - 1) {
      //define profit as right minus left
      let profit = stockPrices[end] - stockPrices[start];
      //check to see if profit is greater than maximumProfit, and if so
      if (profit > maximumProfit) {
        //set maximumProfit to profit
        maximumProfit = profit;
      }
      end++;
    }
    start++;
  }
  //return maximumProfit
  return maximumProfit;
}
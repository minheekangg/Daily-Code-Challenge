/**
 * completed 9/9/2020
*/

/**
 *Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

getMaxProfit([10, 7, 5, 8, 11, 9]) ==> 6:  buy $5 sell at $11;
getMaxProfit([10, 9, 8, 7, 5, 4, 2]) ==> -1: buy at $10 sell at $9;
getMaxProfit([2 ]) ==> throw error

 */

const getMaxProfit = function(arr) {
    //edge case: input less than 2.
    if (arr.length < 2) {
        // throw new Error('must have at least two times')
        return null;
    }
    // init buy value + profit value;
    let buy = arr[0];
    let profit = arr[1] - arr[0];

    // start looking from 1st idx
    for (let i = 1; i < arr.length; i++) {
        // calculate max profit by subtracting current from lowest.
        profit = Math.max(profit, (arr[i] - buy));

        // *NOTE* set min buy AFTER profit is calculated;
        buy = Math.min(buy, arr[i]);
    }
    return profit;
}

module.exports = getMaxProfit;
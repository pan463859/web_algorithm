/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
 var maxProfit = function (prices, fee) {
    let result = 0
    const taxfreePrices = prices.slice().map(item => item - fee)
    let minPrice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        if (taxfreePrices[i] > minPrice) {
            result += taxfreePrices[i] - minPrice
            // 当我们卖出一支股票时，我们就立即获得了以相同价格并且免除手续费买入一支股票的权利。(假装卖了，其实没有)
            minPrice = taxfreePrices[i]
        }
    }
    return result
};
// @lc code=end


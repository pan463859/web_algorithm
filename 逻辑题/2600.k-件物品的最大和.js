/*
 * @lc app=leetcode.cn id=2600 lang=javascript
 *
 * [2600] K 件物品的最大和
 */

// @lc code=start
/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    const arr = new Array()
    while (numOnes) {
        arr.push(1)
        numOnes--
    }
    while (numZeros) {
        arr.push(0)
        numZeros--
    }
    while (numNegOnes) {
        arr.push(-1)
        numNegOnes--
    }
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    return sum
};
// @lc code=end


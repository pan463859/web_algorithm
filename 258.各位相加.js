/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    num = String(num)
    while (num.length > 1) {
        num = String(num.split('').reduce(function (res, cur) {
            return Number(res) + Number(cur)
        },0))
    }
    return Number(num)
}
// @lc code=end


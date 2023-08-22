/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const _n = String(n)
    let plusRes = 1
    let mulRes = 0
    for (let i = 0; i < _n.length; i++) {
        plusRes = plusRes * Number(_n[i])
        mulRes += Number(_n[i])
    }
    return mulRes - plusRes
};
subtractProductAndSum(234)
// @lc code=end


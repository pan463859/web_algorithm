/*
 * @lc app=leetcode.cn id=2178 lang=javascript
 *
 * [2178] 拆分成最多数目的正偶数之和
 */

// @lc code=start
/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
    if (finalSum & 2 !== 0) {
        return []
    }
    const res = []
    finalSum
    let cur = 2
    while (finalSum > 0) {
        finalSum -= cur
        res.push(cur)
        cur = cur + 2
    }
    if (finalSum < 0) {
        let lastone = res.pop()
        let realfinal = lastone + finalSum + res[res.length - 1]
        res[res.length - 1] = realfinal
        return res
    }
    return res
};
// @lc code=end


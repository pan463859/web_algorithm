/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const sortedIntervals = intervals.sort(function (a, b) {
        return a[0] - b[0]
    })
    const res = []
    let preRange = sortedIntervals[0]
    for (let i = 1; i < sortedIntervals.length; i++) {
        const nextRange = sortedIntervals[i];
        // 下一个区间左侧在上一个区间内
        if (nextRange[0] > preRange[1]) {
            res.push(preRange)
            preRange = nextRange

        } else {
            preRange = [preRange[0], Math.max(preRange[1], nextRange[1])]
        }
    }
    res.push(preRange)
    return res
};
// @lc code=end


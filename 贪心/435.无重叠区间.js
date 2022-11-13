/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 
/**### 解题思路
 1.如果想要删除的最少，换句话说就是保留最多。
 2.保留最多的方法就是按照右边界排序后每次保留最短的一个区间，只有这样才能保证保留最多的区间下来
**/ 
 var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => {
        return a[1] - b[1]
    })
    let curright = intervals[0][1]
    let res = 0
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= curright) {
            curright = intervals[i][1]
        } else {
            res++
        }
    }
    return res
};
// @lc code=end


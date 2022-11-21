/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let zimudictionary = {};
    let res = []
    // 得到每个字母结束下标
    for (let i = 0; i < s.length; i++) {
        zimudictionary[s[i]] = [i]
    }
    // 找切割点
    let start = 0
    let end = 0
    let i = 0
    while (i < s.length) {
        const curchar = s[i]
        const curend = zimudictionary[curchar][0]
        end = Math.max(end, curend)
        if (end == i) {
            res.push(end - start + 1)
            start = end + 1
        }
        i++
    }
    return res
};
// @lc code=end


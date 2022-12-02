/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (s == null || p == null) return false;

    const sLen = s.length, pLen = p.length;

    const dp = new Array(sLen + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
    }
    dp[0][0] = true;
    //  "aab"  "c*a*b"
    for (let j = 1; j < pLen + 1; j++) {
        if (p[j - 1] == "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }
    for (let i = 1; i < sLen + 1; i++) {
        for (let j = 1; j < pLen + 1; j++) {

            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
                if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    console.log(dp)
    return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};
// @lc code=end


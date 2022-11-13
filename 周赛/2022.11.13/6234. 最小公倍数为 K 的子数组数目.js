/**
 * 
 * @param {*} low 
 * @param {*} high 
 * @param {*} zero 
 * @param {*} one 
 * @returns 
 * 
 * 给你整数 zero ，one ，low 和 high ，我们从空字符串开始构造一个字符串，每一步执行下面操作中的一种：

将 '0' 在字符串末尾添加 zero  次。
将 '1' 在字符串末尾添加 one 次。
以上操作可以执行任意次。

如果通过以上过程得到一个 长度 在 low 和 high 之间（包含上下边界）的字符串，那么这个字符串我们称为 好 字符串。

请你返回满足以上要求的 不同 好字符串数目。由于答案可能很大，请将结果对 109 + 7 取余 后返回。
 */


// 爬楼梯变形，从 1 到 low 给出dp 值 最后累加 low 到 high 的 dp 即可求到答案
var countGoodStrings = function (low, high, zero, one) {
    let dp = Array(high + 1).fill(0)
    dp[0] = 1
    let mod = 1e9 + 7, ans = 0
    for (let i = 0; i <= high; i++) {
        if (i >= zero) dp[i] += dp[i - zero]
        if (i >= one) dp[i] += dp[i - one]
        dp[i] %= mod
        if (i >= low) ans = (ans + dp[i]) % mod
    }
    return ans
};

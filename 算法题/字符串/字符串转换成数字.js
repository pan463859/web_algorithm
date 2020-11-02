/**
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
 * 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 
输入: "42"
输出: 42
输入: " -42"
输出: -42
输入: "words and 987"
输出: 0
输入: "4193 with words"
输出: 4193
输入: "-91283472332"
输出: -2147483648
*/
const myAtoi = function (str) {
    const reg = /\s*([-\+]?[0-9]).*/
    const groups = str.match(reg)
    const max = Math.pow(2, 31) - 1
    const min = -max - 1
    let targetnum = 0
    if (groups) {
        targetnum = groups[1]
        if (isNaN(targetnum)) {
            targetnum = 0
        }
    }
    // 卡口判断
    if (targetNum > max) {
        return max
    } else if (targetNum < min) {
        return min
    }
    // 返回转换结果
    return targetNum
}


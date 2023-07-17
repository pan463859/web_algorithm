/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const maxlength = Math.max(num1.length, num2.length)
    let isAdd = false
    let res = ''
    for (let i = 1; i <= maxlength; i++) {
        const add1 = Number(num1[num1.length - i] || '0')
        const add2 = Number(num2[num2.length - i] || '0')
        const temp = add1 + add2 + (isAdd ? 1 : 0)
        isAdd = temp >= 10 ? true : false
        res = String(temp % 10) + res
    }
    return isAdd ? '1' + res : res
};
// @lc code=end


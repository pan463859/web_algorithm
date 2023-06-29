/*
 * @lc app=leetcode.cn id=1253 lang=javascript
 *
 * [1253] 重构 2 行二进制矩阵
 */
var reconstructMatrix = function (upper, lower, colsum) {
    // 每行每列的数字选择性不同，一共就两列，有些可 0 可 1 ，有写没得选，根据当前情况决定是否要回溯
    // 因为一共就只有两行，所以会简单许多，纵向如果是 0 就只能是 0， 纵向如果是 1 就看情况，纵向如果是 2 就只能是 1
    // 新建一个结果数组
    const res = new Array(2).fill(0).map(item => new Array(colsum.length).fill(0))
    // uppper 和 lower 谁大谁先放咯
    for (let i = 0; i < colsum.length; i++) {
        if (colsum[i] == 0) {
            res[0][i] = 0
            res[1][i] = 0
            continue
        }
        if (colsum[i] == 2) {
            res[0][i] = 1
            res[1][i] = 1
            upper--
             lower--
            continue
        }
        if (upper > lower) {
            res[0][i] = 1
            res[1][i] = 0
            upper--
        } else {
            res[0][i] = 0
            res[1][i] = 1
            lower--
        }
    }
    return upper == 0 && lower == 0 ? res : []
};
// @lc code=end


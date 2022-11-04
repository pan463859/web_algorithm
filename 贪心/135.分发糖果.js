/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
// var candy = function (ratings) {
//     const resl = new Array(ratings.length).fill(1)
//     const resr = new Array(ratings.length).fill(1)
//     const res = new Array(ratings.length).fill(1)
//     for (let i = 0; i < ratings.length; i++) {
//         if (i != 0 && ratings[i] > ratings[i - 1]) {
//             resl[i] = resl[i - 1] + 1
//         }
//     }
//     for (let j = ratings.length - 1; j > -1; j--) {
//         if (j < ratings.length - 1 && ratings[j] > ratings[j + 1]) {
//             resr[j] = resr[j + 1] + 1
//         }
//     }
//     for (let k = 0; k < ratings.length; k++) {
//         res[k] = Math.max(resl[k], resr[k])
//     }
//     return res.reduce((a, b) => a + b)
// };
var candy = function (ratings) {
    const res = new Array(ratings.length).fill(1)
    let i = 0
    let j = res.length - 1
    while (i < res.length) {
        if (i != 0 && ratings[i] > ratings[i - 1]) {
            res[i] = Math.max(res[i - 1] + 1, res[i])
        }
        if (j != res.length - 1 && ratings[j] > ratings[j + 1]) {
            res[j] = Math.max(res[j + 1] + 1, res[j])
        }
        i++;
        j--;
    }

    return res.reduce((a, b) => a + b)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] 到最近的人的最大距离
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let temp_distance = 0
    const distanceSeat = []

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            distanceSeat.push(temp_distance)
            temp_distance = 0
        }
        temp_distance++
    }
    // 最后一个位置到最近一个人的距离
    distanceSeat.push(temp_distance)
    return Math.floor(Math.max(...distanceSeat) / 2)
};
// @lc code=end


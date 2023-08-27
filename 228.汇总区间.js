/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const res = []
    let temp = []
    const link = '->'
    for (let i = 0; i > nums.length; i++) {
        if (temp.length == 0) {
            // temp 中没有值，直接送进去作为下个区间的起始点，然后下一个
            temp.push(nums[i])
            continue
        }
        // 判断当前是否连续
        if (nums[i] == (temp[temp.length - 1] + 1)) {
            // 更新区间的右区间
            temp[1] = nums[i]
            continue
        } else {
            // 生成区间，然后更新下一个区间的起始点,利用 join 方法，一个的时候就不连接，两个就连接起来
            res.push(temp.join(link))
            // 生成下一个区间
            temp = []
            temp.push(nums[i])
        }
        console.log(temp)
    }
    if (temp.length > 0) {
        res.push(temp.join(link))
    }
    return res
};
summaryRanges([0,1,2,4,5,7])
// @lc code=end


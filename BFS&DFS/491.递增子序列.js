
/**

给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

 */
var findSubsequences = function (nums) {
    const res = []

    const backtraking = (nums, temp, startIndex) => {
        temp.length > 1 && res.push(temp.slice())
        if (startIndex === nums.length) {
            return
        }
        const map = new Map()
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] == nums[i - 1] || map.get(nums[i])) {
                continue
            }
            if (temp.length == 0 || nums[i] >= temp[temp.length - 1]) {
                // 使用 map 过滤单层使用过的项
                map.set(nums[i], true)
                temp.push(nums[i])
                backtraking(nums, temp, i + 1)
                temp.pop()
            }
        }
    }
    backtraking(nums, [], 0)
    return res
};
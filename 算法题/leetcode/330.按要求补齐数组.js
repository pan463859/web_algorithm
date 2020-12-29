/*
给定一个已排序的正整数数组 nums，和一个正整数 n 。
从 [1, n] 区间内选取任意个数字补充到 nums 中，使得 [1, n] 区间内的任何数字都可以用 nums 中某几个数字的和来表示。
请输出满足上述要求的最少需要补充的数字个数。
输入: nums = [1,3], n = 6
输出: 1 
解释:
根据 nums 里现有的组合 [1], [3], [1,3]，可以得出 1, 3, 4。
现在如果我们将 2 添加到 nums 中， 组合变为: [1], [2], [3], [1,3], [2,3], [1,2,3]。
其和可以表示数字 1, 2, 3, 4, 5, 6，能够覆盖 [1, 6] 区间里所有的数。
所以我们最少需要添加一个数字。

*/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let sum = 0, max = 1, index = 0, count = 0;
    while (sum < n) {
        if (index >= nums.length || nums[index] > max) {
            console.log(max)
            sum += max;
            count++
        } else {
            sum += nums[index]
            index++
        }
        max = sum + 1
    }
    return count
};
minPatches([2, 2, 10], 100)

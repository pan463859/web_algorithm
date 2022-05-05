/**
给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。

 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//关键在于如何计算符合条件的个数 这个 j-i+1 到底是怎么想出来的？
//每次统计的时候是统计新增的 j 下标范围内新增了多少个连续子数组
var numSubarrayProductLessThanK = function (nums, k) {
    let i = 0;
    let j = 0;
    let temp = 1
    let res = 0
    while (j < nums.length) {
        temp = temp * nums[j]
        while (i <= j && temp >= k) {
            temp = temp / nums[i]
            i++
        }
        res += j - i + 1
        j++
    }
    return res
};
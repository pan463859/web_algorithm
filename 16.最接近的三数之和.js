/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let n = nums.length;
    let best = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; ++i) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let j = i + 1, k = n - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == target) {
                return target;
            }
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }
            if (sum > target) {
                while (j < k - 1 && nums[k - 1] == nums[k]) {
                    k--
                }
                k--
            } else {
                while (j + 1 < k && nums[j + 1] == nums[j]) {
                    j++
                }
                j++
            }
        }
    }
    return best;
}
// @lc code=end


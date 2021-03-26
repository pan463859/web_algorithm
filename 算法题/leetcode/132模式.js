// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

//  

// 进阶：很容易想到时间复杂度为 O(n^2) 的解决方案，你可以设计一个时间复杂度为 O(n logn) 或 O(n) 的解决方案吗？

var find132pattern = function(nums) {
    const n = nums.length;
    const candidate_k = [nums[n - 1]];
    let max_k = -Number.MAX_SAFE_INTEGER;

    for (let i = n - 2; i >= 0; --i) {
        if (nums[i] < max_k) {
            return true;
        }
        while (candidate_k.length && nums[i] > candidate_k[candidate_k.length - 1]) {
            max_k = candidate_k[candidate_k.length - 1];
            candidate_k.pop();
        }
        if (nums[i] > max_k) {
            candidate_k.push(nums[i]);
        }
    }
    return false;
};
find132pattern([1,2,6,5,3,4])

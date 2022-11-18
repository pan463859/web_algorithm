/**
 * 
 * @param {*} low 
 * @param {*} high 
 * @param {*} zero 
 * @param {*} one 
 * @returns 
 * 
 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 nums 的 子数组 中满足 元素最小公倍数为 k 的子数组数目。

子数组 是数组中一个连续非空的元素序列。

数组的最小公倍数 是可被所有数组元素整除的最小正整数。
输入：nums = [3,6,2,7,1], k = 6
输出：4
解释：以 6 为最小公倍数的子数组是：
- [3,6,2,7,1]
- [3,6,2,7,1]
- [3,6,2,7,1]
- [3,6,2,7,1]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 爬楼梯变形，从 1 到 low 给出dp 值 最后累加 low 到 high 的 dp 即可求到答案
var subarrayLCM = function (nums, k) {
    let cnt = 0
    const len = nums.length;

    // 求最大公因数
    const getGCD = (a, b) => {
        if (b == 0) return a;
        return getGCD(b, a % b);
    };
    // 求最小公倍数
    const getLCM = (a, b) => a * b / getGCD(a, b);

    for (let i = 0; i < len; i++) {
        if (k % nums[i]) continue; // 提前剪枝
        let lcm = nums[i];
        for (let j = i; j < len; j++) {
            if (k % nums[j]) break;
            lcm = getLCM(lcm, nums[j]);
            if (lcm === k) cnt += 1;
        }
    }
    return cnt;
};

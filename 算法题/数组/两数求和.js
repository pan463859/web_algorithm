/**
 *  
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
示例: 给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */
const twoSum = function (nums, target) {
    const diffs = {}
    const len = nums.length
    for (let i = 0; i < len; i++) {
        if (diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i]
        }
        diffs[nums[i]] = i
    }
};
//1.做和的题用差来做
//2.活用对象的属性、
//3.时间复杂度为n的二次方的，尝试降低时间复杂度

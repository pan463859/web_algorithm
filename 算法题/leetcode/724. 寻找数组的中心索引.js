/**
 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
输入：
nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
同时, 3 也是第一个符合要求的中心索引。
 */
var pivotIndex = function (nums) {
    if(nums.length==1){
        return 0
    }
    for (let i = 0; i < nums.length; i++) {
        let leftarr = nums.slice(0, i)
        let rightarr = nums.slice(i, nums.length)
        let leftresult = leftarr.reduce((a, b) => {
            return a + b
        }, 0)
        let rightresult = rightarr.reduce((a, b) => {
            return a + b
        }, -nums[i])
        if (leftresult == rightresult) {
            return i
        }
    }
    return -1
};

//官方解答 远远优于自己的解答方案
var pivotIndex = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (2 * sum + nums[i] === total) {
            return i;
        }
        sum += nums[i];
    }
    return -1;
};

pivotIndex([1, 7, 3, 6, 5, 6])
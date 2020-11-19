/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
*/
var moveZeroes = function (nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            i--
        }
    }
    while (len > nums.length) {
        nums.push(0)
    }
    return nums
};
//思路：找零 删零 补零
moveZeroes(
    [0, 0, 1])
/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let res = []
    //维持一个单调递减队列来配合滑动窗口
    let que = []
    //队列初始化
    let j = 0
    for (; j < k; j++) {
        while (que.length > 0 && que[que.length - 1] < nums[j]) {
            que.pop()
        }
        que.push(nums[j])
    }
    res.push(que[0])
    //开始移动窗口
    for (let i = 1; j < nums.length; j++) {
        //判断被踢出去的元素是不是最大值，是的话踢出最大值
        if (nums[i - 1] == que[0]) {
            que.shift()
        }
        while (que.length > 0 && que[que.length - 1] < nums[j]) {
            que.pop()
        }
        que.push(nums[j])
        res.push(que[0])
        i++;
    }
    return res
};
maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)

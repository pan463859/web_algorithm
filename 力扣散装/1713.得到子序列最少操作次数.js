/*
给你一个数组 target ，包含若干 互不相同 的整数，以及另一个整数数组 arr ，arr 可能 包含重复元素。

每一次操作中，你可以在 arr 的任意位置插入任一整数。比方说，如果 arr = [1,4,1,2] ，那么你可以在中间添加 3 得到 [1,4,3,1,2] 。你可以在数组最开始或最后面添加整数。

请你返回 最少 操作次数，使得 target 成为 arr 的一个子序列。

一个数组的 子序列 指的是删除原数组的某些元素（可能一个元素都不删除），同时不改变其余元素的相对顺序得到的数组。比方说，[2,7,4] 是 [4,2,3,7,2,1,4] 的子序列（加粗元素），但 [2,4,2] 不是子序列。

输入：target = [5,1,3], arr = [9,4,2,3,4]
输出：2
解释：你可以添加 5 和 1 ，使得 arr 变为 [5,9,4,1,2,3,4] ，target 为 arr 的子序列。


*/
//题目实际上就是找target和arr中的公共子序列，需要添加的数子的个数就是target.length-公共子序列.length
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
 var minOperations = function (target, arr) {

    //把taget中的数字转换成value:index的键值对存储在map中
    let targetmap = new Map()
    for (let i = 0; i < target.length; i++) {
        targetmap.set(target[i], i)
    }
    //对arr进行下标映射，寻找target和arr的最长递增子序列
    const result = []
    for (let item of arr) {
        //如果arr中的元素存在于target中，则根据其下标添加进单调递增的结果数组中
        if (targetmap.has(item)) {
            let curval = targetmap.get(item)
            //通过二分查找找到节点在result数组中应该出现的位置
            //比如说result数组中空的，则直接push
            //如果result数组中是[0,2],当前的curval是1，则通过二分查找会得到index为1,这时1比2小，所以找到的适合的index就是1，            需要把2的位置让给1
            //如果reuslt数组中是[0,1],当前的curval是2，则需要把result变成[0,1,2]才是符合条件的。
            let indexinresult = binarySearch(result, curval)
            if (indexinresult != result.length) {
                result[indexinresult] = curval
            } else {
                result.push(curval)
            }

        }
    }
    return target.length - result.length
    //

};
function binarySearch(result, curval) {
    const size = result.length
    if (size == 0 || result[size - 1] < curval) {
        return size
    }
    let low = 0;
    let high = size - 1
    while (low < high) {
        let mid = Math.floor((high - low) / 2)+low
        if (result[mid] < curval) {
            low=mid+1
        } else {
            high=mid
        }
    }
    return low
}
minOperations([6,4,8,1,3,2],
    [4,7,6,2,3,8,6,1])

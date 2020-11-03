/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 给定两个数组，编写一个函数来计算它们的交集。
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 */
var intersection = function (nums1, nums2) {
    let modulearr = nums1.length >= nums2.length ? nums2 : nums1
    let comparearr = nums1.length >= nums2.length ? nums1 : nums2
    let tempobj = {}
    let result = {}
    //设置参考对象
    for (let i = 0; i < modulearr.length; i++) {
        tempobj[modulearr[i]] = i
    }
    //寻找交集
    for (let j = 0; j < comparearr.length; j++) {
        if (tempobj[comparearr[j]] !== undefined) {
            result[comparearr[j]] = j
        }
    }
    return Object.keys(result)
}
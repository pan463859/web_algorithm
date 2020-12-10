/**
给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 */
// 经过一段时间的联系，对于双指针的排序可以很熟练的自己写出来对应代码~
var findMedianSortedArrays = function (nums1, nums2) {
    let num1index = 0, num2index = 0, result = []
    for (let i = 0; i < nums1.length + nums2.length; i++) {
        // 某个数组推完了
        if (num2index == nums2.length) {
            result.push(...nums1.slice(num1index, nums1.length))
            break
        }
        if (num1index == nums1.length) {
            result.push(...nums2.slice(num2index, nums2.length))
            break
        }
        if (nums1[num1index] > nums2[num2index]) {
            result.push(nums2[num2index])
            num2index++
        } else {
            result.push(nums1[num1index])
            num1index++
        }
    }
    if (result.length % 2 > 0) {
        return result[Math.floor(result.length / 2)]
    } else {
        return (result[Math.floor(result.length / 2)] + result[Math.floor(result.length / 2) - 1]) / 2
    }
};
findMedianSortedArrays([1, 3],
    [2])

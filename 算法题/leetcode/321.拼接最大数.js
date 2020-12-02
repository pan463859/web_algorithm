/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 * 思路：复杂的问题先拆开看，这个大问题可以拆分成两个小问题来看
 * 1.如何在一个的数组中，取出k个数字，保证按照原始顺序的同时是最大的
 * 2.1问题解决后,剩下的就是如何处理k值的分配问题，在下面问题1后面再来讨论
 * 
 * 
 * 如何解决1的问题呢？
 * 比如nums1为[3,4,6,5],k为1的时候返回6，为2的时候返回65，为3的时候要返回465 为4的时候返回3465
 * 问题1的思路：
 * 设计一个函数，入参为当前数组和需要返回的最大数位数k
 * 找出当前数组内的最大值curmax，当找到最大值下标maxindex的时候后，计算当前位置到数组结尾的数字个数M=curarr.length-maxindex
 * 当M>k：截取maxindex到curarr.length的数组为新数组，k值减1，重复1步骤（但是不需要判断和k值的关系了，因为k一定会小于新数组的长度），并与curmax拼接
 * 当M=k的时候，从maxindex到数组结尾的这些值就是最大值，直接拼接后返回
 * 当M<k的时候，从maxindex到数组结尾的这些值就是最大值，直接拼接后返回，新数组为maxindex之前的数组，k值需要减少curarr.length-maxindex
 * K为0的时候，返回拼接好的字符串即为最大值
 * 
 
 * 
 * eg:nums[3,4,6,5] k=3 
 * 第一次找到的最大值是6，curarr.length-maxindex为2 所以把6,5加进结果的尾数中，k-2
 * 再次找，找到4,curarr.length-maxindex为1 k-1为0 返回结果
 
 * 
 * tips：对数组的操作用slice方法，splice会改变原数组，对递归中的index定位不方便
 * 
 *  * k值的分配问题：先解决谁当老大的问题，用极少的时间复杂度来确认谁是要放在前面的
 * 从1开始递增一个变量i到 当用1方法得到的数更大时，即为结果的高位数来源
 * 确定高位后，分别对两个变量取i和k-i作为k值，取一个max即为返回结果
 * 
 */
var findyourBest = function (arr, k) {
    let curmax = ''
    if (k == 0) {
        return ''
    }
    //当arr的值为1的时候就不用再去寻找max了，max就是arr[0]本身
    if (arr.length == 1) {
        curmax = arr[0]
        return curmax
    }
    //数组长度和k相等 ，直接返回
    if (arr.length == k) {
        return arr.join('')
    }

    //找出当前数组内的最大值curmax
    let maxvalue = Math.max(...arr)
    let maxindex = arr.indexOf(maxvalue)
    if (arr.length - maxindex > k) {
        curmax = String(maxvalue)
        k--
        if (k == 0) {
            return curmax
        } else {
            return curmax + findyourBest(arr.slice(maxindex + 1, arr.length), k)
        }

    } else {
        k = k - (arr.length - maxindex)
        curmax = arr.slice(maxindex, arr.length).join('')
        if (k == 0) {
            return curmax
        } else {
            return findyourBest(arr.slice(0, maxindex), k) + curmax
        }

    }
}
var maxNumber = function (nums1, nums2, k) {
    let max = ''
    //确定谁是老大
    let first, second
    for (let i = 1; i < k; i++) {
        if (findyourBest(nums1, i) == findyourBest(nums2, i)) {
            continue
        } else {
            if (findyourBest(nums1, i) > findyourBest(nums2, i)) {
                first = nums1
                second = nums2
                break
            } else {
                first = nums2
                second = nums1
                break
            }
        }
    }
    //确认老大后，直接去循环分配找最大值
    for (let i = 1, j = k - i; i < k; i++, j = k - i) {
        if (findyourBest(first, i) + findyourBest(second, j) > max) {
            max = findyourBest(first, i) + findyourBest(second, j)
        }
    }
    return Number(max)
};
console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5))
//理解错题目意思了 浪费了很多时间 但是思考的过程没有浪费晚上根据题目意思再思考一下~
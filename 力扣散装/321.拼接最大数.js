
// 思路：复杂的问题先拆开看，这个大问题可以拆分成两个小问题来看
// 1.如何在一个的数组中，取出k个数字，保证按照原始顺序的同时是最大的
// 2.1问题解决后, 剩下的就是如何处理k值的分配问题，在下面问题1后面再来讨论


// 如何解决1的问题呢？
// 比如nums1为[3, 4, 6, 5], k为1的时候返回6，为2的时候返回65，为3的时候要返回465 为4的时候返回3465
// 问题1的思路：
// 设计一个函数，入参为当前数组和需要返回的最大数位数k
// 找出当前数组内的最大值curmax，当找到最大值下标maxindex的时候后，计算当前位置到数组结尾的数字个数M = curarr.length - maxindex
// 当M > k：截取maxindex到curarr.length的数组为新数组，k值减1，重复1步骤（但是不需要判断和k值的关系了，因为k一定会小于新数组的长度），并与curmax拼接
// 当M = k的时候，从maxindex到数组结尾的这些值就是最大值，直接拼接后返回
// 当M < k的时候，从maxindex到数组结尾的这些值就是最大值，直接拼接后返回，新数组为maxindex之前的数组，k值需要减少curarr.length - maxindex
// K为0的时候，返回拼接好的字符串即为最大值



// eg: nums[3, 4, 6, 5] k = 3
// 第一次找到的最大值是6，curarr.length - maxindex为2 所以把6, 5加进结果的尾数中，k - 2
// 再次找，找到4, curarr.length - maxindex为1 k - 1为0 返回结果

// k值的分配问题：分别对两个变量取i和k - i作为k值，取一个max即为返回结果
// 1.通过1的方法可以获得当前两个数组不同的k值拿到的不同最大数的结果
// 2.然后就是喜闻乐见的一个萝卜一个坑的玩法分别定义左指针右指针，数较大的就指针往前走，有一个指针走到头了就把剩下的萝卜全部往result坑里塞就好了
// 3.当两个数一样大的时候，直接看下后面的数谁比较大，大的就指针继续往前
// 4.拿到最后的max 即为返回值


var findyourBest = function (arr, k) {
    let curmax = ''
    if (k == 0) {
        return ''
    }
    //当arr的值为1的时候就不用再去寻找max了，max就是arr[0]本身
    if (arr.length == 1) {
        curmax = String(arr[0])
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
//true则继续推入第一个 false则推入第二个
var getCurMax = function (firstmax, secondmax, k) {
    let firstindex = 0, secondindex = 0
    let cur = []
    for (let resultindex = 0; resultindex < k; resultindex++) {
        //一号数组遍历结束
        if (firstindex == firstmax.length) {
            cur.push(...secondmax.slice(secondindex, secondmax.length))
            break
        }
        //二号数组遍历结束
        if (secondindex == secondmax.length) {
            cur.push(...firstmax.slice(firstindex, firstmax.length))
            break
        }
        if (firstmax[firstindex] > secondmax[secondindex]) {
            cur.push(firstmax[firstindex])
            firstindex++
        }
        //当两个数相同时，看下后面的数谁大
        else if (firstmax[firstindex] == secondmax[secondindex]) {
            if (firstmax.slice(firstindex, firstmax.length).join('') > secondmax.slice(secondindex, secondmax.length).join('')) {
                cur.push(firstmax[firstindex])
                firstindex++
            } else {
                cur.push(secondmax[secondindex])
                secondindex++
            }
        }
        else {
            cur.push(secondmax[secondindex])
            secondindex++
        }
    }
    return cur
}
var maxNumber = function (nums1, nums2, k) {
    if (nums1.length == 0) {
        return findyourBest(nums2, k).split('')
    }
    if (nums2.length == 0) {
        return findyourBest(nums1, k).split('')
    }
    let max = ''
    for (let i = 1, j = k - i; i < k; i++, j = k - i) {
        if (nums1.length < i || nums2.length < j) {
            continue
        }
        let firstmax = findyourBest(nums1, i).split('')
        let secondmax = findyourBest(nums2, j).split('')
        let cur = getCurMax(firstmax, secondmax, k)
        if (cur.join('') > max) {
            max = cur.join('')
        }

    }
    return max.split('')
};
console.log(maxNumber([2, 5, 6, 4, 4, 0],
    [7, 3, 8, 0, 6, 5, 7, 6, 2],
    15))

//理解错题目意思了 浪费了很多时间 但是思考的过程没有浪费晚上根据题目意思再思考一下~
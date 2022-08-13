/*
基于冒泡排序从小大到大排列以下数组
[5,3,2,4,1]
*/
function bubbleSort(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
/**
 * 优化思路：在遍历 n 次后数组末尾部分的数据已经是有序的
 * 可以在第二轮的时候不用再去遍历已经拍好序部分
 */
function betterbubbleSort(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}


/**version3 
 * 排除一开始就是有序的数组
 * 同时之后一担已经拍好序了，就直接return
 * 
*/
function betterbubbleSort(arr) {
    const length = arr.length
    //设置一个标志位，如果标志位没有被改变，说明数组已经拍好序了
    let flag = true
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = false
            }
        }
        if (flag) {
            return arr
        }
    }
    return arr
}


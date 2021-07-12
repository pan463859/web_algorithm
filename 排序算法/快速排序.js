/*
数组分成三部分left、pivot、right，使left<=pivot，right>pivot。
递归处理left
递归处理right
 */
//2021.07.12阅读第二遍
// let arr = [7, 1, 6, 1, 3, 2]
// //需要被替换的位置
// let j = 0
// //基准值
// let pivot = arr[arr.length - 1]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= pivot) {
//         swap(arr, i, j)
//         j++
//     }
// }
// console.log(arr)
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}

function partition(array, start, end) {
    let j = start
    let pivot = array[end]
    for (let i = start; i <= end; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j++)
        }
    }
    return j - 1
}
/**
数组分成三部分left、pivot、right，使left<=pivot，right>pivot。
递归处理left
递归处理right
快速排序是原地算法，不需要额外空间，但递归是需要空间的的（相当于手动维护个调用栈）
总体空间复杂度是O(logn)。相等元素可能会交换前后顺序，因而不是稳定排序（因为交换）。时间复杂度为O(nlogn)
 */
function quickSort(array, start = 0, end = array.length - 1) {
    if (end - start < 1) return array
    let pivotIndex = partition(array, start, end)
    quickSort(array, start, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, end)
    console.log(array)
    return array
}
quickSort([7, 1, 6, 5, 3, 2, 4])
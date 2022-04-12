// /*
// 数组分成三部分left、pivot、right，使left<=pivot，right>pivot。
// 递归处理left
// 递归处理right
//  */
// //2021.07.12阅读第二遍
// // let array = [7, 1, 6, 1, 3, 2]
// // //需要被替换的位置
// // let j = 0
// // //基准值
// // let pivot = array[array.length - 1]
// // for (let i = 0; i < array.length; i++) {
// //     if (array[i] <= pivot) {
// //         swap(array, i, j)
// //         j++
// //     }
// // }
// // console.log(array)
// function swap(array, i, j) {
//     [array[i], array[j]] = [array[j], array[i]]
// }

// function partition(array, L, R) {
//     let j = L
//     let pivot = array[R]
//     for (let i = L; i <= R; i++) {
//         if (array[i] <= pivot) {
//             i!=j && swap(array, i, j)
//             j++;
//         }
//     }
//     return j - 1
// }
// /**
// 数组分成三部分left、pivot、right，使left<=pivot，right>pivot。
// 递归处理left
// 递归处理right
// 快速排序是原地算法，不需要额外空间，但递归是需要空间的的（相当于手动维护个调用栈）
// 总体空间复杂度是O(logn)。相等元素可能会交换前后顺序，因而不是稳定排序（因为交换）。时间复杂度为O(nlogn)
//  */
// function quickSort(array, L = 0, R = array.length - 1) {
//     if (R - L < 1) return array
//     let pivotIndex = partition(array, L, R)
//     quickSort(array, L, pivotIndex - 1)
//     quickSort(array, pivotIndex + 1, R)

//     return array
// }
// quickSort([3, 5, 1, 6, 4, 7, 2])

function sortArray(array, start = 0, end = array.length - 1) {
    if (end - start < 1) return array
    let pivotIndex = partition(array, start, end)
    if (start < pivotIndex) {
        sortArray(array, start, pivotIndex)
    }
    if ((pivotIndex + 1) < end) {
        sortArray(array, pivotIndex + 1, end)
    }
    return array
}
function partition(array, start, end) {
    let pivot = array[Math.floor((start + end) / 2)]
    while (start <= end) {
        while (array[start] < pivot) {
            start++
        }
        while (array[end] > pivot) {
            end--
        }
        if (start <= end) {
            [array[start], array[end]] = [array[end], array[start]]
            start++;
            end--;
        }
    }
    return end
}
sortArray([5, 2, 3, 1])

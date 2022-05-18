// var sortArray = function (nums) {
//     quickSort3Ways(nums, 0, nums.length - 1)
//     return nums
// };
// var swap = function (arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// }
// var quickSort3Ways = function (arr, l, r) {
//     //取随机基准值
//     // swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l))
//     let pivot = arr[l]
//     //定义等于基准值元素的左边界
//     let lt = l;
//     //定义等于基准值元素的右边界
//     let gt = r + 1;
//     //定义循环变量
//     let i = l
//     //注意这里的循环结束条件
//     while (i < gt) {
//         //arr[i]比基准值小，放在 l 和 lt 之间
//         if (arr[i] < pivot) {
//             swap(arr, i, lt + 1);
//             lt++;
//             i++;
//         } else if (arr[i] > pivot) {
//             swap(arr, gt - 1, i);
//             gt--;
//         } else {
//             i++;
//         }
//     }
//     //把基准值放中间
//     swap(arr, l, lt)
//     //重复部分就不再进入筛选 

//     //剩余数组有效才进入继续排序
//     if (l < lt) {
//         quickSort3Ways(arr, l, lt - 1)
//     }
//     if (r > gt) {
//         quickSort3Ways(arr, gt, r)
//     }
// }
// console.log(sortArray(([3, 5, 3, 1, 6, 4, 7, 2, 3])))


var sortArray = function (nums) {
    quickSort3Ways(nums, 0, nums.length - 1)
    return nums
};
var swap = function (arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
var quickSort3Ways = function (arr, l, r) {
    //取随机基准值
    // swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l))
    let pivot = arr[l]
    //定义等于基准值元素的左边界
    let lt = l-1;
    //定义等于基准值元素的右边界
    let gt = r + 1;
    //定义循环变量
    let i = l + 1
    //注意这里的循环结束条件
    while (i < gt) {
        //arr[i]比基准值小，放在 l 和 lt 之间
        if (arr[i] < pivot) {
            swap(arr, i, lt + 1);
            lt++;
            i++;
        } else if (arr[i] > pivot) {
            swap(arr, gt - 1, i);
            gt--;
        } else {
            i++;
        }
    }
    // //把基准值放中间
    // swap(arr, l, lt)
    //重复部分就不再进入筛选

    //剩余数组有效才进入继续排序
    if (l < lt) {
        quickSort3Ways(arr, l, lt)
    }
    if (r > gt) {
        quickSort3Ways(arr, gt, r)
    }
}
console.log(sortArray(([3, 5, 3, 1, 6, 4, 7, 2, 3])))
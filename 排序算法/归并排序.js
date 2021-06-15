/*
首先认识分而治之的思想
分三步走
+ 分解子问题
+ 求解每个子问题
+ 合并子问题
归并排序可以看做是把一个排序要求拆分为对每个元素进行排序
后合成为每两个进行排序
之后持续合成
最后得到结果
eg:
[8, 7, 6, 5, 4, 3, 2, 1]
[8, 7, 6, 5,| 4, 3, 2, 1]
[8, 7,| 6, 5,| 4, 3,| 2, 1]
[8,| 7,| 6,| 5,| 4,| 3,| 2,| 1]
[7, 8,| 5, 6,| 3, 4,| 1, 2]
[5, 6, 7, 8,| 1, 2, 3, 4]
[1, 2, 3, 4, 5, 6, 7, 8]
 */
//整体思路可以理解成一个合并有序数组的算法+递归来处理
//分割需要排序的数组,递归处理
function mergeSort(arr) {
    debugger
    const len = arr.length
    if (len <= 1) {
        return arr
    }
    const mid = Math.floor(len / 2)
    let leftarr = mergeSort(arr.slice(0, mid))
    let rightarr = mergeSort(arr.slice(mid, len))
    arr = mergeArr(leftarr, rightarr)
    console.log(arr)
    return arr
}
//合并两个有序数组,双指针法
function mergeArr(arr1, arr2) {
    let i = 0, j = 0
    //结果数组
    const res = []
    const len1 = arr1.length
    const len2 = arr2.length
    //按照大小推入结果数组
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    //如果其中一个数组合并完了，另一个数组直接合进去就好
    if (i < len1) {
        //arr1还有剩下的
        return res.concat(arr1.slice(i))
    } else {
        //arr2还有剩下的
        return res.concat(arr2.slice(j))
    }
}

mergeSort([8, 7, 6, 5, 4, 3, 2, 1])
//复杂度O(nlog(n))
//教科书版本
// function radixSort(arr, radixBase = 10) {
//     if (arr.length < 2) {
//         return arr
//     }
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     let significantDigit = 1
//     while ((max - min) / significantDigit >= 1) {
//         arr = countingSortForRadix(arr, radixBase, significantDigit, min)
//         significantDigit *= radixBase
//     }
//     return arr
// }
// function countingSortForRadix(arr, radixBase, significantDigit, min) {
//     let bucketsIndex;
//     const buckets = [];
//     const res = [];
//     for (let i = 0; i < radixBase; i++) {
//         buckets[i] = 0;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         bucketsIndex = Math.floor(((arr[i] - min) / significantDigit) % radixBase)
//         buckets[bucketsIndex]++;
//     }
//     for (let i = 1; i < radixBase; i++) {
//         buckets[i] += buckets[i - 1]
//     }
//     for (let i = arr.length - 1; i >= 0; i--) {
//         bucketsIndex = Math.floor(((arr[i] - min) / significantDigit) % radixBase)
//         res[--buckets[bucketsIndex]] = arr[i]
//     }
//     console.log(res)
//     return res
// }

// console.log(radixSort([999, 1000]))
// console.log(radixSort([456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999]))

//易理解版
function radixSort(arr, radixBase = 10) {
    if (arr.length < 2) {
        return arr
    }
    const max = Math.max(...arr)
    let significantDigit = 1
    //确认循环次数
    while (max / significantDigit >= 1) {
        arr = countingSortForRadix(arr, radixBase, significantDigit)
        //每次循环结束根据基数改变筛选条件，从个位到十位到百位
        significantDigit *= radixBase
    }
    return arr
}
function countingSortForRadix(arr, radixBase, significantDigit) {
    let bucketsIndex;
    //计数排序 统计数组
    const buckets = new Array(radixBase).fill(0);
    //结果数组
    const res = [];
    //根据位上的值添加到统计数组中
    for (let i = 0; i < arr.length; i++) {
        bucketsIndex = Math.floor((arr[i] / significantDigit) % radixBase)
        buckets[bucketsIndex]++;
    }
    //累加统计数组，确认每个数的最终位置
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }
    //还原结果数组
    for (let i = arr.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor((arr[i] / significantDigit) % radixBase)
        res[--buckets[bucketsIndex]] = arr[i]
    }
    console.log(res)
    return res
}

console.log(radixSort([999, 1000]))
console.log(radixSort([456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999]))
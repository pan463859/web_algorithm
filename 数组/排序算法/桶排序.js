function bucketSort(arr, num) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const buckets = []
    //根据数组区间确定桶大小
    const bucketsSize = Math.floor((max - min) / num) + 1
    for (let i = 0; i < arr.length; i++) {
        // ~~ 位运算取整，确定当前数分配到哪个桶中
        const index = ~~(arr[i] / bucketsSize)
        if (!buckets[index]) {
            buckets[index] = []
        }
        buckets[index].push(arr[i])
        //对该桶进行排序
        let l = buckets[index].length
        while (l > 0) {
            buckets[index][l] < buckets[index][l - 1] && swap(buckets[index], l, l - 1)
            l--
        }
    }
    console.log(buckets)
    let wrapBuckets = []
    //从桶中取出所有元素得到结果数组
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
    }
    return wrapBuckets
}
const arr = [3, 5, 3, 1, 6, 4, 7, 2, 3]
console.log(bucketSort(arr, 7))
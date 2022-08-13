/**
 * 选择排序每次找出当前范围内的最小值(最大值)，把它放在当前范围的头部，然后缩小排序范围。重复以上步骤，知道数组完全有序 复杂度O(n^2)
 */
function selectSort(arr) {
    const len = nums.length
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        // 初始化 minIndex 为当前区间第一个元素
        minIndex = i
        for (let j = i; j < len; j++) {
            // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        // 如果 minIndex 对应元素不是目前的待交换元素，则交换两者
        if (minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
        }
    }
    return nums
}

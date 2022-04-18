// function maxArea(nums) {
//     let maxwater = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = nums.length - 1; j > i; j--) {
//             let curwater = (j - i) * Math.min(nums[i], nums[j])
//             maxwater = curwater > maxwater ? curwater : maxwater
//         }
//     }
//     console.log(maxwater)
//     return maxwater
// }
function getArea(nums, i, j) {
    return (j - i) * Math.min(nums[j], nums[i])
}
function maxArea(nums) {
    let maxindex = nums.indexOf(Math.max(...nums))
    let i, j = maxindex
    let maxarea = 0
    while (i > 0) {
        maxarea = maxarea > getArea(nums, i, maxindex) ? maxarea : getArea(nums, i, maxindex)
        i--
    }
    while (j < nums.length) {
        maxarea = maxarea > getArea(nums, maxindex, j) ? maxarea : getArea(nums, maxindex, j)
        j++
    }
    console.log(maxarea)
    return maxarea

}
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])//49
//暴力解法 狗都不用
// var calculatewater = function (start, end, height) {
//     let all = (end - start - 1) * Math.min(height[start], height[end])
//     return all - height.slice(start + 1, end).reduce((sum, cur) => { return sum + cur }, 0)
// }
// var getLeftMax = function (maxindex, arr) {
//     let tempmax = 0
//     maxindex--
//     let nextmaxindex = maxindex
//     while (maxindex > -1) {
//         if (arr[maxindex] >= tempmax) {
//             tempmax = arr[maxindex]
//             nextmaxindex = maxindex
//         }
//         maxindex--
//     }
//     return nextmaxindex
// }
// var getRightMax = function (maxindex, arr) {
//     let tempmax = 0
//     maxindex++
//     let nextmaxindex = maxindex
//     while (maxindex < arr.length) {
//         if (arr[maxindex] >= tempmax) {
//             tempmax = arr[maxindex]
//             nextmaxindex = maxindex
//         }
//         maxindex++
//     }
//     return nextmaxindex
// }
// //递归获取最高柱左边的水区域
// var getLeftWaterArea = function (maxindex, sum, height) {
//     if (maxindex == 0) {
//         return 0
//     }
//     let leftmax = getLeftMax(maxindex, height)
//     return getLeftWaterArea(leftmax, sum, height) + calculatewater(leftmax, maxindex, height)
// }
// //递归获取最高柱左边的水区域
// var getRightWaterArea = function (maxindex, sum, height) {
//     if (maxindex == height.length - 1) {
//         return 0
//     }
//     let rightmax = getRightMax(maxindex, height)
//     return getRightWaterArea(rightmax, sum, height) + calculatewater(maxindex, rightmax, height)
// }

// var trap = function (height) {
//     let maxindex =height.indexOf(Math.max(...height))
//     return getLeftWaterArea(maxindex, 0, height) + getRightWaterArea(maxindex, 0, height)
// };
// let a = trap([1])
// console.log(a)




//类动态规划
var trap = function (height) {
    let [leftmaxar, rightmaxar] = gettMax(height)
    return height.reduce((sum, cur, index) => {
        return sum + Math.min(leftmaxar[index], rightmaxar[index]) - cur
    }, 0)
};
var trap = function (height) {
    let len = height.length;
    let i = 0
    let j
    let maxleft = height[0]
    let maxright = height[len - 1]
    let dpsleft = []
    let dpsright = []
    while (i < len) {
        j = len - 1 - i
        if (height[i] > maxleft) {
            maxleft = height[i]
        }
        if (height[j] > maxright) {
            maxright = height[j]
        }
        dpsright[j] = maxright
        dpsleft[i] = maxleft
        i++
        j--
    }
    return [dpsleft, dpsright]
}
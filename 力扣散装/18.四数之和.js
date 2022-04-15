/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    nums.sort((a, b) => a - b)
    if (nums.length < 4) {
        return res
    }
    let i = 0
    while (i < nums.length) {
        let L = i + 1
        let R = nums.length - 1
        let M
        let tempsum
        while (L < R) {
            M = L + 1
            R = nums.length - 1
            while (M < R) {
                if (M == 4 && L == 3 && i == 2) {
                    console.log(i, L, M, R)
                    debugger
                }
                tempsum = nums[i] + nums[L] + nums[M] + nums[R]
                if (tempsum > target) {
                    R--
                }
                else if (tempsum < target) {
                    M++
                } else if (tempsum == target) {
                    res.push([nums[i], nums[L], nums[M], nums[R]])
                    R--
                    M++
                    while (M < R && nums[M] == res[res.length - 1][2]) {
                        M++
                    }
                    while (M < R && nums[R] == res[res.length - 1][3]) {
                        R--
                    }
                }
            }
            L++
            while (L < R && res.length > 0 && nums[L] == res[res.length - 1][1] && nums[i] == res[res.length - 1][0]) {
                L++
            }
        }
        i++
        while (i < nums.length && res.length > 0 && nums[i] == res[res.length - 1][0]) {
            i++
        }
    }
    return res
};
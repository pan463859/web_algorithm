var threeSum = function (nums) {
    let res = []
    if (nums.length < 3) {
        return res
    }
    nums.sort((a, b) => a - b)
    let i = 0
    console.log(nums)
    while (nums[i] <= 0 && i < nums.length) {
        let L = i + 1
        let R = nums.length - 1
        console.log(L)
        let tempsum = nums[i] + nums[L] + nums[R]
        while (L < R) {
            tempsum = nums[i] + nums[L] + nums[R]
            if (tempsum > 0) {
                R--
            }
            else if (tempsum < 0) {
                L++
            } else if (tempsum == 0) {
                res.push([nums[i], nums[L], nums[R]])
                R--
                L++
                while (L < R && nums[L] == res[res.length - 1][1]) {
                    L++
                }
                while (L < R && nums[R] == res[res.length - 1][2]) {
                    R--
                }
            }
        }
        i++
        while (i < nums.length && res.length > 0 && nums[i] == res[res.length - 1][0]) {
            i++
        }
    }
    return res
};
threeSum(
    [3, 0, -2, -1, 1, 2])
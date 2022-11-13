var distinctAverages = function (nums) {
    nums.sort(function (a, b) {
        return a - b
    })
    let i = 0
    let j = nums.length - 1
    let res = 0
    let resmap = {}
    while (i < j) {
        const temp = (nums[i] + nums[j]) / 2
        if (!resmap[temp]) {
            resmap[temp] = temp
            res++
        }
        i++;
        j--;

    }
    return res
};

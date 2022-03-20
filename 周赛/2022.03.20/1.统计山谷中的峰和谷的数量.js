var countHillValley = function (nums) {
    let resultnum = 0
    for (let i = 1; i < nums.length - 1; i++) {
        let pre = nums[i - 1]
        let next = nums[i + 1]
        if (nums[i] == next) {
            nums[i] = pre
            continue
        }
        if (((nums[i] < pre) && (nums[i] < next)) || ((nums[i] > next) && (nums[i] > pre))) {
            resultnum++
        }
    }
    console.log(resultnum)
    return resultnum
};
countHillValley([5, 7, 7, 1, 7])
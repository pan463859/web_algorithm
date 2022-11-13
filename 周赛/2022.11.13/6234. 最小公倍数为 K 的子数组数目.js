/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const isRightArr = (arr, k) => {
    let curmap = {}
    arr.forEach(item => {
        curmap[item] = true
    })
    curmap[1] = true
    for (let i = 0; i < arr.length; i++) {
        if (curmap[k / arr[i]]) {
            continue
        }
        return false
    }
    return true
}

var subarrayLCM = function (nums, k) {
    let i = 0
    let j = 0
    let temp = []
    let res = 0
    while (j < nums.length) {
        if (nums[j] <= k) {
            temp.push(nums[j])
            if (isRightArr(temp, k)) {
                res++
                j++;
                continue
            }
            while (i <= j && isRightArr(temp, k)) {
                res++
                temp.shift()
                i++
            }
            j++
        } else {
            while (i <= j) {
                temp.shift()
                if (isRightArr(temp, k)) {
                    res++
                }
                i++
            }
            j = j + 1
            i = j
        }
    }
    return res
};

subarrayLCM([3, 6, 2, 7, 1],6)
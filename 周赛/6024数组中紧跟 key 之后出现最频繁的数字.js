
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    let resultmap = {}
    let maxcount = 0
    let result
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == key) {
            if (!!nums[i + 1]) {
                if (!!resultmap[nums[i + 1]]) {
                    resultmap[nums[i + 1]] += resultmap[nums[i + 1]]
                }
                else {
                    resultmap[nums[i + 1]] = 1
                }
                if (resultmap[nums[i + 1]] > maxcount) {
                    maxcount = resultmap[nums[i + 1]]
                    result = nums[i + 1]
                }
            }
        }
    }
    console.log(result)
    return result
};

mostFrequent([1, 100, 200, 1, 100],
    1)

mostFrequent([2, 2, 2, 2, 3],
    2)

mostFrequent([1, 1000, 2],
    1000)

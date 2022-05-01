/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
    let res = 0
    let tempk = k
    let hasvisit = {}
    for (let i = 0; i < nums.length; i++) {
        tempk = k
        for (let j = i; j < nums.length && tempk > -1; j++) {
            if (tempk > -1) {
                if (nums[j] % p == 0) {
                    tempk--
                    if (tempk == -1) {
                        continue;
                    }
                }
                if (!hasvisit[nums.slice(i, j + 1).join(',')]) {
                    res++
                    hasvisit[nums.slice(i, j + 1).join(',')] = true
                }

            }
        }
    }
    console.log(hasvisit)
    console.log(res)
    return res
};

countDistinct([10, 2, 17, 7, 20],
    1,
    10)
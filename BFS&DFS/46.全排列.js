/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//深度优先遍历+回溯算法
var dfs = (res, temp, used, nums) => {
    if (temp.length == nums.length) {
        res.push(temp.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (!used[i]) {
            temp.push(nums[i])
            used[i] = true
            dfs(res, temp, used, nums)
            used[i] = false
            temp.pop()
        }
    }
}
var permute = function (nums) {
    let res = []
    let temp = []
    let used = new Array(nums.length).fill(false)
    dfs(res, temp, used, nums)
    return res
};
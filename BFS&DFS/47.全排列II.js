/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const dfs = (res, temp, used, nums) => {
    if (temp.length == nums.length) {
        res.push(temp.slice())
        return
    }
    for (let i = 0; i < nums.length; i++) {
         //和全排列的区别之二：画图可以理解到，想要去除重复结果，只需要把兄弟节点相同的分支给剪掉就好
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
            continue;
        }
        temp.push(nums[i])
        used[i] = true
        dfs(res, temp, used, nums)
        used[i] = false
        temp.pop()
    }
}
var permuteUnique = function (nums) {
    let res = []
    let temp = []
    let used = new Array(nums.length).fill(false)

    //和全排列的区别之一：先要排序一遍
    nums.sort((x, y) => x - y);
    dfs(res, temp, used, nums)
    return res
};
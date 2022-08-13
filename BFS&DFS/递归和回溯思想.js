/*题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
示例：   
输入: [1,2,3]
输出: [
[1,2,3],
[1,3,2],
[2,1,3],
[2,3,1],
[3,1,2],
[3,2,1]
]
全排列，其实就是排列组合，如何用代码实现排列组合？
*/
/*
思路：
1.找出重复的步骤
2.找出递归的边界
重复步骤：
1.检索剩下的数字有哪些
2.选取其中一个填进当前的坑里
边界：
坑位满了，即满了length个值
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组 递归和回溯1.0
const permute = function (nums) {
    // 缓存数组的长度
    const len = nums.length
    // curr 变量用来记录当前的排列内容
    const curr = []
    // res 用来记录所有的排列顺序
    const res = []
    // visited 用来避免重复使用同一个数字
    const visited = {}
    // 定义 dfs 函数，入参是坑位的索引（从 0 计数）
    function dfs(nth) {
        // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
        if (nth === len) {
            // 此时前 len 个坑位已经填满，将对应的排列记录下来
            res.push(curr.slice())
            return
        }
        // 检查手里剩下的数字有哪些
        for (let i = 0; i < len; i++) {
            // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
            if (!visited[nums[i]]) {
                // 给 nums[i] 打个“已用过”的标
                visited[nums[i]] = 1
                // 将nums[i]推入当前排列
                curr.push(nums[i])
                // 基于这个排列继续往下一个坑走去
                dfs(nth + 1)
                // nums[i]让出当前坑位
                curr.pop()
                // 下掉“已用过”标识
                visited[nums[i]] = 0
            }
        }
    }
    // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
    dfs(0)
    return res
};

permute([1, 2, 3,1, 2, 3])

//掘友提供的插入法
//复杂度爆炸，但是该题目的测试用例数组长度很小
var permute = function (nums) {
    let arr1 = []
    arr2 = [[nums.shift()]]
    while (nums.length > 0) {
        arr1 = arr2
        arr2 = []
        let curr = nums.shift()
        arr1.forEach(
            n => {
                for (let len = n.length; len >= 0; len--) {
                    let temp = [...n]
                    temp.splice(len, 0, curr)
                    arr2.push(temp)
                }
            }
        )
    }

    return arr2
};

permute([1, 2, 3,1, 2, 3])
/*
题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。

示例: 输入: nums = [1,2,3]
输出:
[
[3],
[1],
[2],
[1,2,3],
[1,3],
[2,3],
[1,2],
[]
]
 */

/**
* @param {number[]} nums
* @return {number[][]}
*/
// 入参是一个数组  递归和回溯1.1
const subsets = function (nums) {
    // 初始化结果数组
    const res = []
    // 缓存数组长度
    const len = nums.length
    // 初始化组合数组
    const subset = []
    // 进入 dfs
    dfs(0)

    // 定义 dfs 函数，入参是 nums 中的数字索引
    function dfs(index) {
        // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
        res.push(subset.slice())
        // 从当前数字的索引开始，遍历 nums
        for (let i = index; i < len; i++) {
            // 这是当前数字存在于组合中的情况
            subset.push(nums[i])
            // 基于当前数字存在于组合中的情况，进一步 dfs
            dfs(i + 1)
            // 这是当前数字不存在与组合中的情况
            subset.pop()
        }
    }
    // 返回结果数组
    return res
};
subsets([1, 2, 3])

/**
 * 总结：递归前期学习一定要结合图来看，看图一目了然
 * 如果从代码层面去看，一直绕进去会把自己绕糊涂了
 * 之后的设计到递归的题目先画逻辑图 之后再写代码
 *
 *
 */
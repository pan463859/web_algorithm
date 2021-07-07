/**
 * @param {number[][]} triangle
 * @return {number}
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
示例 1：
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

 */

var minimumTotal = function (triangle) {
    //先创建一个二维数组保存每个位置的和
    const dep = triangle.length
    const result = new Array(dep);
    for (let i = 0; i < dep; i++) {
        result[i] = new Array(triangle[i].length);
    }
    result[0][0] = triangle[0][0]
    for (let i = 1; i < dep; i++) {
        //f[i][0]也就是每一行的第一个,只能从上一行的一个走过来
        result[i][0] = result[i - 1][0] + triangle[i][0]
        for (let j = 1; j < i; j++) {
            result[i][j] = Math.min(result[i - 1][j], result[i - 1][j - 1]) + triangle[i][j]
        }
        //f[i][i]也就是第i行的最后一个，只能从上一行的最后一个走过来
        result[i][i] = result[i - 1][i - 1] + triangle[i][i]
    }
    //这时候得到了一个二维数组result，表示每一次加到的num最小num值，题目需要的就是最后一排中的最小值
    return Math.min(...result[result.length - 1])
};
minimumTotal([[2],[3,s4],[6,5,7],[4,1,8,3]])
/*
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
拿到问题尽管心里慌得一批，但是还是尝试用动态规划试试
1.第一步：化抽象为具体，题目就是要求计算grid[0][0]到grid[m-1][n-1]的路径上数字最小的和sum
2.第二步：找到初始值，sum[0][0]=grid[0][0],这个没跑的，起点一定要算进去
3.第三步：找规律，也就是我们说的找动态转移方程
4.对于第一排的，只能从左边加过来
5.对于第一列的，只能从上边加过来
6.对于其他的，找上面或者左边两者之间的更小的一个与自己相加
7.最后要求的最小值就是sum二维度数组中sum[m-1][n-1]的值

 */
var minPathSum = function (grid) {
    let m = grid.length
    let n = grid[0].length
    //尝试给一排前置0
    let sumgrid = new Array(m).fill(0).map(item => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            //对于第一排的，只能从左边加过来
            if (i == 0) {
                if (j == 0) {
                    sumgrid[0][0] =grid[0][0]
                    continue
                }else{
                    sumgrid[0][j]=sumgrid[0][j-1]+grid[0][j]
                    continue
                }
            }
            //对于第一列的，只能从上边加过来
            if(j==0){
                sumgrid[i][0]=sumgrid[i-1][0]+grid[i][0]
                continue
            }
            //对于其他的，找上面或者左边两者之间的更小的一个与自己相加
             sumgrid[i][j]=Math.min(sumgrid[i-1][j],sumgrid[i][j-1])+grid[i][j]
        }
    }
    // 最小值就是sum二维度数组中sum[m-1][n-1]的值
    return sumgrid[m-1][n-1]
};

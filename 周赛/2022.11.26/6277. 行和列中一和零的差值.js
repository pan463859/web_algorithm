/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    // 创建当前格子的 onesRow onesCol zeroRow zeroCol
    const rowones = new Array(grid.length).fill(0)
    const colones = new Array(grid[0].length).fill(0)
    const rowzero = new Array(grid.length).fill(0)
    const colzero = new Array(grid[0].length).fill(0)
    for (let i = 0; i < grid.length; i++) {
        const curRow = grid[i];
        for (let j = 0; j < curRow.length; j++) {
            const curCell = curRow[j];
            // 处理列 0 列 1
            if (curCell == 0) {
                rowzero[i] = (rowzero[i] || 0) + 1
                colzero[j] = (colzero[j] || 0) + 1
            } else {
                rowones[i] = (rowones[i] || 0) + 1
                colones[j] = (colones[j] || 0) + 1
            }
        }
    }
    console.log(rowones)
    console.log(colones)
    console.log(rowzero)
    console.log(colzero)
    const res = new Array(grid.length).fill(0).map(item => new Array(grid[0].length).fill(0))
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length; j++) {
            res[i][j] = rowones[i] + colones[j] - rowzero[i] - colzero[j]
        }
    }
    return res
};

console.log(onesMinusZeros([[0, 1, 1], [1, 0, 1], [0, 0, 1]]))
/**
 * @param {character[][]} grid
 * @return {number}
 */
var isLand = function (r, c, grid, rowlen, collen) {
    //是陆地的话清除标记，防止之后重复遍历
    grid[r][c] = 0
    //递归处理上面的节点
    if (r - 1 >= 0 && grid[r - 1][c] == 1) {
        isLand(r - 1, c, grid, rowlen, collen)
    }
    //递归处理右边节点
    if (c + 1 < collen && grid[r][c + 1] == 1) {
        isLand(r, c + 1, grid, rowlen, collen)
    }
    //递归处理下面的节点
    if (r + 1 < rowlen && grid[r + 1][c] == 1) {
        isLand(r + 1, c, grid, rowlen, collen)
    }
    //递归处理左边的节点
    if (c - 1 >= 0 && grid[r][c - 1] == 1) {
        isLand(r, c - 1, grid, rowlen, collen)
    }
}
var numIslands = function (grid) {
    let rowlen = grid.length
    let collen = grid[0].length
    let num = 0
    let r = 0;
    while (r < rowlen) {
        let c = 0;
        while (c < collen) {
            if (grid[r][c] == 1) {
                num++
                isLand(r, c, grid, rowlen, collen)
            }
            c++
        }
        r++
    }
    return num
};
numIslands([["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]])
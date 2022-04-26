var conveyorBelt = function (matrix, start, end) {
    //二维数组记录从起点到该点的最少魔法数
    let row = matrix.length
    let col = matrix[0].length
    let dp = new Array(row).fill(0).map(item => new Array(col).fill(-1))
    function outSize(cur) {
        let rowindex = cur[0]
        let colindex = cur[1]
        return !(rowindex >= 0 && colindex >= 0 && rowindex < row && colindex < col)
    }
    function backTrack(prenum, cur) {
        if (outSize(cur)) {
            return
        }
        let curnum = dp[cur[0]][cur[1]];
        if (curnum >= 0 && prenum >= curnum) return;
        dp[cur[0]][cur[1]] = prenum;
        if (cur[0] == end[0] && cur[1] == end[1]) {
            return
        } else {
            let curDirection = matrix[cur[0]][cur[1]];
            // 向上
            backTrack(curDirection === '^' ? prenum : prenum + 1, [cur[0] - 1, cur[1]]);
            // 向下
            backTrack(curDirection === 'v' ? prenum : prenum + 1, [cur[0] + 1, cur[1]]);
            // 向左
            backTrack(curDirection === '<' ? prenum : prenum + 1, [cur[0], cur[1] - 1]);
            // 向右
            backTrack(curDirection === '>' ? prenum : prenum + 1, [cur[0], cur[1] + 1]);
        }
    }

    backTrack(0, start);
    return dp[end[0]][end[1]];
};
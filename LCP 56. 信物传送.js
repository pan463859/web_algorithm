// var conveyorBelt = function (matrix, start, end) {
//     //二维数组记录从起点到该点的最少魔法数
//     let row = matrix.length
//     let col = matrix[0].length
//     let dp = new Array(row).fill(0).map(item => new Array(col).fill(-1))
//     function outSize(cur) {
//         let rowindex = cur[0]
//         let colindex = cur[1]
//         return !(rowindex >= 0 && colindex >= 0 && rowindex < row && colindex < col)
//     }
//     function backTrack(prenum, cur) {
//         if (outSize(cur)) {
//             return
//         }
//         let curnum = dp[cur[0]][cur[1]];
//         if (curnum >= 0 && prenum >= curnum) return;
//         dp[cur[0]][cur[1]] = prenum;
//         if (cur[0] == end[0] && cur[1] == end[1]) {
//             return
//         } else {
//             let curDirection = matrix[cur[0]][cur[1]];
//             // 向上
//             backTrack(curDirection === '^' ? prenum : prenum + 1, [cur[0] - 1, cur[1]]);
//             // 向下
//             backTrack(curDirection === 'v' ? prenum : prenum + 1, [cur[0] + 1, cur[1]]);
//             // 向左
//             backTrack(curDirection === '<' ? prenum : prenum + 1, [cur[0], cur[1] - 1]);
//             // 向右
//             backTrack(curDirection === '>' ? prenum : prenum + 1, [cur[0], cur[1] + 1]);
//         }
//     }

//     backTrack(0, start);
//     return dp[end[0]][end[1]];
// };



var conveyorBelt = function (matrix, start, end) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let g = ['^', '>', 'v', '<'];
    let n = matrix.length
    let m = matrix[0].length
    let q = [];
    let dps = new Array(n).fill(0).map(item => new Array(m).fill(0))
    let visited = new Array(n).fill(0).map(item => new Array(m).fill(false))
    q.push([start[0], start[1]])
    dps[start[0]][start[1]] = 0;
    //在找到终点之前一直循环
    while (q.length) {
        let cur = q[0];
        q.shift();
        let curx = cur[0], cury = cur[1];
        console.log(dps)
        if (curx == end[0] && cury == end[1]) return dps[curx][cury];
        if (visited[curx][cury]) continue;
        visited[curx][cury] = true;
        for (let i = 0; i < 4; i++) {
            let nextx = curx + dx[i], nexty = cury + dy[i];
            if (nextx < 0 || nextx >= n || nexty < 0 || nexty >= m || visited[nextx][nexty]) continue;
            //前进方向一致的加入队头,后续优先遍历
            if (g[i] == matrix[curx][cury]) {
                q.unshift([nextx, nexty]);
                dps[nextx][nexty] = dps[curx][cury];
            }
            //前进方向不一致的，放入队尾，更新 dps 的值
            else {
                q.push([nextx, nexty]);
                //如果下一个点被访问过, 则更新为最小值。
                if (dps[nextx][nexty] != 0) {
                    dps[nextx][nexty] = Math.min(dps[nextx][nexty], dps[curx][cury] + 1);
                }
                //如果下一个点被访问过未访问过，就置为已访问状态，且 dp 值为当前节点+1
                else {
                    dps[nextx][nexty] = dps[curx][cury] + 1
                }
            }
        }
    }
};
console.log(conveyorBelt(["^>^^>>vv<>vv<<^<^<<^<>^^vv<<^^<^^^v^^^", ">>>>^^><v<vv>v>v^^v<v>>^v>vv^vv><>>v^<", "v>v^<^><v^<v<^<vvv<<<<>^>vv>^<v>^>v<<<", ">>v<<<<<><^<>>^<v>vvv>^>v>>^v<<<v<<<^>", "<v><^<^<vv<>>^^>>><v<>^^<v>^<<>>v^>^v<", "<>>^^<><>^v<>^^<vvv<vv<^>>v<^v^><<v<v<", "vvvvv><<^><<^<<v><^<<<vv^v>^^v^^^^vvvv", "v>v^^<^>>vv><<^^^^^vv>v^v<^>^^vv^><v>v", "^<^<vv^^v^v>^>v<v^<<v^^>vv<<v^<^^>><><", "^<<<^<vv<>>v>^><<>^>^>v><v<>vv>vv<^vv<", "^<^^<>>^v^>v><v>vv>><><^<>><>^^v^^v^v<", "vvvv^v^>v^>^<v><^>v>v<v>v<<<^<v^>>v><^", ">><v^>^^^<^><^vv<<>^v<v>>^v^<>v>><<v>^", "v>v^<<<<^<vv>vv>>v^v><vv^>>>v^>>v^>>><", "^^>>vv^vv>^^^^^v^<<^>><<<<<>vvvvv><^^<", "^><><^<^<<<<><vv^^^>^><v^<^>vv>^^^v><v", ">^>>><vv>>^v>>^^>v<<<^>>>v^>vvvv<v<^>^", "^v^vv<^^<>vv<<<^>^<<>^^^<<<^v<>>^^>^<^", "v>^v>^>vv<>><<^v<>^<^v<v><^<vv<^^^><>^", "v>v^v^v<^^^vv>>^<>v<>>^v<^>^<v^vv>vv<v", "^^v>vvv><<>v<><^<^v^v<><^^><^>^^v><<^v", ">v<v^<v>^>v<<><><vv>vv^<^vv<<vv^^><vv>", "<<v<^v>^>v><><v^>^>v>>v>><^<v<v^<v><^^", "<v<^<v<^v<<<^^v>>^>^>^>^>>>v^vv^<v<<<<", "v>^v^v>v<>^^v>^<vv<v^vvv^^v<v^^v^>>vv>", "^^<vv^<^vvvvv^<^v^v>v^><vv>v<<<v^^^v>v", "v^v^<<v>^v>><^^vv<v<<><v^><>^^><>>><v<", "^>^<^>><vv^>>^<v<><<^>v<>><^<<>^^^^vv<", "^><>^v^><<>^^<v<vv<^><<><>v^^>^^<v<>>^", "^vv><<v><^>^>><^><<<<v^^vv>^><<><>v^vv", "^><<<^v<><v^<<^^v<v>>v^v>^><>^>^^^>><v", "vv^<^vv^<v^v<<^<^<v^<^^>vv<v>><>>><>^<", "<<><v<>vv<><vv<><>v<^<vv<v<<<v>vv><v^<", "vv^^v^<^v<v<v^><v^>>v^>v^><>>v><v>v^<^", "^v^<>v<^<v^>^v^^vv>>^><>v<<><<v<vv>^vv", ">^>><<^<v^<>^<^>^v<vvvv>><<<<<v>v<><>^", "<><<<<v<<vv>^<>v^^><>vv<v<^v<>v<^<v><>", "vv^<<v><<^v^v^>v><<v<<^^vv>>>>v^^>v^>v", "<v^^vv<<^><^<^v><v>vv^^<vv><>^<<^<v>^>", "<><>v^<v<>v<><>>v>>vv<><v<vv<v<<>^>vv^", ">v<<<^v<vv^<<vv<v<vv^<><v<v>^<>^>v<^<<", "><^<^^v<>v<v<<vv><>^vv>>v>^^vvv^><^^^^", "^^<<^>^<<<<<<><v<><<>v^<^<^^<^><<^<^v^", "vv>^^>^^<>vv^^>><><v>vv^v^^^v<v><^^>v^", "^vv<^^<^^^v^>v<^><v>^>>vv<^><vv^><v>>^", ">^^^^vv^^vv>>^v<<>>v<>^^v^^<^v<<>v^v^v", "><^<^<v^><><^><^^><<v<<vvvv>v<v^v>v>v^"],
    [39, 37],
    [2, 8]))
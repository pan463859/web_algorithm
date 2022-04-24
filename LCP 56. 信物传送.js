var findend = function (matrix, i, j, end, magictime, hasvisited) {
    let row = matrix.length
    let col = matrix[0].length
    let curoperation
    if ((i < row && i >= 0) && (j < col && j >= 0) && i == end[0] && j == end[1]) {
        return magictime
    }
    if ((i < row && i >= 0) && (j < col && j >= 0) && !hasvisited[[i, j].join('')]) {
        hasvisited[[i, j].join('')] = true
    } else {
        //可能的最大转换值
        return row * col
    }
    //未超出边界且未到重点之前，都可以继续走
    while (((i < row && i >= 0) && (j < col && j >= 0))) {
        curoperation = matrix[i][j]
        switch (curoperation) {
            case '^':
                i--;
                break;
            case '>':
                j++;
                break;
            case 'v':
                i++;
                break;
            case '<':
                j--;
                break;
        }
        //已经访问过了，需要使用魔法更改方向
        if (hasvisited[[i, j].join('')] || !((i < row && i >= 0) && (j < col && j >= 0))) {
            //使用魔法回到刚才的点
            switch (curoperation) {
                case '^':
                    i++;
                    break;
                case '>':
                    j--;
                    break;
                case 'v':
                    i--;
                    break;
                case '<':
                    j++;
                    break;
            }
            magictime++
            return Math.min(findend(matrix, i + 1, j, end, magictime, JSON.parse(JSON.stringify(hasvisited))),
                findend(matrix, i - 1, j, end, magictime, JSON.parse(JSON.stringify(hasvisited))),
                findend(matrix, i, j + 1, end, magictime, JSON.parse(JSON.stringify(hasvisited))),
                findend(matrix, i, j - 1, end, magictime, JSON.parse(JSON.stringify(hasvisited))))
        } else {
            hasvisited[[i, j].join('')] = true
            if (i == end[0] && j == end[1]) {
                return magictime
            }
        }
    }
}
var conveyorBelt = function (matrix, start, end) {
    //定义一个已访问点的结合，若已经访问后再次访问，则此路不通，需要使用魔法。
    let hasvisited = {}
    let magictime = 0
    return findend(matrix, start[0], start[1], end, magictime, hasvisited)
};

conveyorBelt(
    ["^>v>^", "^vv>>", "<^^^>", "<><v<", "^v^>>"],
    [1, 3],
    [1, 0]
)

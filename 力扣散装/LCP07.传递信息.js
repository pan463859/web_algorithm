
// //BFS解法
var numWays = function (n, relation, k) {
    let nodes = new Array(n).fill(0).map(item => new Array())
    let ways = 0
    for (let [start, end] of relation) {
        nodes[start].push(end)
    }
    function findPath(index, steps) {
        if (steps == k) {
            if (index == n - 1) {
                ways++
            }
            return
        }
        const nextnodes = nodes[index]
        for (let nextindex of nextnodes) {
            findPath(nextindex, steps+1)
        }
    }
    findPath(0, 0)
    return ways
};
//动态规划解法
/*
又名：丢手绢
dp[i][j]为经过i轮手绢到编号j的玩家的方案数
dp[0][0]为第0轮手绢到编号0玩家的方案数，值就是1
dp[0][其他]第0轮手绢到编号不为0的方案数，值就是0，因为第0轮他哪里都去不了，只能在编号0这里
一共有k轮，需要k轮数组记录所有的状态
dp初始化为
[
    [1,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
]
初始化状态为d[0][0]为1
其他为0
第一轮的时候，遍历所有relation，得到的dp状态为
[
    [1,0,0,0,0],
    [0,0,1,0,1],
    [0,0,0,0,0],
    [0,0,0,0,0],
]
因为通过第一轮遍历后，relation中的[0,2][0,4]两种会和第0轮的状态发生化学反应
换句话说，依照当前的relation来推，第一轮结束后只有编号2和编号4可能有手绢
第二轮的时候根据第一轮的的状态和relation数组进行累加
则第三轮的状态为
[
    [1,0,0,0,0],
    [0,0,1,0,1],
    [1,1,0,1,0],
    [0,0,0,0,0],
]
同理 第四轮的状态为
[
    [1,0,0,0,0],
    [0,0,1,0,1],
    [1,1,0,1,0],
    [0,0,1,0,3],
]
问题中文编号n-1的小玩家有多少种可能拿到手绢，从第三轮的状态来看就是有可能从编号0，编号2，编号3三个小玩家手里传过来
所以最后只需要return dp[k][n-1]即可
*/
var numWays = function(n, relation, k) {
    const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = 1;
    for (let i = 0; i < k; i++) {
        for (const [src, dst] of relation) {
            dp[i + 1][dst] += dp[i][src];
        }
    }
    return dp[k][n - 1];
};

numWays(5,[[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]],3)



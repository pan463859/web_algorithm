/*
 * @lc app=leetcode.cn id=2050 lang=javascript
 *
 * [2050] 并行课程 III
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
    let g = Array(n).fill(null).map(() => []); // g[i]表示课程 i 是g[i]课程的先修课
    let deg = Array(n).fill(0); // deg[i] 表示 i 的先修课的个数
    for (const [x, y] of relations) {
        g[x - 1].push(y - 1);
        deg[y - 1]++;
    }

    let q = new Array();
    for (let i = 0; i < n; i++)
        if (deg[i] === 0) // 没有先修课
            q.push(i);
    let f = Array(n).fill(0); // f[i]表示上到目前的课程所需要的最少时间，也就是结果 dp 数组
    while (!q.length==0) {
        const x = q.shift(); 
        f[x] += time[x]; // 加上当前课程的时间，就得到了最终的 f[x]
        for (const y of g[x]) { // 遍历所有先修课为 x 的课程，计算对应的 f[y]的时间
            f[y] = Math.max(f[y], f[x]); 
            if (--deg[y] === 0) // y 的先修课已上完，推入队列
                q.push(y);
        }
    }
    return Math.max(...f);
};
minimumTime(3,
    [[1, 3], [2, 3]],
    [3, 2, 5])
// @lc code=end


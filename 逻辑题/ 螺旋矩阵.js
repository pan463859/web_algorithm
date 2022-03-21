/**
 * @param {number} n
 * @return {number[][]}
 */
/**
1.当 n 为奇数的时候，需要循环 Math.floor(n/2)圈+一个中间点
当 n 为偶数的时候，需要循环 Math.floor(n/2)圈
2.四条边的循环一定要保持一致性，同时左闭右开或者左开右闭。
3.第一圈循环的起点是[0,0]，第二圈的起点就是[1，1]
4.第二圈的边长比第一圈少 2，使用 offset 来控制（画图模拟得出），offset 初始化为 1，因为左闭右开，n 为4 的情况为例。上边遍历到 123 右边遍历 456，下边遍历 789 左边遍历 10 11 12，
5.使用 i，j 两个控制移动方向
   + 上边是 i++ 到 n-offset，右边是 i 不动，j++到 n-offset，下边是 i-- 到遍历开始点的 i，左边是 j--到遍历开始点 的 j。
 */


var generateMatrix = function (n) {
    let start = 0
    let offset = 1
    let res = new Array(n).fill(0).map(item => new Array(n).fill(0))
    let loopnumber = Math.floor(n / 2)
    let itemvalue = 1
    while (loopnumber > 0) {
        let i = j = start;
        for (; j < n - offset + start; j++) {
            res[i][j] = itemvalue
            itemvalue++
        }
        for (; i < n - offset + start; i++) {
            res[i][j] = itemvalue
            itemvalue++
        }
        for (; j > start; j--) {
            res[i][j] = itemvalue
            itemvalue++
        }

        for (; i > start; i--) {
            res[i][j] = itemvalue
            itemvalue++
        }
        loopnumber--;
        offset = offset + 2
        start++
    }
    if (n % 2 === 1) {
        let mid = Math.floor(n / 2);
        res[mid][mid] = itemvalue;
    }
    console.log(res)
    return res
};
generateMatrix(4)

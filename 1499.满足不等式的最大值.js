// max（yi + yj + |xi - xj|） => max(（xj+yj）+(yi-xi))
var findMaxValueOfEquation = function (points, k) {
    let ans = Number.MIN_SAFE_INTEGER;
    let q = new Array()
    let left = 0, right = 0;
    for (const [x, y] of points) {
        // x 不满足条件了，left++ 把不符合条件的项退出队列 x1<x2-k
        while (left < right && q[left][0] < x - k) {
            left++;
        }
        // 计算并记录最大值，当前 x+y+上一个的 y-x
        if (left < right) {
            ans = Math.max(ans, x + y + q[right-1][1]);
        }
        // 加入当前值
        q[right++] = [x, y - x];
    }
    return ans;
};
//动态规划递归
var candy = function (ratings) {
    let i = 0
    r = new Uint16Array(ratings.length).fill(1)
    j = ratings.length - 1
    while (i < ratings.length - 1) {
        if (ratings[++i] > ratings[i - 1]) {
            r[i] = Math.max(r[i], r[i - 1] + 1)
        }
        if (ratings[--j] > ratings[j + 1]) {
            r[j] = Math.max(r[j], r[j + 1] + 1)
        }
    }
    return r.reduce((p, v) => p + v)
};
candy([1, 0, 2])

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    for (let i = 1; i <= n; i++) {
        const suml = (1 + i) * i / 2
        const sumr = (i + n) * (n - i + 1) / 2
        if (suml == sumr) {
            return i
        }
        if (suml > sumr) {
            return -1
        }
    }
    return -1
};
pivotInteger(8)

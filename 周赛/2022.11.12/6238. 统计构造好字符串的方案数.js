/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
const getDeep = (i, curlength, res, zero, one) => {
    if (curlength == i) {
        res.num = (res.num + 1) % (Math.pow(10, 9) + 7)
        return
    }
    if (curlength > i) {
        return
    }
    curlength = curlength + zero
    getDeep(i, curlength, res, zero, one)
    curlength = curlength - zero + one
    getDeep(i, curlength, res, zero, one)

}
var countGoodStrings = function (low, high, zero, one) {
    let i = low
    let res = { num: 0 }
    let maxzero = 0
    let maxheight = 0
    const maxzero = low % zero
    const maxone = (low / zero) % one
    while (i <= high) {
        let curlength = 0
        getDeep(i, curlength, res, zero, one)
        i++
    }
    return res.num % (Math.pow(10, 9) + 7)
};
countGoodStrings(200, 200, 10, 1)
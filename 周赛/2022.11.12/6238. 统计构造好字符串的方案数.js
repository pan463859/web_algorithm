/**
 * 
 * @param {给你整数 zero ，one ，low 和 high ，我们从空字符串开始构造一个字符串，每一步执行下面操作中的一种：

将 '0' 在字符串末尾添加 zero  次。
将 '1' 在字符串末尾添加 one 次。
以上操作可以执行任意次。

如果通过以上过程得到一个 长度 在 low 和 high 之间（包含上下边界）的字符串，那么这个字符串我们称为 好 字符串。

请你返回满足以上要求的 不同 好字符串数目。由于答案可能很大，请将结果对 109 + 7 取余 后返回。

输入：low = 3, high = 3, zero = 1, one = 1
输出：8
解释：
一个可能的好字符串是 "011" 。
可以这样构造得到："" -> "0" -> "01" -> "011" 。
从 "000" 到 "111" 之间所有的二进制字符串都是好字符串。

 * @param {*} curlength 
 * @param {*} res 
 * @param {*} zero 
 * @param {*} one 
 * @returns 
 */
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
// 1.下一个值和上一个值有关系的，首想动态规划
// 2.把规律拆分成一个计数一个变量字符
// 3.连续重复的加计数，不连续重复的重置计数并拼到结果里面
// 4.最后一个数字如果和前一个数字不一致的也需要做累加，或者在循环结束后再做一次判断即可

// 作者：panxiaoan
// 链接：https://leetcode-cn.com/problems/count-and-say/solution/he-dong-tai-gui-hua-by-panxiaoan-7rvs/

var countAndSay = function (n) {
    if (n == 1) {
        return '1'
    } else {
        return dealCount(countAndSay(n - 1))
    }
};
dealCount = function (str) {
    let result = ''
    let count = 0
    let singlechar = str[0]
    for (let i = 0; i < str.length; i++) {
        if (str[i] == singlechar) {
            count++
        } else {
            result = result + count + singlechar
            count = 1
            singlechar = str[i]
        }
        if (i == (str.length - 1)) {
            result = result + count + singlechar
        }
    }
    return result
}
countAndSay(4)
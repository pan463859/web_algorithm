/**
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let indexarr = pattern.split('')
    let strarr = s.split(' ')
    let obj = {}
    for (let i = 0; i < indexarr.length; i++) {
        if (obj[indexarr[i]]) {
            if (obj[indexarr[i]] == strarr[i]) {
                continue
            } else {
                return false
            }
        } else {
            obj[indexarr[i]] = strarr[i]
        }
    }//{a:dog,b:dog}
    if ([...new Set(Object.values(obj))].length == Object.keys(obj).length) {
        return true
    } else {
        return false
    }
};
wordPattern("abba",
    "dog cat cat dog")

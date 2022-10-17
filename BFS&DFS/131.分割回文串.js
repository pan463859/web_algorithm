
/**
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。
示例 1：
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]

 * @returns 
 */
var partition = function (s) {
    const res = []
    const temp = []
    const isPalindrome = (s, start, end) => {
        while (start <= end) {
            if (s[start] == s[end]) {
                start++
                end--
                continue
            } else {
                return false
            }
        }
        return true
    }
    const findLeaf = (s, startIndex) => {
        if (startIndex == s.length) {
            res.push(temp.slice())
        }
        for (let i = startIndex; i < s.length; i++) {
            if (isPalindrome(s, startIndex, i)) {
                temp.push(s.substring(startIndex, i + 1))
                findLeaf(s, i + 1)
                temp.pop()
            }
        }
    }
    findLeaf(s, 0)
    return res
};
partition('aab')
/**
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:

输入: S = "aab"
输出: "aba"
示例 2:

输入: S = "aaab"
输出: ""

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reorganize-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} S
 * @return {string}
 * 思路：
 * 1.如果每个都是一个的话自然是直接通过的
 * 2.如果需要满足条件，需要其中重复最高的数字不能超过ceil(len/2)的个数（数学归纳法），否则就一定会有相邻字符
 * 3.字符串转换成对象，记录每个字符出现次数，最高的超过了边界值，直接返回空字符串
 * 4.最高数没超过边界值，按照顺序进行插入，保证不重复
 * 
 * 
 */
var reorganizeString = function (S) {
    let obj = {}
    let maxkey = ''
    let maxnum = 0
    for (let item of S) {
        if (obj[item]) {
            obj[item]++
            if (obj[item] > maxnum) {
                maxnum = obj[item]
                maxkey = item
            }
            if (obj[item] > Math.ceil(S.length / 2)) {
                return ''
            }
        } else {
            obj[item] = 1
        }
    }
    //最高数没超过边界值，按照顺序进行插入，保证不重复
    let temparr = new Array(maxnum).fill(maxkey)
    delete obj[maxkey]
    let insertindex = 1
    while (temparr.length < S.length) {
        for (let [key, value] of Object.entries(obj)) {
            for (let i = 0; i < value; i++) {
                temparr.splice(insertindex, 0, key);
                insertindex += 2
                maxnum--
                //插槽满了
                if (maxnum == 0) {
                    insertindex = 1
                    maxnum = temparr.length
                }
            }
        }
    }
    console.log(temparr)
};
reorganizeString("todrnphcamnomskfrhe")
// https://leetcode-cn.com/problems/reorganize-string/solution/mei-chao-guo-duo-shao-yong-hu-dan-shi-zhu-shi-xian/
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

//  

// 示例：

// s = "leetcode"
// 返回 0

// s = "loveleetcode"
// 返回 2

// var firstUniqChar = function (s) {
//     if (s == '') {
//         return -1
//     }
//     let obj = {}
//     for (let i = 0; i < s.length; i++) {
//         if (obj[s[i]]) {
//             obj[s[i]].push(i)
//         } else {
//             obj[s[i]] = [i]
//         }
//     }
//     let singlearr = Object.values(obj).filter((item, index) => item.length == 1)
//     if (singlearr.length == 0) {
//         return -1
//     } else {
//         return Math.min(...singlearr.map((item, index) => { return item[0] }))
//     }
// };
// firstUniqChar("")
//用空间换时间，本质思路没有变化
var firstUniqChar = function (s) {
    if (s == '') {
        return -1
    }
    let obj = []
    let abandononj = {}
    for (let i = 0; i < s.length; i++) {
        if (abandononj[s[i]]) {
            continue
        }
        if (obj[s[i]]!=undefined) {
            delete obj[s[i]]
            abandononj[s[i]] = i
        } else {
            obj[s[i]] = i
        }
    }
    let singlearr = Object.values(obj)
    if (singlearr.length == 0) {
        return -1
    } else {
        return Math.min(...singlearr)
    }
};
firstUniqChar('cc')
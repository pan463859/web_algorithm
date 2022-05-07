/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

//使用輔助比較函數
var dealSameNum = function (preword, nextword) {
    let i = 0
    while (preword[i] == nextword[i]) {
        i++
    }
    if (!preword[i]) {
        return -1
    }
    if (!nextword[i]) {
        return 1
    }
    return preword[i].charCodeAt() - nextword[i].charCodeAt()
}
var topKFrequent = function (words, k) {
    let dictionary = {}
    for (let i = 0; i < words.length; i++) {
        dictionary[words[i]] = dictionary[words[i]] ? dictionary[words[i]] + 1 : 1
    }
    console.log(Object.entries(dictionary))
    let temp = Object.entries(dictionary)
    let res = temp.sort((pre, next) => {
        console.log('pre', pre)
        console.log('next', next)
        return next[1] != pre[1] ? next[1] - pre[1] : Number(pre[0] > next[0])
    })
    console.log(res)
    return res.map((item) => item[0]).slice(0, k)
};
topKFrequent(["i", "love", "leetcode", "i", "love", "coding"],
    3)
//直接使用pre[0] > next[0]
    var topKFrequent = function (words, k) {
        let dictionary = {}
        for (let i = 0; i < words.length; i++) {
            dictionary[words[i]] = dictionary[words[i]] ? dictionary[words[i]] + 1 : 1
        }
        let res = Object.entries(dictionary).sort((pre, next) => {
            return next[1] != pre[1] ? next[1] - pre[1] : pre[0] > next[0] ? 1 : -1
        })
        return res.map((item) => item[0]).slice(0, k)
    };
//使用localeCompare
var topKFrequent = function (words, k) {
    let dictionary = {}
    for (let i = 0; i < words.length; i++) {
        dictionary[words[i]] = dictionary[words[i]] ? dictionary[words[i]] + 1 : 1
    }
    let res = Object.entries(dictionary).sort((pre, next) => {
        return next[1] != pre[1] ? next[1] - pre[1] : pre[0].localeCompare(next[0])
    })
    return res.map((item) => item[0]).slice(0, k)
};
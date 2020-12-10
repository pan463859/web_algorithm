var lengthOfLongestSubstring = function (s) {
    if (s == "") {
        return 0
    }
    if (s === " ") {
        return 1
    }
    let arr = s.split('')
    let obj = {}
    let max = 0
    let cur = 0
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = i
            cur++
        } else {
            i = obj[arr[i]]
            if (cur > max) {
                max = cur
            }
            cur = 0
            obj = {}
        }
    }
    return cur > max ? cur : max
};
// ### 解题思路
// 1.sort排序确定是否是字母异位词
// 2.一致放一起，不一致的重新放
// 3.遍历放到数组中return

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let resultobj = {}
    for (let i = 0; i < strs.length; i++) {
        let orderedstr = strs[i].split('').sort().join('')
        if (resultobj[orderedstr]) {
            resultobj[orderedstr].push(strs[i])
        } else {
            resultobj[orderedstr] = [strs[i]]
        }
    }
    let resultarr = []
    Object.values(resultobj).forEach((item, index) => {
        resultarr.push(item)
    })
    return resultarr
};

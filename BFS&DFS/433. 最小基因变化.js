/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */

var minMutation = function (start, end, bank) {

    if (start == end) {
        return 0
    }
    let bankset = new Set()
    //使用 set 保存 bank 中的所有字符串方便检索
    //使用 set 保存所有已经访问过的字符串，方便
    const all = ['A', 'C', 'G', 'T']
    const visited = new Set()
    bank.forEach(item => bankset.add(item))
    if (!bankset.has(end)) {
        return -1
    }
    let queue = []
    queue.push(start)
    let res = 1
    while (queue.length > 0) {
        const curlen = queue.length
        for (let c = 0; c < curlen; c++) {
            let curitem = queue.shift()
            for (let i = 0; i < curitem.length; i++) {
                for (let j = 0; j < all.length; j++) {
                    if (curitem[i] != all[j]) {
                        let curstr = [...curitem]
                        curstr[i] = all[j]
                        curstr = curstr.join('')
                        if (!visited.has(curstr) && bankset.has(curstr)) {
                            if (curstr == end) {
                                return res
                            }
                            queue.push(curstr);
                            visited.add(curstr);
                        }
                    }
                }
            }
        }
        res++
    }
    return -1
};

console.log(minMutation("AAAAAAAA",
    "CCCCCCCC",
    ["AAAAAAAA", "AAAAAAAC", "AAAAAACC", "AAAAACCC", "AAAACCCC", "AACACCCC", "ACCACCCC", "ACCCCCCC", "CCCCCCCA", "CCCCCCCC"]))

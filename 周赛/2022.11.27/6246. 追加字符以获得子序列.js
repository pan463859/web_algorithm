var appendCharacters = function (s, t) {
    let sIndex = 0
    let tIndex = 0
    while (sIndex < s.length && tIndex < t.length) {
        const tchar = t[tIndex]
        while (sIndex < s.length) {
            if (s[sIndex] === tchar) {
                sIndex++
                tIndex++
                break
            } else {
                sIndex++
            }
        }
    }
    return t.length - tIndex
};
// 简单的问题整复杂了~！！
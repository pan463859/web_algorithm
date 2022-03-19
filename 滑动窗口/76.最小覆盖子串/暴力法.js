/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var iscontained = function (tmap) {
    let values = Object.values(tmap)
    return values.filter(item => item <= 0).length == values.length
}
var generateMap = function (t) {
    let tmap = {}
    for (let key of t) {
        if (tmap[key] != undefined) {
            tmap[key]++
        } else {
            tmap[key] = 1
        }
    }
    return tmap
}
var minWindow = function (s, t) {
    if (s.length < t.length) {
        return ''
    }
    if (s.indexOf(t) > -1) {
        return t
    }
    let minstr = ''
    for (let i = 0; i < s.length; i++) {
        let tmap = generateMap(t)
        let alltype = Object.keys(tmap).length
        if (tmap[s[i]] != undefined) {
            tmap[s[i]]--
            if (tmap[s[i]] == 0) {
                alltype--
            }
            for (let j = i + 1; j < s.length; j++) {
                if (tmap[s[j]] != undefined) {
                    tmap[s[j]]--
                    if (tmap[s[j]] == 0) {
                        alltype--
                    }
                    if (alltype == 0) {
                        if (iscontained(tmap)) {
                            let newminstr = s.substring(i, j + 1)
                            minstr = (!minstr || newminstr.length <= minstr.length) ? newminstr : minstr
                            break
                        }
                    }
                }
            }
        }

    }
    return minstr
};
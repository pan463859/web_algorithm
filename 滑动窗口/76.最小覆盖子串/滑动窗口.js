//获取目标值的每个字符的数量，用对象保存
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
    //一些边界条件
    if (s.length < t.length) {
        return ''
    }
    //一些边界条件
    if (s.indexOf(t) > -1) {
        return t
    }
    let tmap = generateMap(t)
    let minstr = ''
    let l = 0
    let r = 0
    let typenum = Object.keys(tmap).length
    while (r < s.length) {
        //确认起点
        if (tmap[s[r]] != undefined) {
            tmap[s[r]]--
            //有一种字符被全覆盖了
            if (tmap[s[r]] == 0) {
                typenum--
            }
            //全覆盖后进入收缩过程
            while (typenum == 0) {

                //左指针遇到了 map 中的值，且该值会使得 typenum 增加，跳出 l 移动的循环，回到 r 移动循环
                if (tmap[s[l]] != undefined) {
                    tmap[s[l]]++
                    if (tmap[s[l]] == 1) {
                        //截取字符串
                        let newminstr = s.substring(l, r + 1)
                        //比较拿到最短的那个
                        minstr = (!minstr || newminstr.length <= minstr.length) ? newminstr : minstr
                        typenum++
                    }
                }
                l++
            }
        }
        r++
    }
    return minstr
};

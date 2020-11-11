/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 * 电子游戏“辐射4”中，任务“通向自由”要求玩家到达名为“Freedom Trail Ring”的金属表盘，并使用表盘拼写特定关键词才能开门。

给定一个字符串 ring，表示刻在外环上的编码；给定另一个字符串 key，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。

最初，ring 的第一个字符与12:00方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。

旋转 ring 拼出 key 字符 key[i] 的阶段中：

您可以将 ring 顺时针或逆时针旋转一个位置，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00 方向对齐，并且这个字符必须等于字符 key[i] 。
如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key 的下一个字符（下一阶段）, 直至完成所有拼写。

 */

// 没有完成，只能通过部分测试案例，单纯用数组做的话，边界条件太多很难判断，去看下解析，自己的思考过程留一下
// var shifLeft = function (ring, leftindex, step) {
//     step = leftindex + step
//     let shitring = ring.slice(0, leftindex)
//     if (shitring.length != 0) {
//         ring.splice(0, leftindex)
//         ring.splice(ring.length, 0, ...shitring)
//     }
//     step++
//     return step
// }
// var shiftRigth = function (ring, rightindex, step) {
//     step = step + (ring.length - rightindex)
//     let shitring = ring.slice(0, rightindex)
//     if (shitring.length != 0) {
//         ring.splice(0, rightindex)
//         ring.splice(ring.length, 0, ...shitring)
//     }
//     step++
//     return step
// }
// var decideShift = function (leftindex, rightindex, ring, key, i) {
//     let tempi = i
//     let tempring = JSON.parse(JSON.stringify(ring))
//     if (key[tempi] == key[tempi - 1]) {
//         return decideShift(leftindex, rightindex, ring, key, ++tempi)
//     } else {
//         if (Math.abs(leftindex - tempring.indexOf(key[tempi])) < Math.abs(rightindex - tempring.indexOf(key[tempi]))) {
//             return function (step) {
//                 return shifLeft(ring, leftindex, step)
//             }
//         } else if (Math.abs(leftindex - tempring.indexOf(key[tempi])) == Math.abs(rightindex - tempring.indexOf(key[tempi]))) {
//             console.log('giao')
//         } else {
//             return function (step) {
//                 return shiftRigth(ring, rightindex, step)
//             }
//         }
//     }
// }
// var findRotateSteps = function (ring, key) {
//     let step = 0
//     ring = ring.split('')
//     key = key.split('')
//     for (let i = 0; i < key.length; i++) {
//         let leftindex = ring.indexOf(key[i])
//         let rightindex = ring.lastIndexOf(key[i])
//         //逆时针转更快
//         if (leftindex < (ring.length - rightindex)) {
//             step = shifLeft(ring, leftindex, step)
//         }
//         //逆时针和顺时针一样快的情况下，要找下一个数离哪个更近
//         else if (leftindex == (ring.length - rightindex)) {
//             step = decideShift(leftindex, rightindex, ring, key, i + 1)(step)
//         }
//         //顺时针更快
//         else {
//             step = shiftRigth(ring, rightindex, step)
//         }
//     }
//     return step
// };
// findRotateSteps("caotmcaataijjxi",
// "oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx")

// 抄答案！！！
var findRotateSteps = function (ring, key) {
    const indexMap = {};
    for (let i = 0; i < ring.length; i++) {
        const c = ring[i];
        if (indexMap[c]) {
            indexMap[c].push(i);
        } else {
            indexMap[c] = [i];
        }
    }

    const dfs = (ringI, keyI) => {
        if (keyI == key.length) {
            return false;
        }
        const cur = key[keyI];
        let res = Infinity;
        for (const targetI of indexMap[cur]) {
            const d1 = Math.abs(ringI - targetI);
            const d2 = ring.length - d1;
            const curMin = Math.min(d1, d2);
            res = Math.min(res, curMin + dfs(targetI, keyI + 1));
        }
        return res;
    };
    return key.length + dfs(0, 0);
};
findRotateSteps("caotmcaataijjxi",
"oatjiioicitatajtijciocjcaaxaaatmctxamacaamjjx")

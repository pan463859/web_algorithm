var removeKdigits = function (num, k) {
    let q = [num[0]]
    for (var i = 1; k && i < num.length; i++) {
        if (num[i] < num[i - 1]) {
            while (k && q[q.length - 1] > num[i]) {
                k--
                q.pop()
            }
        }
        q.push(num[i])
    }
    let result = q.join('') + num.slice(i)
    if (k > 0) {
        result = result.slice(0, -k).replace(/^0*([^0]*)/, (_, a) => a || 0)
    } else {
        result = result.replace(/^0*([^0]*)/, (_, a) => a || 0)
    }
    return result

}

function replacer(match, p1, p2, p3, offset, string) {
}
console.log(removeKdigits("4678", 2))

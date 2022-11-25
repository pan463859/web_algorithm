
var monotoneIncreasingDigits = function (n) {
    const arrayN = String(n).split('');
    let splitIndex = arrayN.length
    for (let i = arrayN.length - 1; i > 0; i--) {
        // 一旦发生借位，后面的的数字直接拉满成 9999 就是局部最优解
        if (arrayN[i] >= arrayN[i - 1]) {
            continue
        } else {
            arrayN[i - 1] = arrayN[i - 1] - 1
            splitIndex = i
        }
    }
    while (splitIndex < arrayN.length) {
        arrayN[splitIndex] = 9
        splitIndex++
    }
    return arrayN.join('') || 0
};


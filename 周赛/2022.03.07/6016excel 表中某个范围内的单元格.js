var cellsInRange = function (s) {
    let result = []
    for (let i = s[0].charCodeAt(); i <= s[3].charCodeAt(); i++) {
        for (let j = Number(s[1]); j <= Number(s[4]); j++) {
            result.push(String.fromCharCode(i) + j)
        }
    }
    console.log(result)
    return result
};
cellsInRange("U7:X9")
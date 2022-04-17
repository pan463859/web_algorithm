// let s = "[123,[456,[789]]]";
var deserialize = function (s) {
    let index = 0;
    const dfs = (s) => {
        if (s[index] === '[') {
            index++;
            const ni = [];
            while (s[index] !== ']') {
                let tempresult=dfs(s)
                console.log('tempresult',tempresult)
                ni.push(tempresult);
                if (s[index] === ',') {
                    index++;
                }
            }
            index++;
            console.log('ni',ni)
            return ni;
        } else {
            let negative = false;
            if (s[index] === '-') {
                negative = true;
                index++;
            }
            let num = 0;
            while (index < s.length && isDigit(s[index])) {
                num = num * 10 + s[index].charCodeAt() - '0'.charCodeAt();
                index++;
            }
            if (negative) {
                num *= -1;
            }
            return num;
        }
    }
    return dfs(s);
};

const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}
let s = "[123,[456,[789]]]";
deserialize(s)
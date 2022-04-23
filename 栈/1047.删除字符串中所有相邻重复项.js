
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] == s[i]) {
            stack.pop();
            i++;
        }
        stack.push(s[i])
    }
    return stack.join('')
};
removeDuplicates("aaaaaaaa")
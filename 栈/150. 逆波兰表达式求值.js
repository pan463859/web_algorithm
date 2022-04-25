var evalRPN = function (tokens) {
    let stack = []
    let operations = {
        "+": (a, b) => a * 1 + b * 1,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => (b / a) | 0,
    }
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] in operations) {
            stack.push(operations[tokens[i]](stack.pop(), stack.pop()))
        }
        else {
            stack.push(tokens[i])
        }
    }
    return stack[0]
};
evalRPN(["4", "13", "5", "/", "+"])
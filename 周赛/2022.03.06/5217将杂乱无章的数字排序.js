var sortJumbled = function (mapping, nums) {
    return nums.sort((a, b) => {
        return (String(a).split('').reduce((pre, cur) => {
            return pre += String(mapping[cur])
        }, '')) - (String(b).split('').reduce((pre, cur) => {
            return pre += String(mapping[cur])
        }, ''))
    })
};

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6],
    [991, 338, 38]))
console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [789, 456, 123]))

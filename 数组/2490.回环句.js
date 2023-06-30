/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    const allWord = sentence.split(' ')
    const len = allWord.length
    if (sentence[0] !== sentence[sentence.length - 1]) {
        return false
    }
    let i = 0
    while (i < len - 1) {
        if (allWord[i][allWord[i].length - 1] == allWord[i + 1][0]) {
            i++
            continue
        } else {
            return false
        }
    }
    return true
};
isCircularSentence("leetcode exercises sound delightful")
/**
 * 给你一个整数数组 cards ，其中 cards[i] 表示第 i 张卡牌的 值 。如果两张卡牌的值相同，则认为这一对卡牌 匹配 。

返回你必须拿起的最小连续卡牌数，以使在拿起的卡牌中有一对匹配的卡牌。如果无法得到一对匹配的卡牌，返回 -1 。

输入：cards = [3,4,2,3,4,7]
输出：4
解释：拿起卡牌 [3,4,2,3] 将会包含一对值为 3 的匹配卡牌。注意，拿起 [4,2,3,4] 也是最优方案。
 * 
 */

/**
 * @param {number[]} cards
 * @return {number}
 */
 var minimumCardPickup = function (cards) {
    let dictionary = {}
    let l = 0
    let minlength = Number.MAX_VALUE
    for (let r = 0; r < cards.length; r++) {
        let curnumber = cards[r]
        dictionary[curnumber] = !!dictionary[curnumber] ? dictionary[curnumber] + 1 : 1
        if (dictionary[curnumber] == 2) {
            while (dictionary[curnumber] == 2) {
                dictionary[cards[l]]--
                l++
            }
            minlength = minlength > r - l + 2 ? r - l + 2 : minlength
        }
    }
    return minlength== Number.MAX_VALUE?-1:minlength
};

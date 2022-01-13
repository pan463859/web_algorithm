/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    let orderedprice = costs.sort((a, b) => a - b)
    for (let i = 0; i < orderedprice.length; i++) {
        if (coins - orderedprice[i] >= 0) {
            coins -= orderedprice[i]
            continue
        } else {
            return i
        }
    }
    return costs.length
};
maxIceCream([1, 3, 2, 4, 1], 7)

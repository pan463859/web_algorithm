/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
    let bestSell = 0
    let cursell = 0
    let bestIndex = 0
    for (let i = 0; i < customers.length; i++) {
        const curItem = customers[i];
        if (curItem == 'Y') {
            cursell++
            if (cursell > bestSell) {
                bestSell = cursell
                bestIndex = i + 1 || 0
            }
        } else {
            cursell--
        }
    }
    return bestIndex
};
bestClosingTime("YYNY")


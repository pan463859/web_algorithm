/**
 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
x
 */
var lemonadeChange = function (bills) {
    let changes = {
        5: 0,
        10: 0,
        20: 0
    }
    for (let i = 0; i < bills.length; i++) {
        if (changes[5] < 0 || changes[10] < 0) {
            return false
        }
        switch (bills[i]) {
            case 5:
                changes[5]++
                break;
            case 10:
                changes[10]++
                changes[5]--
                break;
            case 20:
                if (changes[10] == 0) {
                    changes[5] = changes[5] - 3
                } else {
                    changes[10]--
                    changes[5]--
                }
                break;
        }
    }
    if (changes[5] < 0 || changes[10] < 0) {
        return false
    }
    return true
};
lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20])
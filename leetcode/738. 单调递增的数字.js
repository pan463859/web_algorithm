/*给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。

（当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

示例 1:

输入: N = 10
输出: 9
示例 2:

输入: N = 1234
输出: 1234
示例 3:

输入: N = 332
输出: 299
说明: N 是在 [0, 10^9] 范围内的一个整数。
*/

//1321
var monotoneIncreasingDigits = function (N) {
    //a=[1,3,2,1] i=4 start=4 
    let a = N.toString().split(''), i = start = a.length
    while (--i) {
        //i=3 start=2 a=[1,3,1,1]
        //i=2 start=1 a=[1,2,1,1]
        //
        if (a[i] < a[i - 1]) {
            start = i - 1
            a[i - 1]--
        }
    }
    //stsart=1
    //++start=2<4 a[2]=9 a=[1,2,9,1]
    //++start=3<4 a[3]=9 a=[1,2,9,9]
    while (++start < a.length) a[start] = '9'
    return a.join('') | 0
};

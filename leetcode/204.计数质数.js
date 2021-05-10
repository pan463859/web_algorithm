// 如果一个数不是质数，那么一定可以表示成两个数（除了1和它本身）相乘，两个数就一定有一个数会小于或者等于它的平方根，只有找到了再它平方根内找到这个数，说明这个数就不是质数 该算法的时间复杂度为O（n^3/2）
function isPrimeNum(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) { if (num % i == 0) return false; }
    return true;
}
var countPrimes = function (n) {
    let result = 0
    for (var i = 2; i < n; i++) { if (isPrimeNum(i)) result++; }
    return result;
}

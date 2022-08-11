/**
 题目描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例1：
输入: coins = [1, 2, 5], amount = 11

输出: 3
解释: 11 = 5 + 5 + 1

示例2：
输入: coins = [2], amount = 3

 */
/**
 * 思路分析：
 用 c1、c2、c3......cn 分别来表示题目中给到我们的第 1-n 个硬币。现在我如果从 amout 美分的总额中拿走一个硬币，那么有以下几种可能：
  假如用 f(x）表示每一个总额数字对应的最少硬币数，那么我们可以得到以下的对应关系：
f(amout) = Math.min(f(amout-c1)+1,f(amout-c2)+1,f(amout-c3)+1......f(amout-cn)+1)
这套对应关系，就是本题的状态转移方程。
 */
// const coinChange = function (coins, amount) {
//     // 用于保存每个目标总额对应的最小硬币个数
//     const c = []
//     // 提前定义已知情况
//     c[0] = 0
//     // 遍历 [1, amount] 这个区间的硬币总额
//     for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
//         // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
//         c[currentAmount] = Infinity
//         // 循环遍历每个可用硬币的面额
//         for (let j = 0; j < coins.length; j++) {
//             // 若硬币面额小于目标总额，则问题成立
//             if (currentAmount - coins[j] >= 0) {
//                 // 状态转移方程
//                 //currentAmount-coins[j],减去当前硬币面值后剩下的钱，
//                 c[currentAmount] = Math.min(c[currentAmount], c[currentAmount - coins[j]] + 1)
//             }
//         }
//     }
//     // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
//     if (c[amount] === Infinity) {
//         return -1
//     }
//     // 若有解，直接返回解的内容
//     return c[amount]
// };

function coinChange(coins, amout) {
  const dp = [];
  // 初始值
  dp[0] = 0;
  coins.sort((a, b) => {
    return a - b;
  });
  for (let curamount = 1; curamount <= amout; curamount++) {
    dp[curamount] = Infinity;
    for (let curcoin = 1; curcoin < coins.length; curcoin++) {
      if (curamount - coins[curcoin] >= 0) {
        // 转移方程
        dp[curamount] = Math.min(
          dp[curamount],
          dp[curamount - coins[curcoin]] + 1
        );
      } else {
        break;
      }
    }
  }
  return dp[amout] === Infinity ? -1 : dp[amout];
}
coinChange([1, 2, 5], 15);

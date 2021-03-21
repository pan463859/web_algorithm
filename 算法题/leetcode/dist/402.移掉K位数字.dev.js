"use strict";

/**.
 * 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。
示例 1 :

输入: num = "1432219", k = 3
输出: "1219"
解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
 */
var removeKdigits = function removeKdigits(num, k) {
  var q = [num[0]];

  for (var i = 1; k && i < num.length; i++) {
    if (num[i] < num[i - 1]) {
      while (k && q[q.length - 1] > num[i]) {
        k--;
        q.pop();
      }
    }

    q.push(num[i]);
  }

  var result = q.join('') + num.slice(i);

  if (k > 0) {
    result = result.slice(0, -k).replace(/^0*([^0]*)/, function (_, a) {
      return a || 0;
    });
  } else {
    result = result.replace(/^0*([^0]*)/, function (_, a) {
      return a || 0;
    });
  }

  return result;
};

function replacer(match, p1, p2, p3, offset, string) {}

console.log(removeKdigits("4678", 2));
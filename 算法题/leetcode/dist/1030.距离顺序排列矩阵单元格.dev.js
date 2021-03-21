"use strict";

/**
 * 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。

另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。

返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/matrix-cells-in-distance-order
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
//找到所有坐标
//0 <= r < R 且 0 <= c < C
//对所有坐标进行排序，排序规则为曼哈顿距离
var allCellsDistOrder = function allCellsDistOrder(R, C) {
  var r0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var c0 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var result = [];

  for (var i = 0; i <= R - 1; i++) {
    for (var j = 0; j <= C - 1; j++) {
      var temparr = [i, j];
      result.push(temparr);
    }
  }

  return result.sort(function (a, b) {
    return Math.abs(a[0] - r0) + Math.abs(a[1] - c0) - (Math.abs(b[0] - r0) + Math.abs(b[1] - c0));
  });
}; //总体来说比较简单，现在对sort排序方法使用比较熟练，说明刻意练习还是很有效的
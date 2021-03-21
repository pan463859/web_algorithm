"use strict";

/**
 * 我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

（这里，平面上两点之间的距离是欧几里德距离。）

你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。
 * 
 */

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
//数组根据到远点的距离排序
//排序结束后返回数组钱的k个元素
var kClosest = function kClosest(points, K) {
  var orderedarray = points.sort(function (a, b) {
    return Math.pow(a[0], 2) + Math.pow(a[1], 2) - (Math.pow(b[0], 2) + Math.pow(b[1], 2));
  });
  return orderedarray.slice(0, K);
};
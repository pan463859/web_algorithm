"use strict";

/**
 * @param {number[]} A
 * @return {boolean}
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]
 */
var isOrder = function isOrder(array, isup) {
  if (isup) {
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i + 1] - array[i] <= 0) {
        return false;
      }

      return true;
    }
  } else {
    for (var _i = 0; _i < array.length - 1; _i++) {
      if (array[_i + 1] - array[_i] >= 0) {
        return false;
      }
    }

    return true;
  }
};

var validMountainArray = function validMountainArray(A) {
  //终止条件
  if (A.length < 3) {
    return false;
  } //找到最大值所在的下标，找到山顶


  var maxindex;

  for (var i = 0; i < A.length - 1; i++) {
    if (A[i + 1] >= A[i]) {
      continue;
    } else {
      maxindex = i;
      break;
    }
  }

  if (maxindex == undefined) {
    return false;
  } //拆分成增序和降序两个数组，如果存在空数组，则直接返回false


  var leftA = A.slice(0, maxindex + 1);
  var rightA = A.slice(maxindex, A.length + 1);

  if (leftA.length == 1 || rightA.length == 1) {
    return false;
  } //判断两个数组是否有序且不重复


  return isOrder(leftA, true) && isOrder(rightA, false);
}; //潘小安 2020.11.02日
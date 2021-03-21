"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 */
// 经过一段时间的联系，对于双指针的排序可以很熟练的自己写出来对应代码~
var findMedianSortedArrays = function findMedianSortedArrays(nums1, nums2) {
  var num1index = 0,
      num2index = 0,
      result = [];

  for (var i = 0; i < nums1.length + nums2.length; i++) {
    // 某个数组推完了
    if (num2index == nums2.length) {
      result.push.apply(result, _toConsumableArray(nums1.slice(num1index, nums1.length)));
      break;
    }

    if (num1index == nums1.length) {
      result.push.apply(result, _toConsumableArray(nums2.slice(num2index, nums2.length)));
      break;
    }

    if (nums1[num1index] > nums2[num2index]) {
      result.push(nums2[num2index]);
      num2index++;
    } else {
      result.push(nums1[num1index]);
      num1index++;
    }
  }

  if (result.length % 2 > 0) {
    return result[Math.floor(result.length / 2)];
  } else {
    return (result[Math.floor(result.length / 2)] + result[Math.floor(result.length / 2) - 1]) / 2;
  }
};

findMedianSortedArrays([1, 3], [2]);
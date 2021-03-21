"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？


示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */
//复杂度O(n)
var searchRange = function searchRange(nums, target) {
  var result = [];

  if (nums.length == 0) {
    return [-1, -1];
  }

  if (nums.indexOf(target) > -1) {
    result.push(nums.indexOf(target));
  }

  if (nums.lastIndexOf(target) > -1) {
    nums.push(nums.lastIndexOf(target));
  }

  if (result.length == 1) {
    result[1] = result[0];
    return result;
  }

  if (result.length == 0) {
    return [-1, -1];
  }
}; //复杂度log(n)二分查找


var searchRange = function searchRange(nums, target) {
  if (nums.length == 0) {
    return [-1, -1];
  }

  var leftnums = nums.slice(0, Math.floor(nums.length / 2));
  var rightnums = nums.slice(Math.floor(nums.length / 2), nums.length);
  var leftbegin, leftend, rightbegin, rightend;
  leftbegin = leftnums.indexOf(target);
  leftend = leftnums.lastIndexOf(target);
  rightbegin = rightnums.indexOf(target) > -1 ? rightnums.indexOf(target) + Math.floor(nums.length / 2) : rightnums.indexOf(target);
  rightend = rightnums.lastIndexOf(target) > -1 ? rightnums.lastIndexOf(target) + Math.floor(nums.length / 2) : rightnums.lastIndexOf(target);
  var result = [leftbegin, leftend, rightbegin, rightend];
  result = result.filter(function (item, index) {
    return item != -1;
  });

  if (result.length > 1) {
    return [Math.min.apply(Math, _toConsumableArray(result)), Math.max.apply(Math, _toConsumableArray(result))];
  }

  if (result.length == 1) {
    return [result[0], result[0]];
  } else {
    return [-1, -1];
  }
};

searchRange([5, 7, 7, 8, 8, 10], 8);
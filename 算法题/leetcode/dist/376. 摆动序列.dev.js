"use strict";

/**
如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为摆动序列。第一个差（如果存在的话）可能是正数或负数。少于两个元素的序列也是摆动序列。

例如， [1,7,4,9,2,5] 是一个摆动序列，因为差值 (6,-3,5,-7,3) 是正负交替出现的。相反, [1,4,7,2,5] 和 [1,7,4,5,5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。

给定一个整数序列，返回作为摆动序列的最长子序列的长度。 通过从原始序列中删除一些（也可以不删除）元素来获得子序列，剩下的元素保持其原始顺序。
*/

/**
 * 思路：所谓的差为正还是负实际上就是元素之间的值得升降
 * 只需要遍历一次数组，记录数组的升降值后
 * 对数组的升降结果进行连续重复去重得到的数组长度+1
 * 就是需要的长度
 */
var wiggleMaxLength = function wiggleMaxLength(nums) {
  if (nums.length == 0) {
    return 0;
  }

  if (nums.length == 1) {
    return 1;
  }

  var resultarr = [];

  for (var i = 0; i < nums.length; i++) {
    //根据大小获得整个数组的升降顺序数组
    if (nums[i + 1] - nums[i] > 0) {
      resultarr.push('+');
    }

    if (nums[i + 1] - nums[i] == 0) {
      resultarr.push('=');
    }

    if (nums[i + 1] - nums[i] < 0) {
      resultarr.push('-');
    }
  }

  if (resultarr.length == 1) {
    if (resultarr[0] == '=') {
      return 1;
    } else {
      return 2;
    }
  }

  var cur = '';

  for (var j = 0; j < resultarr.length; j++) {
    //是等号的就直接排除
    if (resultarr[j] == '=') {
      resultarr.splice(j, 1);
      j--;
      continue;
    }

    if (cur !== resultarr[j]) {
      cur = resultarr[j];
    } else {
      resultarr.splice(j, 1);
      j--;
    }
  }

  console.log(resultarr);
  return resultarr.length + 1;
};

wiggleMaxLength([0, 0, 0]);
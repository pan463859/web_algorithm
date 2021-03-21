"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function wordPattern(pattern, s) {
  var indexarr = pattern.split('');
  var strarr = s.split(' ');
  var obj = {};

  for (var i = 0; i < indexarr.length; i++) {
    if (obj[indexarr[i]]) {
      if (obj[indexarr[i]] == strarr[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      obj[indexarr[i]] = strarr[i];
    }
  } //{a:dog,b:dog}


  if (_toConsumableArray(new Set(Object.values(obj))).length == Object.keys(obj).length) {
    return true;
  } else {
    return false;
  }
};

wordPattern("abba", "dog cat cat dog");
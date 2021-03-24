"use strict";

var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  if (s == "") {
    return 0;
  }

  if (s === " ") {
    return 1;
  }

  var arr = s.split('');
  var obj = {};
  var max = 0;
  var cur = 0;

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = i;
      cur++;
    } else {
      i = obj[arr[i]];

      if (cur > max) {
        max = cur;
      }

      cur = 0;
      obj = {};
    }
  }

  return cur > max ? cur : max;
};
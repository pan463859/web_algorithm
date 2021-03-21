"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:

输入: S = "aab"
输出: "aba"
示例 2:

输入: S = "aaab"
输出: ""

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reorganize-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} S
 * @return {string}
 * 思路：
 * 1.如果每个都是一个的话自然是直接通过的
 * 2.如果需要满足条件，需要其中重复最高的数字不能超过ceil(len/2)的个数（数学归纳法），否则就一定会有相邻字符
 * 3.字符串转换成对象，记录每个字符出现次数，最高的超过了边界值，直接返回空字符串
 * 4.最高数没超过边界值，按照顺序进行插入，保证不重复
 * 
 * 
 */
var reorganizeString = function reorganizeString(S) {
  var obj = {};
  var maxkey = '';
  var maxnum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = S[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (obj[item]) {
        obj[item]++;

        if (obj[item] > maxnum) {
          maxnum = obj[item];
          maxkey = item;
        }

        if (obj[item] > Math.ceil(S.length / 2)) {
          return '';
        }
      } else {
        obj[item] = 1;
      }
    } //最高数没超过边界值，按照顺序进行插入，保证不重复

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var temparr = new Array(maxnum).fill(maxkey);
  delete obj[maxkey];
  var insertindex = 1;

  while (temparr.length < S.length) {
    for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      for (var i = 0; i < value; i++) {
        temparr.splice(insertindex, 0, key);
        insertindex += 2;
        maxnum--; //插槽满了

        if (maxnum == 0) {
          insertindex = 1;
          maxnum = temparr.length;
        }
      }
    }
  }

  console.log(temparr);
};

reorganizeString("todrnphcamnomskfrhe"); // https://leetcode-cn.com/problems/reorganize-string/solution/mei-chao-guo-duo-shao-yong-hu-dan-shi-zhu-shi-xian/
"use strict";

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 给出一个无重叠的 ，按照区间起始端点排序的区间列表。
在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 */
//乍看题目是二维数组，可能要用到两层循环，但是每个子数组是固定的两个数，且排好了序列

/**
 * 1.0
 * 1.先降维打击试试
 * 2.降维打击后，现在的数组下标偶数就是之前一层下标的两倍，奇数就是减一除以2
 * 3.找到比插入区间头部和尾部的位置涉及到插入操作，尝试使用链表
 * 4.链表合并，将链表还原成二维数组
 * 
 * 2.0
 * 未参与到的不能在最后环节进行还原，需要保持原始形态
 * 在插入过程中需要记录当前插入和结束插入的坐标，并且在还原时候对下标进行选择性还原
 * 
 *  */
// function isOdd(num) {
//     return num % 2 == 0
// }
// function ListNode(val, index) {
//     this.val = val
//     this.next = null
//     //记录原二维数组时候的一阶段下标
//     this.index = isOdd(index) ? index / 2 : (index - 1) / 2
// }
// function faltarr(doublearray) {
//     let flattedarr = []
//     for (let i = 0; i < doublearray.length; i++) {
//         flattedarr.push(...doublearray[i])
//     }
//     return flattedarr
// }
// function toListNode(A) {
//     let head = new ListNode(A[0], 0)
//     let begincur = head
//     for (let j = 1; j < A.length; j++) {
//         begincur.next = new ListNode(A[j], j)
//         begincur = begincur.next
//     }
//     return head
// }
// var insert = function (intervals, newInterval) {
//     if (intervals.length == 0) {
//         return [newInterval]
//     }
//     //降维打击
//     let flattedarr = faltarr(intervals)
//     //转成链表操作
//     let head = toListNode(flattedarr)
//     let inserthead = toListNode(newInterval)
//     //做链表的合并操作
//     let cur = head
//     let beginindex = 0
//     let endindex = 0
//     while (inserthead && cur.next) {
//         if (cur.val <= inserthead.val && cur.next.val >= inserthead.val) {
//             //记录开始和结束下标
//             //inserthead.next还存在，说明定位尾下标
//             if (inserthead && inserthead.next) {
//                 beginindex = cur.index
//                 inserthead.index = cur.index
//             } else {
//                 if (cur.index == cur.next.index) {
//                     endindex = cur.index
//                 } else {
//                     endindex = cur.next.index
//                 }
//                 inserthead.index = endindex
//             }
//             let tempval = cur.next
//             let tempinsert = inserthead.next
//             cur.next = inserthead
//             inserthead.next = tempval
//             inserthead = tempinsert
//             cur = tempval
//         } else {
//             cur = cur.next
//         }
//     }
//     if (inserthead) {
//         cur.next = inserthead
//     }
//     //出来的head就是一个拍好序的链表，将链表还原成二维数组
//     let resultarr = []
//     let childarr = []
//     for (let i = 0; i < intervals.length; i++) {
//         if (head.index >= beginindex && head.index <= endindex) {
//             while (head && head.next) {
//                 childarr.push(head.val)
//                 while (!!head.next && head.index <= endindex) {
//                         head = head.next
//                 }
//                 childarr.push(head.val)
//                 i = head.index
//                 resultarr.push(childarr)
//                 head = !!head.next ? head.next : null
//                 childarr = []
//             }
//         }
//         else {
//             while (head.index == i) {
//                 head = head.next
//             }
//             resultarr.push(intervals[i])
//         }
//     }
//     return resultarr
// };
function insert(intervals, newInterval) {
  var res = [];
  var i = 0;
  var len = intervals.length;

  while (i < len && intervals[i][1] < newInterval[0]) {
    // 当前遍历的是蓝左边的，不重叠的区间
    res.push(intervals[i]);
    i++;
  }

  if (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); //左端取较小者，更新给兰区间的左端
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    // 当前遍历是有重叠的区间
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]); //右端取较大者，更新给兰区间的右端

    i++;
  }

  res.push(newInterval); // 循环结束后，兰区间为合并后的区间，推入res

  while (i < len) {
    // 在蓝右边，没重叠的区间
    res.push(intervals[i]);
    i++;
  }

  return res;
} //使用链表尝试了很久，奈何边界条件太多
//以后有机会再尝试用链表试试 
//通过代码参考精选评论，在基础上改进了一下
//2020.11.05 潘小安
//2020.11.04的每日一题
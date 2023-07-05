/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var reverseList = function (head) {
        let prev = null
        let curr = head
        while (curr) {
            //保存下一个节点
            const next = curr.next;
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    };
    let reversel1 = reverseList(l1)
    let reversel2 = reverseList(l2)
    let res = new ListNode()
    let dummy = res
    let additonNum = false
    while (reversel1 || reversel2) {
        const reversel1val = reversel1 ? reversel1.val : 0
        const reversel2val = reversel2 ? reversel2.val : 0
        const curNode = new ListNode()
        const curVal = additonNum ? reversel1val + reversel2val + 1 : reversel1val + reversel2val
        curNode.val = curVal % 10
        additonNum = false
        if (curVal >= 10) {
            additonNum = true
        }
        res.next = curNode
        res = res.next
        reversel1 = reversel1 ? reversel1?.next : null
        reversel2 = reversel2 ? reversel2?.next : null
    }
    if (additonNum) {
        res.next = new ListNode(1)
        res = res.next
    }
    return reverseList(dummy.next)
};
// @lc code=end


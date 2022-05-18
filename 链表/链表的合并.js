/**
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
 * 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 */
const { ListNode } = require('../../foundation/listnode')
const mergeTwoLists = function (l1, l2) {
    //创建一个新的链表节点
    let head = new ListNode()
    // “针”开始在 l1 和 l2 间穿梭了
    while (l1 && l2) {
        // 如果 l1 的结点值较小
        if (l1.val <= l2.val) {
            // 先串起 l1 的结点
            head.next = l1
            // l1 指针向前一步
            l1 = l1.next
        } else {
            // l2 较小时，串起 l2 结点
            head.next = l2
            // l2 向前一步
            l2 = l2.next
        }

        // “针”在串起一个结点后，也会往前一步
        cur = cur.next

    }

    // 处理链表不等长的情况
    cur.next = l1 !== null ? l1 : l2
    // 返回起始结点
    return head.next
};
/**
 * 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个结点后，链表变为 1->2->3->5.
 * 
 */
const { ListNode } = require('../../foundation/listnode')
/**
 * 思路分析：首先要找到链表的倒数第N个结点，实际上就是要先得到链表的长度
 * 之后再从正面开始找第lenght-N个结点
 * 乍看需要遍历两次，一次找到长度N 一次去找结点
 * 实际上可以通过快慢指针来进行操作
 * 设置两个指针，一个快指针，一个慢指针，两个指针之间相差n，当快指针到达链表末尾的时候，慢指针就是目标位置的前驱节点
 * 
 */
const removeNthFromEnd = function (head, n) {
    const dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy
    //快指针先走n步
    while (n != 0) {
        n--
        fast = fast.next
    }
    //查看fast是否到了头
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    //删除目标节点
    slow.next = slow.next.next
    return dummy.next
}
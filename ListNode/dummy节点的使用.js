/**
 * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
 * 输入: 1->2->3->3->4->4->5
输出: 1->2->5
 * 
 * 当处理有些链表问题需要对前驱节点保持引用关注的时候，第一个节点没有前驱节点
 * 这个时候就需要人为添加一个前驱节点
 * 类似于做图形题时候的辅助线一样
 * let dummynode =new NodeList()
 */
const { ListNode } = require('../../foundation/listnode')

const deleteduplicates = function (head) {
    //排除链表长度为0和1的情况
    if (!head || !head.next) {
        return false
    }
    // dummy 登场
    let dummy = new ListNode()
    // dummy 永远指向头结点
    dummy.next = head
    // cur 从 dummy 开始遍历
    let cur = dummy
    while (cur.next && cur.next.next) {
        // 对 cur 后面的两个结点进行比较
        if (cur.next.val === cur.next.next.val) {
            // 若值重复，则记下这个值
            let val = cur.next.val
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while (cur.next && cur.next.val === val) {
                // 若有，则删除
                cur.next = cur.next.next
            }
        } else {
            // 若不重复，则正常遍历
            cur = cur.next
        }
    }
    // 返回链表的起始结点
    return dummy.next;
}
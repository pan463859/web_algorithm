/*
真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。
简单直接，要翻转一个链表要怎么做？
直观思维就是转成数组之后翻转后再转回链表？
*/
//链表反转的关键步骤就是 cur.next=pre 需要把当前节点的下一个节点指向前面的节点
const reverseList = function (head) {
    let pre = null
    let cur = head
    //边界条件为最后一个节点
    while (cur.next != null) {
        //暂时保存下一个节点
        let tempnext = cur.next
        cur.next = pre
        pre = cur
        cur = tempnext
    }
    return pre
}

/*
真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
 */
const reverseBetween = function (head, m, n) {
    // 定义pre、cur，用leftHead来承接整个区间的前驱结点
    let pre, cur, leftHead
    // 别忘了用 dummy 嗷
    const dummy = new ListNode()
    // dummy后继结点是头结点
    dummy.next = head
    // p是一个游标，用于遍历，最初指向 dummy
    let p = dummy
    // p往前走 m-1 步，走到整个区间的前驱结点处
    for (let i = 0; i < m - 1; i++) {
        p = p.next
    }
    // 缓存这个前驱结点到 leftHead 里
    leftHead = p
    // start 是反转区间的第一个结点
    let start = leftHead.next
    // pre 指向start
    pre = start
    // cur 指向 start 的下一个结点
    cur = pre.next
    // 开始重复反转动作
    for (let i = m; i < n; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    //  leftHead 的后继结点此时为反转后的区间的第一个结点
    leftHead.next = pre
    // 将区间内反转后的最后一个结点 next 指向 cur
    start.next = cur
    // dummy.next 永远指向链表头结点
    return dummy.next
};
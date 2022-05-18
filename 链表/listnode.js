function ListNode(val) {
    this.val = val
    this.next = null
}
module.exports = { ListNode }
const node1 = new ListNode(1)
node1.next = new ListNode(2)
//创建一个value为1，next元素value为2的链表

//链表元素的添加
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3

//链表元素的删除
//删除node3节点
node1.next = node3.next


// **在增删的操作中，重要的是找到目标节点的前驱节点**
//相对于数组来说，链表的又是是不需要挪动多余的元素
//但是寻找前驱节点的时候比数组困难


//快速上手——从0到1掌握算法面试需要的数据结构（三）
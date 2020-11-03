/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    let currentnode = head
    //循环边际条件
    while (currentnode.val != null && currentnode.next.val != null) {
        //值相同则删除节点
        if (currentnode.val == currentnode.next.val) {
            currentnode.next = currentnode.next.next
        }
        //遍历下一个节点 
        else {
            currentnode = currentnode.next
        }
    }
    return currentnode
};

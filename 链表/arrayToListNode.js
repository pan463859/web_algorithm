function ListNode(val) {
    this.val = val
    this.next = null
}
function arrayToListNode(s) {
    let root = new ListNode(s[0])
    let dummy = root
    for (let i = 1; i < s.length; i++) {
        let temp = new ListNode(s[i]);
        dummy.next = temp;
        dummy = temp;
    }
    return root
}
module.exports = { arrayToListNode }

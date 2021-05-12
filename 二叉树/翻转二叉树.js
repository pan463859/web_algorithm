/*题目描述：翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/
let test = {
    val: 1,
    left: {
        val: 9
    },
    right: {
        val: 20,
    }
}
function invertTree(root) {
    if (!root) {
        return root
    }
    if (root.left == null && root.right == null) {
        return root;
    }
    let right = invertTree(root.right)
    let left = invertTree(root.left)
    root.left = right
    root.right = left
    return root
}
console.log(invertTree(test))

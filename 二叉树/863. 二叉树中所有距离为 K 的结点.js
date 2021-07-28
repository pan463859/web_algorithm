/*
给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。

返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。

1.用map保存每个节点的父节点方便用来寻址和计算距离
2.做完第一步之后，数据结构其实不叫二叉树，其实有点图的感觉，因为直接从target节点进行初始的遍历
3.from这个值很重要，通过from来阻止遍历过程走回头路。
4.我还是那个菜鸟~

*/
//BFS+链表

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

 var distanceK = function (root, target, k) {
    var relationmap = new Map()
    var result = []
    //先深度优先遍历，把每个节点本身作为key值，节点的父节点作为value
    function dfs(node) {
        if (!!node.left) {
            relationmap.set(node.left.val, node)
            dfs(node.left)
        }
        if (!!node.right) {
            relationmap.set(node.right.val, node)
            dfs(node.right)
        }
    }~
    dfs(root)
    function findAns(node, from, depth, k) {
        if (node == null) {
            return;
        }
        //距离够了，推进结果数组
        if (depth == k) {
            result.push(node.val);
            return;
        }
        //从左子树寻找，from来阻止遍历过程走回头路
        if (node.left != from) {
            findAns(node.left, node, depth + 1, k)
        }
        //从右子树寻找,from来阻止遍历过程走回头路
        if (node.right != from) {
            findAns(node.right, node, depth + 1, k)
        }
        //从祖先寻找,from来阻止遍历过程走回头路
        if (relationmap.get(node.val) != from) {
            findAns(relationmap.get(node.val), node, depth + 1, k);
        }


    }
    findAns(target, null, 0, k)
    return result
};
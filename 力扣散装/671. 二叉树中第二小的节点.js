/*
给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

更正式地说，root.val = min(root.left.val, root.right.val) 总成立。

给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
*/

// 解题思路
// 1.首先还是要用深度遍历，因为存在叶子节点比祖先还小的情况
// 2.但是可以根据情况进行剪枝，当第二大的临时值secondmin已经赋值的情况下，当前node的值需要小于secondmin才去进行递归遍历

var findSecondMinimumValue = function (node) {
    let secondmin = -1
    let min = node.val
    const dfs = (node) => {
        //node不存在或者node的值比secondmin大直接返回
        if (!node||secondmin != -1 && node.val >= secondmin) {
            return
        }
        //secondmin未赋值或者node的值比secondmin小，重新赋值secondmin
        if (node.val > min) {
            secondmin = node.val
        }
        //secondmin未被二次赋值，或者当前节点小于secondmin时候
        if (secondmin==-1||node.val < secondmin) {
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(node)
    return secondmin
};

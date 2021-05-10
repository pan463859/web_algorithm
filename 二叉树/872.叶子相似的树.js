/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function (root1, root2) {
    let result1 = []
    let result2 = []
    dfs(root1, result1)
    dfs(root2, result2)
    return result1.toString()==result2.toString()
};

function dfs(root, result) {
    if (root.left == null && root.right == null) {
        result.push(root.val)
    }
    if (!!root.left) {
        dfs(root.left, result)
    }
    if (!!root.right) {
        dfs(root.right, result)
    }
}
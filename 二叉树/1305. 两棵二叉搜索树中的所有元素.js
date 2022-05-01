/*
给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。
输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4]
*/

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
 * @return {number[]}
 */
 var getArrayFromBinaryTree = function (tree, array) {
    !!tree && tree.left != null && getArrayFromBinaryTree(tree.left, array)
    !!tree && tree.val != null && array.push(tree.val)
    !!tree && tree.right != null && getArrayFromBinaryTree(tree.right, array)
}
var mergeOrderArray = function (arr1, arr2) {
    let res = []
    let i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] >= arr2[j]) {
            res.push(arr2[j])
            j++
        } else {
            res.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        res.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        res.push(arr2[j])
        j++
    }
    return res
}
var getAllElements = function (root1, root2) {
    let array1 = []
    let arrray2 = []
    getArrayFromBinaryTree(root1, array1)
    getArrayFromBinaryTree(root2, arrray2)
    return mergeOrderArray(array1, arrray2)
};
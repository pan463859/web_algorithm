/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let obj = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3,
        left: {
            val: 6
        },
        right: {
            val: 7
        }
    }
}
var levelOrder = function (root) {
    let result = []
    let queue = []
    if (!root) {
        return []
    }
    queue.push(root)
    while (queue.length > 0) {
        result.push([])
        let queuelength = queue.length
        console.log(queuelength)
        for (let i = 0; i < queuelength; i++) {
            result[result.length - 1].push(queue[i].val)
            !!queue[i].left && queue.push(queue[i].left)
            !!queue[i].right && queue.push(queue[i].right)
        }
        queue.splice(0, queuelength)
    }
    return result
};
levelOrder(obj)

//2022 年 5.29日
var levelOrder = function (root) {
    let queue = [];
    let res = []
    if (root == null) {
        return res
    }
    queue.push(root)
    while (queue.length > 0) {
        const len = queue.length
        const curlevel = []
        for (let i = 0; i < len; i++) {
            const curnode = queue.shift()
            curlevel.push(curnode.val)
            curnode.left && queue.push(curnode.left);
            curnode.right && queue.push(curnode.right)
        }
        res.push(curlevel)
    }
    return res
};
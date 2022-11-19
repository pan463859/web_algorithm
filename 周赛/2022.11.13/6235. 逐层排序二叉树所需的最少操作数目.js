/**
 * @param {TreeNode} root
 * @return {number}
 * 给你一个 值互不相同 的二叉树的根节点 root 。

在一步操作中，你可以选择 同一层 上任意两个节点，交换这两个节点的值。

返回每一层按 严格递增顺序 排序所需的最少操作数目。

节点的 层数 是该节点和根节点之间的路径的边数。

 */

// 层序遍历+选择排序
 var minimumOperations = function (root) {
    const stack = []
    let exchangeTime = 0
    stack.push(root)
    const count = (arr) => {
        const len = arr.length
        let minIndex
        for (let i = 0; i < len - 1; i++) {
            minIndex = i
            for (let j = i; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j
                }
            }
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
                exchangeTime++
            }
        }
    }
    while (stack.length > 0) {
        let curlevellength = stack.length
        count(stack.slice().map(node => node.val))
        while (curlevellength > 0) {
            const removenode = stack.shift()
            removenode.left && stack.push(removenode.left)
            removenode.right && stack.push(removenode.right)
            curlevellength--
        }
    }
    return exchangeTime
};


// 置换环算法
var minimumOperations = function(root) {
    if (!root) {
        return 0;
    }
    let ans = index = 0;
    const queue = [root];
    while (index < queue.length) {
        const size = queue.length;
        const level = [];
        for (; index < size; index++) {
            const node  = queue[index];
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        const sorted = [...level].sort((a, b) => a - b);
        const map = new Map();
        sorted.forEach((num, i) => {
            map.set(num, i);
        });
        const visited = new Array(level.length).fill(false);
        for (let i = 0; i < level.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                let start = i;
                let next = map.get(level[start]);
                let length = 1;
                while (start !== next) {
                    visited[next] = true;
                    length++;
                    next = map.get(level[next]);
                }
                ans = ans + length - 1;
            }
        }

    }
    return ans;
};
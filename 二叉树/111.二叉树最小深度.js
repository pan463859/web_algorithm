//剪枝梯归法
var minDepth = function (root) {
    if (root == null) return 0;
    if (root.left == null) {
        return minDepth(root.right) + 1;
    }
    if (root.right == null) {
        return minDepth(root.left) + 1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
//层序遍历思路的 bfs 法

var minDepth = function (root) {
    if (root === null) return 0;
    let queue = [root];
    let deepth = 0;
    while (queue.length) {
        let n = queue.length;
        deepth++;
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            // 如果左右节点都是null，则该节点深度最小
            if (node.left === null && node.right === null) {
                return deepth;
            }
            node.left && queue.push(node.left);;
            node.right && queue.push(node.right);
        }
    }
    return deepth;
};
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 */
 var closestNodes = function (root, queries) {
    // 对二叉搜索树进行中序遍历
    let treeValues = []
    const searchTree = (root) => {
        root.left && searchTree(root.left)
        treeValues.push(root.val)
        root.right && searchTree(root.right)
    }
    searchTree(root)
    // 二分查找
    const divideSearch = (treeValues, target) => {
        const result = []
        let left = 0
        let right = treeValues.length - 1
        while (left <= right) {
            const mid = Math.floor((right + left) / 2)
            if (treeValues[mid] > target) {
                right = mid - 1
                result[1] = treeValues[mid]
            }
            if (treeValues[mid] < target) {
                left = mid + 1
                result[0] = treeValues[mid]
            }
            if (treeValues[mid] == target) {
                return [target, target]
            }
        }
        return result

    }
    return queries.map((item) => {
        if (item > treeValues[treeValues.length - 1]) {
            return [treeValues[treeValues.length - 1], -1]
        }
        if (item < treeValues[0]) {
            return [-1, treeValues[0]]
        }
        return divideSearch(treeValues, item)
    })
};

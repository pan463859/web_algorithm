var hasPathSum = function (root, targetSum) {
    if (root == null) {
        return false
    }
    let isright = {
        result: false
    }
    calculate(root, targetSum, isright)
    return isright.result
};
function calculate(root, leftval, isright) {
    if (isright.result) {
        return
    }
    leftval = leftval - root.val
    if (!root.left && !root.right) {
        if (leftval == 0) {
            isright.result = true
        }
    } else {
        root.left && calculate(root.left, leftval, isright)
        root.right && calculate(root.right, leftval, isright)
    }
}

// 例题解析答案
function hasPathSum(root, sum) {
    if (root == null) {
        return false;
    }
    if (root.left == null && root.right == null) {
        return sum == root.val;
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}


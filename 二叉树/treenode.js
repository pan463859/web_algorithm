//结点构造函数
function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}
//当你需要新建一个二叉树结点时，直接调用构造函数、传入数据域的值就行了
const node = new TreeNode(1)
/**
 
 * 对树的遍历，就可以看做是对这三个部分的遍历。这里就引出一个问题：三个部分中，到底先遍历哪个、后遍历哪个呢？我们此处其实可以穷举一下，假如在保证“左子树一定先于右子树遍历”这个前提，那么遍历的可能顺序也不过三种：
根结点 -> 左子树 -> 右子树
左子树 -> 根结点 -> 右子树
左子树 -> 右子树 -> 根结点
上述三个遍历顺序，就分别对应了二叉树的先序遍历、中序遍历和后序遍历规则。

在这三种顺序中，根结点的遍历分别被安排在了首要位置、中间位置和最后位置。
所谓的“先序”、“中序”和“后序”，“先”、“中”、“后”其实就是指根结点的遍历时机。
 */
const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};
// 先序遍历
function preoroder(root) {
    if (!root) {
        return
    }
    //当前遍历的结点
    console.log('前序遍历当前遍历的结点值为', root.val)
    //遍历左子树
    preoroder(root.left)
    //遍历右子树
    preoroder(root.right)
}
//先序遍历的迭代法
//前序遍历，所有的右子树要等左子树遍历结束才去遍历
//但是很多左子树按照顺序会先遇到，所以考虑先进后出的数据结构
function preorderTraversal(root) {
    //使用栈保证顺序
    const result = []
    const stack = []
    if (!root) {
        return result
    }
    stack.push(root)
    while (stack.length) {
        //获取队头节点
        const cur = stack.pop()
        result.push(cur.val)
        //栈后进先出，先进后出，所有右子树先进，左子树后进
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return result
}

// 中序遍历
function inorder(root) {
    if (!root) {
        return
    }
    //遍历左子树
    inorder(root.left)
    //当前遍历的结点
    console.log('中序遍历当前遍历的结点值为', root.val)
    //遍历右子树
    inorder(root.right)
}
//中序遍历的迭代法
//中序遍历，还是用栈来解决的话
//中序遍历，需要先左子树，再父节点，再右子树
//那么应该就是要所有左子树先进栈再是所有父节点进栈，最后是右子树进栈
//然后依次出栈就可以完成二叉树的中序遍历
var inorderTraversal = function (root) {
    if (!root) {
        return []
    }
    let res = []
    let stack = []
    while (root != null || stack.length > 0) {
        //先把所有的左子树推入栈中
        while (!!root) {
            //处理中间节点，直接先进去
            stack.push(root);
            root = root.left;
        }
        //取出当前左子节点，放入结果数组，然后看一下这个节点有没有兄弟节点
        const curnode = stack.pop()
        res.push(curnode.val)
        //当前左节点对应的右节点，需要遍历右节点，优先去输出它的子节点里面的左节点
        root = curnode.right
    }
    return res
};


//后序遍历
function postorder(root) {
    // 递归边界，root 为空
    if (!root) {
        return
    }

    // 递归遍历左子树 
    postorder(root.left)
    // 递归遍历右子树  
    postorder(root.right)
    // 输出当前遍历的结点值
    console.log('后序遍历 当前遍历的结点值是：', root.val)
}
//后序遍历的顺序是左-右-父，使用辅助栈
var postorderTraversal = function (root) {
    if (!root) {
        return []
    }
    const res = []
    const stack = []
    while (root || stack.length) {
        //中间节点使用 unshift 处理，相当于最后下进入结果数组
        res.unshift(root.val)
        root.left && stack.push(root.left)



        //使用 unshift 处理，相当于最后下进入结果数组,所以先处理 right，才能让结果正确
        root.right && stack.push(root.right)

        root = stack.pop()
    }
    return res
};




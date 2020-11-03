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

// 先序遍历
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

//后序遍历
function postorder(root) {
    // 递归边界，root 为空
    if(!root) {
        return 
    }
     
    // 递归遍历左子树 
    postorder(root.left)  
    // 递归遍历右子树  
    postorder(root.right)
    // 输出当前遍历的结点值
    console.log('后序遍历 当前遍历的结点值是：', root.val)  
}
// inorder(root)
postorder(root)
// preoroder(root)



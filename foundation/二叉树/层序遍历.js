//二叉树的层序遍历最先想到的就是BFS（广度优先搜索）思想
//需要用队列和递归去处理
function BFC(root) {
    //初始化一个队列来保存
    const queue = []
    while (queue.length) {
        const top = queue[0]
        //拿值
        console.log(top.value)
        if (top.left) {
            queue.push(top.left)
        }
        if (top.right) {
            queue.push(top.right)
        }
        queue.shift()//访问结束，队头元素出列
    }

}

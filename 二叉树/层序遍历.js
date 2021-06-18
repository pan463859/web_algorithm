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
let obj={
    val:1,
    left:{
        val:2
    },
    right:{
        val:3
    }
}
 var levelOrder = function(root) {
    let result=[]
    let queue=[]
    if(!root){
        return []
    }
    queue.push(root)
    while(queue.length>0){
        result.push([])
        let queuelength=queue.length
        for(let i=0;i<queuelength;i++){
            result[result.length-1].push(queue[i].val)
            !!queue[i].left&&queue.push(queue[i].left)
            !!queue[i].right&&queue.push(queue[i].right)
        }
        queue.splice(0,queuelength)
    }
    return result
};
levelOrder(obj)
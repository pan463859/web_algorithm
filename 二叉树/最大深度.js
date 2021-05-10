var maxDepth = function (root) {
    if (root==null) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.rigth)) + 1
};
let test={
    val:1,
    left:{
        val:9
    },
    rigth:{
        val:20,
        left:{
            val:15,
        },
        rigth:{
            val:7
        }
    }
}
maxDepth(test)
console.log(maxDepth(test))
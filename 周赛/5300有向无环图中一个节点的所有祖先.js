var getAncestors = function (n, edges) {
    //0一定是没有祖先的
    let nodemap = new Array(n).fill(0).map(() => new Set());
    for (let i = 0; i < edges.length; i++) {
        nodemap[edges[i][1]].add(edges[i][0])
    }
    for (let j = 0; j < nodemap.length; j++) {
        if (nodemap[j].size > 0) {
            for (let node of nodemap[j]) {
                if (nodemap[node].size > 0) {
                    for (let fathernode of nodemap[node].values()) {
                        nodemap[j].add(fathernode)
                    }
                }
            }
        }
    }
    return nodemap.map((item) => Array.from(item).sort((a, b) => { return a - b }))
};
console.log(getAncestors(8,
    [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]]))
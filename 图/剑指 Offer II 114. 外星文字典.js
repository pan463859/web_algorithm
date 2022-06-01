var alienOrder = function (words) {
    const graph = new Graph(true)
    //找到所有的线索
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const start = words[i]
            const end = words[j];
            let k = 0
            while (k < start.length && k < end.length && start[k] == end[k]) {
                k++
            }
            if (!!start[k] && !!end[k]) {
                graph.addEdge(start[k], end[k])
            }
        }
    }
    console.log(graph)
    //合成所有线索，使用深度优先算法做一个拓扑排序
};
class Graph {
    constructor(isDirected = false) {
        //是否是有向图
        this.isDirected = isDirected
        //保存所有顶点
        this.vertexs = []
        //保存所有边边
        this.edgelist = new Map()
    }
    addVertex(v) {
        if (!this.vertexs.includes(v)) {
            this.vertexs.push(v)
            this.edgelist.set(v, new Set())
        }
    }
    addEdge(v, w) {
        if (!this.edgelist.get(v)) {
            this.addVertex(v)
        }
        if (!this.edgelist.get(w)) {
            this.addVertex(w)
        }
        this.edgelist.get(v).add(w)
        //是无向图还要加一条
        if (!this.isDirected) {
            this.edgelist.get(w).add(v)
        }
    }
}

alienOrder(["wrt", "wrf", "er", "ett", "rftt"])
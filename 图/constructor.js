
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
    getVertexs() {
        return this.vertexs
    }
    getEdgeList() {
        return this.edgelist
    }
}
module.exports=Graph
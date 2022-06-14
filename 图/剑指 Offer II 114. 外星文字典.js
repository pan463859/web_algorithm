const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}
const initColor = vertexs => {
    const color = {};
    for (let i = 0; i < vertexs.length; i++) {
        color[vertexs[i]] = Colors.WHITE
    }
    return color;
}
class Graph {
    constructor(isDirected = false) {
        //是否有环
        this.isCircle = false
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

var alienOrder = function (words) {
    const graph = new Graph(true)
    //一次性把所有节点加进去
    Array.from(new Set(...words.reduce((res, cur) => {
        return res + cur
    }, '').split())).forEach(item => graph.addVertex(item))

    //找到所有的线索,初始化图
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const start = words[i]
            const end = words[j];
            let k = 0
            while (k < start.length && k < end.length && start[k] == end[k]) {
                k++
            }
            //前面的单词长度在所有都相等的前提下长的还在前面，说明给的线索就有问题
            if (!!start[k] && !end[k]) {
                return ''
            }
            if (!!start[k] && !!end[k]) {
                graph.addEdge(start[k], end[k])
                continue
            }

        }
    }
    //进行 dfs 遍历
    const helpDFS = (childvertex, color, finishtime, time, edges, graph) => {
        color[childvertex] = Colors.GREY
        const neighbors = edges.get(childvertex)
        for (const neighbor of neighbors) {
            if (color[neighbor] == Colors.WHITE) {
                helpDFS(neighbor, color, finishtime, time, edges, graph);
            }
            //判断图是否有环
            if (color[neighbor] == Colors.GREY) {
                graph.isCircle = true
                return
            }
        }
        color[childvertex] = Colors.BLACK
        finishtime[childvertex] = ++time.count
    }

    const vertexs = graph.getVertexs();
    const edges = graph.getEdgeList();
    const color = initColor(vertexs);


    //记录完成遍历时间
    const finishtime = {};
    const time = { count: 0 }
    //完成遍历时间初始化
    for (let i = 0; i < vertexs.length; i++) {
        finishtime[vertexs[i]] = 0;
    }
    for (const childvertex of vertexs) {
        if (color[childvertex] == Colors.WHITE) {
            helpDFS(childvertex, color, finishtime, time, edges, graph);
        }
    }
    //有环直接退出
    if (graph.isCircle) {
        return ''
    }
    //根据完成遍历时间的从大到小排列得到拓扑排序
    let maxlen = Math.max(...Object.values(finishtime))
    let minlen = Math.min(...Object.values(finishtime))
    let resarr = new Array(maxlen - minlen)
    for (let i = 0; i < vertexs.length; i++) {
        resarr[finishtime[vertexs[i]] - minlen] = vertexs[i]
    }
    return resarr.reverse().join('')
};
console.log(alienOrder(["z", "z"]))
console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]))
console.log(alienOrder(["zy", "zx"]))
console.log(alienOrder(["ab", "adc"]))
console.log(alienOrder(["abc", "ab"]))
console.log(alienOrder(["ac", "ab", "b"]))








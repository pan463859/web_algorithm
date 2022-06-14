const Graph = require('./constructor.js')
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
const DFS = (graph, cb) => {
    const vertexs = graph.getVertexs();
    const edges = graph.getEdgeList();
    const color = initColor(vertexs);
    const findtime = {};
    const finishtime = {};
    const parent = {};
    const time = { count: 0 }
    for (let i = 0; i < vertexs.length; i++) {
        findtime[vertexs[i]] = 0;
        finishtime[vertexs[i]] = 0;
        parent[vertexs[i]] = null;
    }
    for (const childvertex of vertexs) {
        if (color[childvertex] == Colors.WHITE) {
            helpDFS(childvertex, color, findtime, finishtime, parent, time, edges, cb);
        }
    }
    return {
        discovery: findtime,
        finished: finishtime,
        predecessors: parent
    }
}
const helpDFS = (childvertex, color, findtime, finishtime, parent, time, edges, cb) => {
    color[childvertex] = Colors.GREY
    findtime[childvertex] = ++time.count

    if (cb) {
        cb(childvertex)
    }
    const neighbors = edges.get(childvertex)
    for (const neighbor of neighbors) {
        if (color[neighbor] == Colors.WHITE) {
            parent[neighbor] = childvertex
            helpDFS(neighbor, color, findtime, finishtime, parent, time, edges, cb);
        }
    }
    color[childvertex] = Colors.BLACK
    finishtime[childvertex] = ++time.count
}
const graph = new Graph(true)
const MyVertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < MyVertex.length; i++) {
    graph.addVertex(MyVertex[i])
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');


console.log(DFS(graph))
//根据 finish 的完成时间降序排列就得到了所有节点的拓扑排序
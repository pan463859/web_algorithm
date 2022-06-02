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
    for (const childvertex of vertexs) {
        if (color[childvertex] == Colors.WHITE) {
            helpDFS(childvertex, color, edges, cb);
        }
    }
}
const helpDFS = (childvertex, color, edges, cb) => {
    color[childvertex] = Colors.GREY
    if (cb) {
        cb(childvertex)
    }
    const neighbors = edges.get(childvertex)
    for (const neighbor of neighbors) {
        if (color[neighbor] == Colors.WHITE) {
            helpDFS(neighbor, color, edges, cb);
        }
    }
    color[childvertex] = Colors.BLACK

}
const printVertex = (value) => {
    console.log('Visites vertex: ', `${value}`)
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
DFS(graph, printVertex)
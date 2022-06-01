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
const BFS = (graph, start, cb) => {
    const vertexs = graph.getVertexs();
    const edges = graph.getEdgeList();
    const color = initColor(vertexs);
    const queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const curvertex = queue.shift()
        const neighbors = edges.get(curvertex);
        color[curvertex] = Colors.GREY;
        for (const childvertex of neighbors.values()) {
            if (color[childvertex] == Colors.WHITE) {
                color[childvertex] = Colors.GREY;
                queue.push(childvertex)
            }
            color[curvertex] = Colors.BLACK;

        }
        if (cb) {
            cb(curvertex)
        }
    }
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
BFS(graph, MyVertex[0], printVertex)
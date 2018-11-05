// import Graph from './graph';
const Graph = require('./graph');

const g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = [
    'CS1',
    'CS2',
    'Data Structures',
    'Assembly Language',
    'Operating Systems',
    'Algorithms'
];
// console.log(g.toString());
g.topSort();
// console.log(g.toString());
// Do not run DFS and BFS at the same time - it'll cause FATAL ERROR
// g.dfs(0);
/*g.bfs(0);
const paths = g.pathTo(4);
if (paths) {
    console.log(paths.reverse().join('-'));
}*/

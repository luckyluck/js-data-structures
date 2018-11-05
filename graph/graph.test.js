// import Graph from './graph';
const Graph = require('./graph');

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
// console.log(g.toString());
// Do not run DFS and BFS at the same time - it'll cause FATAL ERROR
// g.dfs(0);
g.bfs(0);
const paths = g.pathTo(4);
if (paths) {
    console.log(paths.reverse().join('-'));
}

// import Graph from './graph';
const Graph = require('./graph');

const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
console.log(g.toString());
// g.dfs(0);
g.bfs(0);

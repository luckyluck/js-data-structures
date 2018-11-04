/**
 * Vertex Class representation
 * @param label
 * @constructor
 */
// function Vertex(label) {
//     this.label = label;
// }

/**
 * Graph class implementation (adjacency list method)
 * @param v - number of vertices
 * @constructor
 */
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
}

/**
 * Adding new edge
 * Adding V vertex to the adjacency list of B vertex and vice versa
 * @param v - vertex
 * @param w - vertex
 */
Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
};

Graph.prototype.toString = function () {
    let result = '';
    for (let i = 0; i < this.vertices; ++i) {
        result += `${i} -> ${this.adj[i].filter(item => item !== '').join(' ')}\n`;
    }

    return result;
};

// export default Graph;
module.exports = Graph;

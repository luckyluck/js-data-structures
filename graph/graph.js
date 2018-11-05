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
    this.marked = []; // an array for DFS purposes
    this.edgeTo = []; // we'll keep here edges from one vertex to the next one
    for (let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
        this.marked[i] = false; // storing all vertices as not yet visited
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

/**
 * Depth-First Search method
 * @param v - starting vertex
 */
Graph.prototype.dfs = function (v) {
    this.marked[v] = true;

    if (this.adj[v]) {
        console.log('Visited vertex:', v);
        this.adj[v].forEach(w => {
            if (!this.marked[w]) {
                this.dfs(w);
            }
        });
    }
};

Graph.prototype.bfs = function (s) {
    const queue = [];
    this.marked[s] = true;
    queue.push(s); // add to the queue;

    while (queue.length > 0) {
        let v = queue.shift(); // taken first element from the queue and removing it from the queue
        if (v !== '') {
            console.log('Visited vertex:', v);
        }
        if (this.adj[v]) {
            this.adj[v].forEach(w => {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            });
        }
    }
};

/**
 * Helper function: checking if there is a connection with this vertex
 * @param v - vertex to check
 * @returns {*} - true if the connection exists
 */
Graph.prototype.hasPathTo = function (v) {
    return this.marked[v];
};

/**
 * Showing the path to the given vertex
 * @param v
 */
Graph.prototype.pathTo = function (v) {
    if (!this.hasPathTo(v)) {
        return;
    }

    const path = [];
    let source = 0;

    for (let i = v; i !== source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);

    return path;
};

// export default Graph;
module.exports = Graph;

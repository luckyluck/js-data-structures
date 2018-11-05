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
    this.vertexList = [];
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
    const visited = [];
    for (let i = 0; i < this.vertices; ++i) {
        result += `${this.vertexList[i]} -> `;
        // result += `${this.vertexList[i]} -> ${this.adj[i].filter(item => item !== '').join(' ')}\n`;
        visited.push(this.vertexList[i]);

        for (let j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== '') {
                if (!visited.includes(this.vertexList[j])) {
                    result += `${this.vertexList[j]} `;
                }
            }
        }
        result += '\n';
        // FIXME I still don't know what does it mean
        visited.pop();
    }

    return result;
};

/**
 * Depth-First Search method
 * @param v - starting vertex
 */
Graph.prototype.dfs = function (v) {
    this.marked[v] = true;

    if (this.adj[v] !== '') {
        console.log('Visited vertex:', v);
    }
    this.adj[v].forEach(w => {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    });
    // }
};

Graph.prototype.bfs = function (s) {
    const queue = [s]; // add to the queue;
    this.marked[s] = true;
    // queue.push(s);

    while (queue.length > 0) {
        let v = queue.shift(); // taken first element from the queue and removing it from the queue
        if (typeof v !== 'string') {
            console.log('Visited vertex:', v);
        }
        // if (this.adj[v]) {
            this.adj[v].forEach(w => {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.unshift(w);
                }
            });
        // }
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

Graph.prototype.topSort = function () {
    const stack = [];
    const visited = [];

    for (let i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (let i = 0; i < this.vertices; i++) {
        if (visited[i] === false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== undefined && stack[i] !== false) {
            console.log(this.vertexList[stack[i]]);
        }
    }
};

Graph.prototype.topSortHelper = function (v, visited, stack) {
    visited[v] = true; // marking vertex as visited
    if (this.adj[v]) {
        for (const w of this.adj[v]) {
            if (!visited[w]) {
                this.topSortHelper(visited[w], visited, stack);
            }
        }
    }
    stack.push(v);
};

// export default Graph;
module.exports = Graph;

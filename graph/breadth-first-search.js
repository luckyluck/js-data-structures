/**
 * Graphs: Breadth-first search
 */
function bfs(graph, root) {
    let nodesLen = {};

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    let queue = [root];
    let current;

    while (queue.length !== 0) {
        current = queue.unshift();

        let curConnected = graph[current];
        let neighborIndex = [];
        let index = curConnected.indexOf(1);
        while (index !== -1) {
            neighborIndex.push(index);
            index = curConnected.indexOf(1, index + 1);
        }

        for (let j = 0; j < neighborIndex.length; j++) {
            if (nodesLen[neighborIndex[j]] === Infinity) {
                nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
                queue.push(neighborIndex[j]);
            }
        }
    }

    return nodesLen;
}

export default bfs;

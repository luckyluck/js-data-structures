import bfs from './breadth-first-search';

describe('test BFS', () => {

    test('BFS test', () => {
        let exBFSGraph = [
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0]
        ];

        expect(bfs(exBFSGraph, 1)).toBe({
            0: 2,
            1: 0,
            2: 1,
            3: 3,
            4: Infinity
        });
    });
});

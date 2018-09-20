import BTS from './binary-search-tree'

describe.only('Binary Search Tree test', () => {
    test('test add() and find()', () => {
        const tree = new BTS();
        tree.add(4);
        tree.add(2);
        tree.add(6);
        tree.add(1);
        tree.add(3);
        tree.add(5);
        tree.add(7);
        expect(tree.find(4).data).toBe(4);
    });

    test('test isPresent()', () => {
        const tree = new BTS();
        tree.add(4);
        tree.add(2);
        tree.add(6);
        tree.add(1);
        tree.add(3);
        tree.add(5);
        tree.add(7);
        expect(tree.isPresent(4)).toBeTruthy();
        expect(tree.isPresent(8)).toBeFalsy();
    });

    test('test remove()', () => {
        const tree = new BTS();
        tree.add(4);
        tree.add(2);
        tree.add(6);
        tree.add(1);
        tree.add(3);
        tree.add(5);
        tree.add(7);
        expect(tree.find(7).data).toBe(7);
        tree.remove(7);
        expect(tree.find(7)).toBeNull();
    });

    test('test findMin()', () => {
        const tree = new BTS();
        tree.add(4);
        tree.add(2);
        tree.add(6);
        tree.add(1);
        tree.add(3);
        tree.add(5);
        tree.add(7);
        expect(tree.findMin()).toBe(1);
    });

    test('test findMax()', () => {
        const tree = new BTS();
        tree.add(4);
        tree.add(2);
        tree.add(6);
        tree.add(1);
        tree.add(3);
        tree.add(5);
        tree.add(7);
        expect(tree.findMax()).toBe(7);
    });
});

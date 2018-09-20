import BTS from './binary-search-tree'

describe('Binary Search Tree test', () => {
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

    test('test findMinHeight(), findMaxHeight() and isBalanced', () => {
        const tree = new BTS();
        tree.add(9);
        tree.add(4);
        tree.add(17);
        tree.add(3);
        tree.add(6);
        tree.add(22);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        expect(tree.findMinHeight()).toBe(1);
        expect(tree.findMaxHeight()).toBe(3);
        expect(tree.isBalanced()).toBeFalsy();
        tree.add(10);
        expect(tree.findMinHeight()).toBe(2);
        expect(tree.findMaxHeight()).toBe(3);
        expect(tree.isBalanced()).toBeTruthy();
    });

    test('test inOrder()', () => {
        const tree = new BTS();
        tree.add(9);
        tree.add(4);
        tree.add(17);
        tree.add(3);
        tree.add(6);
        tree.add(22);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(10);
        expect(tree.inOrder().toString()).toBe('3,4,5,6,7,9,10,17,20,22');
    });

    test('test preOrder()', () => {
        const tree = new BTS();
        tree.add(9);
        tree.add(4);
        tree.add(17);
        tree.add(3);
        tree.add(6);
        tree.add(22);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(10);
        expect(tree.preOrder().toString()).toBe('9,4,3,6,5,7,17,10,22,20');
    });

    test('test postOrder()', () => {
        const tree = new BTS();
        tree.add(9);
        tree.add(4);
        tree.add(17);
        tree.add(3);
        tree.add(6);
        tree.add(22);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(10);
        expect(tree.postOrder().toString()).toBe('3,5,7,6,4,10,20,22,17,9');
    });

    test('test levelOrder()', () => {
        const tree = new BTS();
        tree.add(9);
        tree.add(4);
        tree.add(17);
        tree.add(3);
        tree.add(6);
        tree.add(22);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(10);
        expect(tree.levelOrder().toString()).toBe('9,4,17,3,6,10,22,5,7,20');
    });
});

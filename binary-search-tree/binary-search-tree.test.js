import BinarySearchTree from './binary-search-tree'

describe('Binary Search Tree test', () => {
    test('test insert() and find()', () => {
        const tree = new BinarySearchTree();
        tree.insert(4);
        tree.insert(2);
        tree.insert(6);
        tree.insert(1);
        tree.insert(3);
        tree.insert(5);
        tree.insert(7);
        expect(tree.find(4).data).toBe(4);
    });

    test('test isPresent()', () => {
        const tree = new BinarySearchTree();
        tree.insert(4);
        tree.insert(2);
        tree.insert(6);
        tree.insert(1);
        tree.insert(3);
        tree.insert(5);
        tree.insert(7);
        expect(tree.isPresent(4)).toBeTruthy();
        expect(tree.isPresent(8)).toBeFalsy();
    });

    test('test remove()', () => {
        const tree = new BinarySearchTree();
        tree.insert(4);
        tree.insert(2);
        tree.insert(6);
        tree.insert(1);
        tree.insert(3);
        tree.insert(5);
        tree.insert(7);
        expect(tree.find(7).data).toBe(7);
        tree.remove(7);
        expect(tree.find(7)).toBeNull();
    });

    test('test findMin()', () => {
        const tree = new BinarySearchTree();
        tree.insert(4);
        tree.insert(2);
        tree.insert(6);
        tree.insert(1);
        tree.insert(3);
        tree.insert(5);
        tree.insert(7);
        expect(tree.findMin()).toBe(1);
    });

    test('test findMax()', () => {
        const tree = new BinarySearchTree();
        tree.insert(4);
        tree.insert(2);
        tree.insert(6);
        tree.insert(1);
        tree.insert(3);
        tree.insert(5);
        tree.insert(7);
        expect(tree.findMax()).toBe(7);
    });

    test('test findMinHeight(), findMaxHeight() and isBalanced', () => {
        const tree = new BinarySearchTree();
        tree.insert(9);
        tree.insert(4);
        tree.insert(17);
        tree.insert(3);
        tree.insert(6);
        tree.insert(22);
        tree.insert(5);
        tree.insert(7);
        tree.insert(20);
        expect(tree.findMinHeight()).toBe(1);
        expect(tree.findMaxHeight()).toBe(3);
        expect(tree.isBalanced()).toBeFalsy();
        tree.insert(10);
        expect(tree.findMinHeight()).toBe(2);
        expect(tree.findMaxHeight()).toBe(3);
        expect(tree.isBalanced()).toBeTruthy();
    });

    test('test inOrder()', () => {
        const tree = new BinarySearchTree();
        tree.insert(9);
        tree.insert(4);
        tree.insert(17);
        tree.insert(3);
        tree.insert(6);
        tree.insert(22);
        tree.insert(5);
        tree.insert(7);
        tree.insert(20);
        tree.insert(10);
        expect(tree.inOrder().toString()).toBe('3,4,5,6,7,9,10,17,20,22');
    });

    test('test preOrder()', () => {
        const tree = new BinarySearchTree();
        tree.insert(9);
        tree.insert(4);
        tree.insert(17);
        tree.insert(3);
        tree.insert(6);
        tree.insert(22);
        tree.insert(5);
        tree.insert(7);
        tree.insert(20);
        tree.insert(10);
        expect(tree.preOrder().toString()).toBe('9,4,3,6,5,7,17,10,22,20');
    });

    test('test postOrder()', () => {
        const tree = new BinarySearchTree();
        tree.insert(9);
        tree.insert(4);
        tree.insert(17);
        tree.insert(3);
        tree.insert(6);
        tree.insert(22);
        tree.insert(5);
        tree.insert(7);
        tree.insert(20);
        tree.insert(10);
        expect(tree.postOrder().toString()).toBe('3,5,7,6,4,10,20,22,17,9');
    });

    test('test levelOrder()', () => {
        const tree = new BinarySearchTree();
        tree.insert(9);
        tree.insert(4);
        tree.insert(17);
        tree.insert(3);
        tree.insert(6);
        tree.insert(22);
        tree.insert(5);
        tree.insert(7);
        tree.insert(20);
        tree.insert(10);
        expect(tree.levelOrder().toString()).toBe('9,4,17,3,6,10,22,5,7,20');
    });
});

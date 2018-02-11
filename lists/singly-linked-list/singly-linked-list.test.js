const SinglyLinkedList = require('./singly-linked-list');

describe('SinglyLinkedList test:', function () {

    test('test add', function () {
        const list = new SinglyLinkedList();
        const node = list.add(1);
        expect(node.data).toBe(1);
        expect(list.length()).toBe(1);
    });

    test('test searchNodeAt', function () {
        const list = new SinglyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const node = list.searchNodeAt(2);
        expect(node.data).toBe(2);
        expect(list.head.data).toBe(1);
    });

    test('test remove first', function () {
        const list = new SinglyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const node = list.remove(1);
        expect(node.data).toBe(1);
        expect(list.length()).toBe(2);
    });

    test('test remove other', function () {
        const list = new SinglyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const node = list.remove(2);
        expect(node.data).toBe(2);
        expect(list.length()).toBe(2);
    });
});
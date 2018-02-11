const DoublyLinkedList = require('./doubly-linked-list');

describe('DoublyLinkedList test:', function () {

    test('test add', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        const node = list.add(2);
        list.add(3);
        expect(node.data).toBe(2);
        expect(list.tail.data).toBe(3);
        expect(list.tail.next).toBe(null);
        expect(list.tail.previous.data).toBe(2);
        expect(list.head.data).toBe(1);
        expect(list.length()).toBe(3);
    });

    test('test insert in the middle', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.insert(5, 3);
        const node = list.searchNodeAt(3);
        expect(node.previous.data).toBe(2);
        expect(node.data).toBe(5);
        expect(node.next.data).toBe(3);
        expect(list.length()).toBe(5);
    });

    test('test insert in the beginning', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.insert(5, 1);
        const node = list.searchNodeAt(1);
        expect(node.previous).toBe(null);
        expect(node.data).toBe(5);
        expect(node.next.data).toBe(1);
        expect(list.length()).toBe(3);
    });

    test('test insert in the end', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.insert(5, 2);
        const node = list.searchNodeAt(3);
        expect(node.previous.data).toBe(2);
        expect(node.data).toBe(5);
        expect(node.next).toBe(null);
        expect(list.length()).toBe(3);
    });

    test('test searchNodeAt', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const node = list.searchNodeAt(2);
        expect(node.data).toBe(2);
        expect(list.head.data).toBe(1);
    });

    test('test remove first', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const node = list.remove(1);
        expect(node.data).toBe(1);
        expect(list.length()).toBe(2);
    });

    test('test remove from the middle', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.add(4);
        list.add(3);
        const node = list.remove(2);
        expect(node.data).toBe(2);
        expect(list.length()).toBe(3);
    });

    test('test remove last', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);
        const node = list.remove(3);
        expect(node.data).toBe(3);
        expect(list.length()).toBe(2);
    });

    test('test remove one out of two', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.add(2);
        const node = list.remove(2);
        expect(node.data).toBe(2);
        expect(list.length()).toBe(1);
        expect(list.tail.next).toBe(null);
        // console.log('list.head - ', list.head);
        // console.log('list.tail - ', list.tail);
        // expect(list.head.previous).toBe(list.tail.previous);
        // expect(list.head.next).toBe(list.tail.next);
    });

    test('test remove single', function () {
        const list = new DoublyLinkedList();
        list.add(1);
        list.remove(1);
        expect(list.tail).toBe(null);
        expect(list.head).toBe(null);
        // console.log('list.head - ', list.head);
        // console.log('list.tail - ', list.tail);
        // expect(list.head.previous).toBe(list.tail.previous);
        // expect(list.head.next).toBe(list.tail.next);
    });
});
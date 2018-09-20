import Queue from './queue';

describe('Queue test:', function () {

    test('test enqueue() and size()', function () {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
    });

    test('test dequeue() and size()', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        const element = queue.dequeue();
        expect(element).toBe(1);
        expect(queue.size()).toBe(2);
    });

    test('test peek()', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
    });

    test('test front()', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
    });

    test('test back()', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.back()).toBe(2);
    });

    test('test toString()', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.toString()).toBe('12345');
    });

    test('test isEmpty()', function () {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(false);
    });
});

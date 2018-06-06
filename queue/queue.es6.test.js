import Queue from './queue.es6';

describe('Queue test:', function () {
    
    test('test enqueue', function () {
        const queue = new Queue();
        expect(queue.empty()).toBe(true);
        queue.enqueue(1);
        expect(queue.empty()).toBe(false);
    });
    
    test('test dequeue', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        const element = queue.dequeue();
        expect(element).toBe(1);
        queue.dequeue();
        queue.dequeue();
        expect(queue.empty()).toBe(true);
    });
    
    test('test front', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
    });
    
    test('test back', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.back()).toBe(2);
    });
    
    test('test toString', function () {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.toString()).toBe('1\n2\n3\n4\n5');
    });
    
    test('test empty', function () {
        const queue = new Queue();
        expect(queue.empty()).toBe(true);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.empty()).toBe(false);
    });
});

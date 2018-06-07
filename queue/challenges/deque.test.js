import Deque from './deque';

describe('Deque test:', function () {
    
    test('test enqueue', function () {
        const queue = new Deque();
        expect(queue.count()).toBe(0);
        queue.enqueue(1);
        expect(queue.count()).toBe(1);
    });
    
    test('test dequeueFirst', function () {
        const queue = new Deque();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        let element = queue.dequeueFirst();
        expect(element).toBe(1);
        element = queue.dequeueFirst();
        expect(element).toBe(2);
        queue.dequeueFirst();
        expect(queue.count()).toBe(0);
    });
    
    test('test dequeueLast', function () {
        const queue = new Deque();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        let element = queue.dequeueLast();
        expect(element).toBe(3);
        element = queue.dequeueLast();
        expect(element).toBe(2);
        queue.dequeueLast();
        expect(queue.count()).toBe(0);
    });
    
    test('test front', function () {
        const queue = new Deque();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
    });
    
    test('test back', function () {
        const queue = new Deque();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.back()).toBe(2);
    });
    
    test('test toString', function () {
        const queue = new Deque();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        expect(queue.toString()).toBe('1\n2\n3\n4\n5');
    });
    
    test('test empty', function () {
        const queue = new Deque();
        expect(queue.empty()).toBe(true);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeueFirst();
        expect(queue.empty()).toBe(false);
    });
});

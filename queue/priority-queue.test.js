import PriorityQueue from './priority-queue';

class Item {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

describe('Queue test:', function () {
    
    test('test enqueue()', function () {
        const queue = new PriorityQueue();
        expect(queue.size()).toBe(0);
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
    });
    
    test('test dequeue()', function () {
        const queue = new PriorityQueue();
        queue.enqueue(new Item('name1', 1));
        queue.enqueue(new Item('name2', 2));
        queue.enqueue(new Item('name3', 3));
        const element = queue.dequeue();
        expect(element).toBe('name1');
        queue.dequeue();
        queue.dequeue();
        expect(queue.size()).toBe(0);
    });
    
    test('test front()', function () {
        const queue = new PriorityQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
    });
    
    test('test back()', function () {
        const queue = new PriorityQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.back()).toBe(2);
    });
    
    test('test toString()', function () {
        const queue = new PriorityQueue();
        queue.enqueue(new Item('name1', 1));
        queue.enqueue(new Item('name2', 2));
        queue.enqueue(new Item('name3', 3));
        expect(queue.toString()).toBe('name1 code: 1\nname2 code: 2\nname3 code: 3');
    });
    
    test('test isEmpty()', function () {
        const queue = new PriorityQueue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(false);
    });
});

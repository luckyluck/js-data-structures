import LinkedQueue from './linked-queue';

describe('Linked Queue test:', () => {
    test('test enqueue', () => {
        const queue = new LinkedQueue();
        queue.enqueue(1);
        expect(queue.front.data).toBe(1);
        expect(queue.back.data).toBe(1);

        queue.enqueue(2);
        expect(queue.front.data).toBe(1);
        expect(queue.back.data).toBe(2);
    });

    test('test dequeue', () => {
        const queue = new LinkedQueue();
        queue.enqueue('a');
        queue.enqueue('b');
        queue.enqueue('c');

        const first = queue.dequeue();
        expect(first).toBe('a');
    });
});

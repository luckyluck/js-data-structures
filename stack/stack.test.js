import Stack from './stack';

describe('Stack test:', function () {

    test('test push()', function () {
        const stack = new Stack();
        stack.push(1);
        expect(stack.size()).toBe(1);
    });

    test('test size()', function () {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.size()).toBe(3);
    });

    test('test pop()', function () {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        const element = stack.pop();
        expect(element).toBe(3);
        expect(stack.size()).toBe(2);
    });

    test('test peek()', function () {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
    });
});

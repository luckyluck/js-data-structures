const Stack = require('./stack');

describe('Stack test:', function () {

    test('test push()', function () {
        const stack = new Stack();
        stack.push(1);
        expect(stack.length()).toBe(1);
    });

    test('test length()', function () {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.length()).toBe(3);
    });

    test('test pop()', function () {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
    });

    test('test peek()', function () {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
    });

    // test('test print()', function () {
    //     const stack = new Stack();
    //     stack.push(1);
    //     stack.push(2);
    //     stack.push(3);
    //     expect(stack.print()).toBe(undefined);
    // });
});
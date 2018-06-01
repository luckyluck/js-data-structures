import Stack from './stack.es6';

describe('Stack ES6 test:', () => {
    
    test('test push()', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.length()).toBe(1);
    });
    
    test('test length()', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.length()).toBe(3);
    });
    
    test('test pop()', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        const element = stack.pop();
        expect(element).toBe(3);
        expect(stack.length()).toBe(2);
    });
    
    test('test peek()', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
    });
    
    test('test clear()', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.length()).toBe(3);
        stack.clear();
        expect(stack.length()).toBe(0);
    });
});


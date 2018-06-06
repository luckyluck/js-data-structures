import Stack from '../stack.es6';

/**
 * Imagine that your virtual Pez dispenser is filled with red, yellow, and white
 * colors and you don't like the yellow ones.
 * Write a program that uses a stack to remove the yellow ones without
 * changing the order of the other candies in the dispenser.
 * @param stack
 */
function getRidOfYellow(stack) {
    const newStack = new Stack();
    
    while (stack.length() > 0) {
        const item = stack.pop();
        if (item !== 'yellow') {
            newStack.push(item);
        }
    }
    
    while (newStack.length() > 0) {
        stack.push(newStack.pop());
    }
}


const stack = new Stack();
stack.push('red');
stack.push('red');
stack.push('white');
stack.push('yellow');
stack.push('white');
stack.push('yellow');
stack.push('white');
stack.push('red');
stack.push('yellow');
stack.push('white');

getRidOfYellow(stack);

console.log('pez dispenser without yellow ones:', stack.toString());

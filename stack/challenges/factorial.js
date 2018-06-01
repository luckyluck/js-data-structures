import Stack from '../stack.es6';

/**
 * Computing factorial using recursion
 * @param n - any given number
 * @returns {number} - factorial of a given number
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

console.log('5! = ', factorial(5));

/**
 * Computing factorial using Stack
 * @param n - any given number
 * @returns {number} - factorial of a given number
 */
function fact(n) {
    const stack = new Stack();
    let result = 1;
    
    while (n > 1) {
        stack.push(n--);
    }
    
    while (stack.length() > 0) {
        result *= stack.pop();
    }
    
    return result;
}

console.log('5! = ', fact(5));

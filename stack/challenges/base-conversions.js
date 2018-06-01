import Stack from '../stack.es6';

/**
 * Multiple base conversion
 * works only with bases 2 through 9
 * @param num - number to convert
 * @param base - base to convert to
 */
function baseConversion(num, base) {
    const stack = new Stack();
    
    do {
        stack.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    
    let converted = '';
    while(stack.length() > 0) {
        converted += stack.pop();
    }
    
    return converted;
}

console.log('32 converted to base 2:', baseConversion(32, 2));
console.log('125 converted to base 8:', baseConversion(125, 8));

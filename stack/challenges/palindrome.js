import Stack from '../stack.es6';

/**
 * Method which determining whether a given string is palindrome or not
 */
function isPalindrome(str) {
    const stack = new Stack();
    let reversedStr = '';
    
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    
    while (stack.length() > 0) {
        reversedStr += stack.pop();
    }
    
    return str === reversedStr;
}

console.log('\'hello\' is palindrome: ', isPalindrome('hello'));
console.log('\'racecar\' is palindrome: ', isPalindrome('racecar'));

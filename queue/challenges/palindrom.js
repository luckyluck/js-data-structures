import Deque from './deque';

/**
 * Method which determining whether a given string is palindrome or not
 */
function isPalindrome(str) {
    const queue = new Deque();
    let result = true;
    
    for (let i = 0; i < str.length; i++) {
        queue.enqueue(str[i]);
    }
    
    while (queue.count() > 1) {
        const start = queue.dequeueFirst();
        const end = queue.dequeueLast();
        
        if (start !== end) {
            result = false;
        }
    }
    
    return result;
}

console.log('\'hello\' is palindrome: ', isPalindrome('hello'));
console.log('\'racecar\' is palindrome: ', isPalindrome('racecar'));
console.log('\'ababbaba\' is palindrome: ', isPalindrome('ababbaba'));

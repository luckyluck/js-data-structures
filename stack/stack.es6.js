/**
 * Stack implemented reading the book "Data Structures and Algorithms with JavaScript" by Michael McMillan
 */

export default class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }
    
    /**
     * Adding new element into a stack
     * @param element
     */
    push(element) {
        this.dataStore[this.top++] = element;
    }
    
    /**
     * Returning the last added element from a stack and "removing" it from a stack
     * @returns {*}
     */
    pop() {
        // My additions to the book's implementation
        if (this.top === 0) {
            return undefined;
        }
        const lastElement = this.dataStore[--this.top];
        this.dataStore.splice(this.top, 1);
        
        return lastElement;
    }
    
    /**
     * Returning the last added element from a stack
     * @returns {*}
     */
    peek() {
        return this.dataStore[this.top - 1];
    }
    
    /**
     * Returning a number of elements in a stack
     * @returns {number}
     */
    size() {
        return this.top;
    }
    
    /**
     * Clearing a stack
     */
    clear() {
        this.top = 0;
        // My additions to the book's implementation
        delete this.dataStore;
        this.dataStore = [];
    }
    
    toString() {
        return this.dataStore.join(',');
    }
}

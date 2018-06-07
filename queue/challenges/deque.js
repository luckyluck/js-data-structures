/**
 * A Deque is a queue-like structure
 * that allows elements to be removed from both front and back of
 * the list
 */
export default class Deque {
    constructor() {
        this.dataStore = [];
    }
    
    /**
     * Adding element to the end of a queue
     * @param item
     */
    enqueue(item) {
        this.dataStore.push(item);
    }
    
    /**
     * Returning first element from the beginning of a queue
     * And removing it from the queue
     * @returns {*}
     */
    dequeueFirst() {
        return this.dataStore.shift();
    }
    
    /**
     * Returning last element from the beginning of a queue
     * And removing it from the queue
     * @returns {*}
     */
    dequeueLast() {
        return this.dataStore.pop();
    }
    
    /**
     * Returning first element in a queue without removing it
     * @returns {*}
     */
    front() {
        return this.dataStore[0];
    }
    
    /**
     * Returning last element in a queue without removing it
     * @returns {*}
     */
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }
    
    toString() {
        return this.dataStore.join('\n');
    }
    
    /**
     * Checking if a queue is empty or not
     * @returns {boolean} - true if the queue is empty
     */
    empty() {
        return this.dataStore.length === 0;
    }
    
    /**
     * Returning the size of a queue
     * @returns {number}
     */
    count() {
        return this.dataStore.length;
    }
}

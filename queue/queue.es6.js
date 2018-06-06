export default class Queue {
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
     * Returning element from the beginning of a queue
     * And removing it from the queue
     * @returns {*}
     */
    dequeue() {
        return this.dataStore.shift();
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
}

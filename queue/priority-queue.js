export default class PriorityQueue {
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
     * Returning element due to priority order
     * And removing it from the queue
     * @returns {*}
     */
    dequeue() {
        let priority = this.dataStore[0].code;
        let index = 0;
        
        for (let i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code < priority) {
                priority = this.dataStore[i].code;
                index = i;
            }
        }
        
        const element = this.dataStore[index];
        this.dataStore.splice(index, 1);
        
        return element;
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
        return this.dataStore.map(data => `${data.name} code: ${data.code}`).join('\n');
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

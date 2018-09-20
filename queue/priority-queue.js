/**
 * Priority Queue implementation
 * In this implementation we stuck to the structure of items to queue/dequeue as object { name, code }
 * Where name is a value and code is a priority indicator
 *
 * As an alternative, we can use Array with 2 elements, where 0 index will contain value and 1 index will contain priority
 */
export default class PriorityQueue {
    constructor() {
        this.collection = [];
    }
    
    /**
     * Adding element to the end of a queue due to priority
     * @param element
     */
    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            
            for (let i = 0; i < this.collection.length; i++) {
                if (element.code < this.collection[i].code) { // checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }

            if (!added) {
                this.collection.push(element);
            }
        }
    }
    
    /**
     * Returning element due to priority order
     * And removing it from the queue
     * @returns {*}
     */
    dequeue() {
        let element = this.collection.shift();
        
        return element.name;
    }
    
    /**
     * Returning first element in a queue without removing it
     * @returns {*}
     */
    front() {
        return this.collection[0];
    }
    
    /**
     * Returning last element in a queue without removing it
     * @returns {*}
     */
    back() {
        return this.collection[this.collection.length - 1];
    }
    
    toString() {
        return this.collection.map(data => `${data.name} code: ${data.code}`).join('\n');
    }
    
    /**
     * Checking if a queue is empty or not
     * @returns {boolean} - true if the queue is empty
     */
    isEmpty() {
        return this.collection.length === 0;
    }
    
    /**
     * Returning the size of a queue
     * @returns {number}
     */
    size() {
        return this.collection.length;
    }

    /**
     * Printing collection (logging into console)
     */
    print() {
        console.log(this.collection);
    }
}

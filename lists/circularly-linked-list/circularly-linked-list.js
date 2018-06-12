/**
 * A circularly linked list implementation "Data structures and algorithms with JavaScript" by McMillan
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

export default class CLList {
    constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
    }
    
    /**
     * Inserting new node into a list
     * @param newElement
     * @param item
     */
    insert(newElement, item) {
        const newNode = new Node(newElement);
        const current = this.find(item);
        
        newNode.next = current.next;
        current.next = newNode;
    }
    
    /**
     * Searching through linked list looking for the specified data
     * @param item
     * @returns {Node}
     */
    find(item) {
        let currentNode = this.head;
        
        while (currentNode !== null && currentNode.element !== item && currentNode.next !== this.head) {
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }
    
    /**
     * Searching the element right before a given one to be able to remove the given
     * @param item
     * @returns {Node}
     */
    findPrevious(item) {
        let currentNode = this.head;
        
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }
    
    /**
     * Removing node from a list
     * @param item - item to remove
     */
    remove(item) {
        const prevNode = this.findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
    
    display() {
        let currentNode = this.head;
        
        while (currentNode.next !== null && currentNode.next.element !== 'head') {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }
}

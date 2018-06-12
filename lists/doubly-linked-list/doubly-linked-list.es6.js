/**
 * A doubly linked list implementation "Data structures and algorithms with JavaScript" by McMillan
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

export default class DLList {
    constructor() {
        this.head = new Node('head');
    }
    
    insert(newElement, item) {
        const newNode = new Node(newElement);
        const current = this.findLast(item);
    
        if (current) {
            newNode.next = current.next;
            newNode.previous = current;
            current.next = newNode;
        }
    }
    
    /**
     * Searching through linked list looking for the specified data
     * @param item
     * @returns {Node}
     */
    findLast(item) {
        let currentNode = this.head;
        
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
    
    /**
     * Removing node from a list
     * @param item - item to remove
     */
    remove(item) {
        const currentNode = this.findLast(item);
        if (currentNode !== null) {
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            currentNode.next = null;
            currentNode.previous = null;
        }
    }
}

/**
 * A doubly linked list implementation "Data structures and algorithms with JavaScript" by McMillan
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
    
    insert(newElement, item) {
        const newNode = new Node(newElement);
        const current = this.find(item);
    
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }
    
    /**
     * Searching through linked list looking for the specified data
     * @param item
     * @returns {Node}
     */
    find(item) {
        // let currentNode = this.head;
        
        // while (currentNode !== null && currentNode.element !== item) {
        //     currentNode = currentNode.next;
        // }
        //
        // return currentNode;
    }
}

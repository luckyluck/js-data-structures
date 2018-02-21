// Another linked list implementation
// Using ES6

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    
    insertLast(data) {
        const last = this.getLast();
        
        if (this.head) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data, this.head);
        }
    }
    
    size() {
        let counter = 0;
        let node = this.head;
        
        while (node) {
            counter++;
            node = node.next;
        }
        
        return counter;
    }
    
    getFirst() {
        return this.head;
    }
    
    getLast() {
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        
        while (node.next) {
            node = node.next;
        }
        
        return node;
    }
    
    getAt(index) {
        if (!this.head) {
            return null;
        }
        
        let node = this.head;
        let count = 0;
        
        while (count < index) {
            if (!node.next) {
                return null;
            }
            node = node.next;
            count++;
        }
        
        return node;
    }
    
    clear() {
        this.head = null;
    }
    
    removeFirst() {
        if (!this.head) {
            return;
        }
        
        this.head = this.head.next;
    }
    
    removeLast() {
        if (!this.head) {
            return;
        }
        
        if (!this.head.next) {
            this.head = null;
            return;
        }
        
        let previous = this.head;
        let node = this.head.next;
        
        while (node.next) {
            previous = node;
            node = node.next;
        }
        
        previous.next = null;
    }
}

module.exports = { Node, LinkedList };

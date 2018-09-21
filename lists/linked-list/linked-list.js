class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    /**
     * Inserting new node into a list
     * @param element
     */
    insert(element) {
        const newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.length++;
    }
    
    /**
     * Removing node from a list
     * @param element - item to remove
     */
    remove(element) {
        let currentNode = this.head;

        if (currentNode.element === element) {
            this.head = currentNode.next;
        } else {
            let previousNode;

            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.length--;
    }

    /**
     * Return position/index of the given element
     * @param element
     * @returns {number}
     */
    indexOf(element) {
        let currentNode = this.head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;

        }

        return -1;
    }

    /**
     * Return element at the given position/index
     * @param index
     * @returns {*}
     */
    elementAt(index) {
        let currentNode = this.head;
        let count = 0;

        if (index < 0 || index > this.length) {
            return undefined;
        }

        while(count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    /**
     * Add new element in the given position/index
     * @param index
     * @param element
     * @returns {boolean}
     */
    addAt(index, element) {
        let node = new Node(element);

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.length++;

        return true;
    }

    /**
     * Remove element at exact position/index
     * @param index
     * @returns {*} - null if index is invalid or element's value
     */
    removeAt(index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;

        return currentNode.element;
    }

    /**
     * Check if there are nodes in the List
     * @returns {boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * Return the number of Nodes in the List
     * @returns {number}
     */
    size() {
        return this.length;
    }
}

export default LinkedList;

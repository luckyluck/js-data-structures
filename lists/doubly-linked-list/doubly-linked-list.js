// Good article to understand the subject
// https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

function Node(data) {
    this.data = data; // stores a value
    this.next = null; // points to the next node in the list
    this.previous = null; // points to the previous node in the list
}

function DoublyLinkedList() {
    this.numberOfValues = 0; // retrieves the number of nodes in a list
    this.head = null; // assigns a node as the head of a list
    this.tail = null; // assigns a node as the tail of a list
}

DoublyLinkedList.prototype.add = function(value) {
    const node = new Node(value);

    if (this.numberOfValues) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this.numberOfValues++;

    return node;
};

// TODO rethink insert logic. probably, element should be inserted after position
DoublyLinkedList.prototype.insert = function(value, position) {
    const node = new Node(value);
    const message = { failure: 'Failure: non-existent node in this list.' };
    const length = this.numberOfValues;
    let currentNode = this.head;
    let count = 1;

    // 1st use-case: an invalid position
    if (position < 1 || position > length) {
        throw new Error(message.failure);
    }

    if (position === length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        const prevNode = currentNode.previous;

        node.previous = prevNode;
        node.next = currentNode;
        if (position === 1) {
            this.head = node;
        }
        if (prevNode) {
            prevNode.next = node;
        }
        currentNode.previous = node;
    }

    this.numberOfValues++;

    return node;
};

DoublyLinkedList.prototype.searchNodeAt = function(position) {
    const length = this.numberOfValues;
    const message = { failure: 'Failure: non-existent node in this list.' };
    let currentNode = this.head;
    let count = 1;

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

DoublyLinkedList.prototype.remove = function(position) {
    const length = this.numberOfValues;
    const message = { failure: 'Failure: non-existent node in this list.' };
    let currentNode = this.head;
    let count = 1;
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let afterNodeToDelete = null;
    let deletedNode = null;

    // 1st use-case: an invalid position
    if (length === 0 || position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;

        // 2nd use-case: there is a second node
        if (this.head) {
            this.head.previous = null;
        // 2nd use-case: there is no second node
        } else {
            this.tail = null;
        }
        // if (!this.head.next) {
        //     this.tail = null;
        // }
    }
    // 3rd use-case: the last node is removed
    else if (position === this.numberOfValues) {
        deletedNode = this.tail;
        this.tail = this.tail.previous;
        this.tail.next = null;
    }
    // 4th use-case: a middle node is removed
     else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this.numberOfValues--;

    return deletedNode;
};

DoublyLinkedList.prototype.length = function() {
    return this.numberOfValues;
};

module.exports = DoublyLinkedList;
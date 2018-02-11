// Good article to understand the subject
// https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

function Node(data) {
    this.data = data; // stores a value
    this.next = null; // points to the next node in the list
}

function SinglyLinkedList() {
    this.numberOfValues = 0; // retrieves the number of nodes in a list
    this.head = null; // assigns a node as the head of a list
}

SinglyLinkedList.prototype.add = function (value) {
    const node = new Node(value);
    let currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this.numberOfValues++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this.numberOfValues++;

    return node;
};

SinglyLinkedList.prototype.searchNodeAt = function(position) {
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

SinglyLinkedList.prototype.remove = function(position) {
    const length = this.numberOfValues;
    const message = { failure: 'Failure: non-existent node in this list.' };
    let currentNode = this.head;
    let count = 1;
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;

    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this.numberOfValues--;

        return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.numberOfValues--;

    return deletedNode;
};

SinglyLinkedList.prototype.length = function() {
    return this.numberOfValues;
};

module.exports = SinglyLinkedList;
/**
 * Queue implementation using linked list
 */

// Node to keep track of the elements in the queue
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedQueue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(element) {
        const node = new Node(element, null);
        if (this.back === null) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = this.back.next;
        }
    }

    dequeue() {
        if (this.front !== null) {
            const first = this.front;
            this.front = this.front.next;

            return first.data;
        } else {
            if (this.back !== null) {
                this.back = null;
            }

            return 'Cannot dequeue bacause the queue is empty';
        }
    }
}

export default LinkedQueue;

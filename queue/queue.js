function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function (element) {
    this.queue.push(element);
};

Queue.prototype.dequeue = function () {
    return this.queue.shift();
};

Queue.prototype.peek = function () {
    return this.queue[0];
};

Queue.prototype.length = function () {
    return this.queue.length;
};

Queue.prototype.front = function () {
    return this.queue[0];
};

Queue.prototype.back = function () {
    return this.queue[this.queue.length - 1];
};

Queue.prototype.toString = function() {
    const l = this.queue.length;
    let str = '';

    for (let i = 0; i < l; i++) {
        str += this.queue[i];
    }

    return str;
};

Queue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

module.exports = Queue;
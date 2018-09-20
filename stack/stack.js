function Stack() {
    this.store = [];
    this.top = 0;
}

Stack.prototype.push = function (element) {
    this.store.push(element);
    this.top++;
};

Stack.prototype.pop = function () {
    if (this.top === 0) {
        return undefined;
    }

    this.top--;
    return this.store.pop();
};

Stack.prototype.peek = function () {
    return this.store[this.top - 1];
};

Stack.prototype.size = function () {
    return this.top;
};

export default Stack;

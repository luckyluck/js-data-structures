function Stack() {
    this.store = [];
    this.top = 0;
}

Stack.prototype.push = function (element) {
    this.store.push(element);
    this.top++;
};

Stack.prototype.pop = function () {
    this.top--;
    return this.store.pop();
};

Stack.prototype.peek = function () {
    return this.store[this.top - 1];
};

Stack.prototype.length = function () {
    return this.top;
};

Stack.prototype.print = function () {
    console.log(this.store.join(' '));
};

export default Stack;

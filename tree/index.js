class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }
    
    add(data) {
        this.children.push(new Node(data));
    }
    
    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    
    traverseBF(fn) {
        const arr = [this.root];
        
        while (arr.length > 0) {
            const el = arr.shift();
            arr.push(...el.children);
            fn(el);
        }
    }
    
    traverseDF(fn) {
        const arr = [this.root];
        
        while (arr.length > 0) {
            const el = arr.shift();
            arr.unshift(...el.children);
            fn(el);
        }
    }
}

module.exports = { Tree, Node };

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
}

module.exports = { Tree, Node };

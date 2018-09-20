class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    /**
     * Adding new item into the tree
     * @param data - new item
     * @returns {*|void}
     */
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            // Using recursive function to add data
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };

            return searchTree(node);
        }
    }

    /**
     * Searching the minimum
     * @returns {*}
     */
    findMin() {
        let current = this.root;

        while(current.left !== null) {
            current = current.left;
        }

        return current.data;
    }

    /**
     * Searching the maximum
     * @returns {*}
     */
    findMax() {
        let current = this.root;

        while (current.right !== null) {
            current = current.right;
        }

        return current.data;
    }

    /**
     * Searching node by value
     * @param data
     */
    find(data) {
        let current = this.root;

        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            if (current === null) {
                return null;
            }
        }

        return current;
    }

    /**
     * Checking if there is such data in the Tree
     * @param data
     * @returns {boolean}
     */
    isPresent(data) {
        let current = this.root;

        while (current) {
            if (current.data === data) {
                return true;
            }

            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    /**
     * Removing the node from the Tree by data
     * @param data
     */
    remove(data) {
        const removeNode = function (node, data) {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                // node has no children
                if (node.left === null && node.right === null) {
                    return null;
                }
                // node has no left child
                if (node.left === null) {
                    return node.right;
                }
                // if node has no right child
                if (node.right === null) {
                    return node.left;
                }
                // node has two children
                let tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }
}

export default BST;

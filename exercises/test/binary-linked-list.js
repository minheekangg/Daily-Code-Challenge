class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.head = null
    } 
    add(val) {
        if (!this.head) {
            this.head = new Node(val);
            return;
        } else {
            let node = this.head;

            while (node) {
                if (val < node.val) {
                    if (!node.left) {
                        node.left = new Node(val);
                        return;
                    } else {
                        node = node.left;
                    }
                } else if (val > node.val) {
                    if (!node.right) {
                        node.right = new Node(val);
                        return;
                    } else {
                        node = node.right;
                    }
                }
            }
        }
    }
}


module.exports = BinarySearchTree;
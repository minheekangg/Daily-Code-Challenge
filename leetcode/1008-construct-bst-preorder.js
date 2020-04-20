/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    if (preorder.length < 1) return undefined;

    let newHead = new TreeNode(preorder[0]);
    let node = newHead;
    for (let i = 1; i < preorder.length; i++) {
        let newNode = new TreeNode(preorder[i]);

        function addNode(node, newNode) {
            if (newNode.val < node.val) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    addNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    addNode(node.right, newNode);
                }
            }
        }
        addNode(node, newNode);
    }
    return node;
};
/**
 * completed 7/24/2020
 * Leetcode - EASY
*/

/**
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
 */

var inorderTraversal = function (root) {
    const data = [];

    function traverse(node) {
        if (!node) return;
        if (!!node.left) traverse(node.left);
        data.push(node.val);
        if (!!node.right) traverse(node.right);
    }

    traverse(root);
    return data;
};

module.exports = inorderTraversal;
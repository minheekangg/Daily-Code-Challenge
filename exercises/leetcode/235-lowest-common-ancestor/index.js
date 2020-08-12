/**
 * completed 8/12/2019
 * Leetcode - similar to MEDIUM
 Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
 * 
*/

// better solution - BFS
var lowestCommonAncestor = function (root, p, q) {
    if (root.val < p && root.val < q) {
        // root is smaller than both -- go right!
        return lowestCommonAncestor(root.right, p, q)
    } else if (root.val > p && root.val > q) {
        // root is bigger than both -- go left!
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return root.val;
    }
};

module.exports = lowestCommonAncestor;
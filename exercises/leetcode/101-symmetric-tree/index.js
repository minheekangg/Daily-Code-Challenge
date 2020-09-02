/**
 * completed 9/2/2020
 * Leetcode - EASY
*/

/**
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
*/

// BETTER SOLUTION
var isSymmetric = function (root) {
    if (!root) return true;

    function isMirror(left, right) {
        if (!left && !right) return true;

        if (!left || !right || left.val !== right.val) {
            return false;
        }

        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
};

// MY SOLUTION:
/*
var isSymmetric = function (root) {
    if (!root) return true;

    if (root.left && !root.right) return false;
    if (root.right && !root.left) return false;
    if (!root.left && !root.right) return true;

    const queue = [];
    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 1) {

        const first = queue.shift();
        const last = queue.pop();

        if (first.val !== last.val) {
            return false;
        }

        if (first.left && !last.right) return false;
        if (!first.left && last.right) return false;
        if (first.right && !last.left) return false;
        if (!first.right && last.left) return false;

        if (first.right) queue.unshift(first.right);
        if (last.left) queue.push(last.left);

        if (first.left) queue.unshift(first.left);
        if (last.right) queue.push(last.right);

    }
    return true;
};
*/

module.exports = isSymmetric;
/**
 * completed 8/25/2020
 * Leetcode - EASY
*/

/**
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
 */

// My Solution
var reverseList = function (head) {
    let current = head;
    let prev = null;

    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

module.exports = reverseList;
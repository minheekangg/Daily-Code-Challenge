/**
 * completed 7/24/2020
 * Leetcode - EASY
*/

/**
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

// My Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    let first = l1;
    let second = l2;
    let newList = new ListNode();
    let newCurr = newList;

    if (!first && !second) {
        return null;
    }

    while (first && second) {
        if (first.val <= second.val) {
            newCurr.val = first.val;
            first = first.next;
        } else {
            newCurr.val = second.val;
            second = second.next;
        }

        newCurr.next = new ListNode();
        newCurr = newCurr.next;
    }

    if (first || second) {
        let remaining = first || second;

        while (remaining.next) {
            newCurr.val = remaining.val;
            remaining = remaining.next;
            newCurr.next = new ListNode();
            newCurr = newCurr.next;
        }
        newCurr.val = remaining.val;
    }


    return newList;
};

module.exports = mergeTwoLists;
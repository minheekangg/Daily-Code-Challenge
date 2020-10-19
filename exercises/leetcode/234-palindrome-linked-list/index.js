/**
 * completed 10/19/2020
 * Leetcode - EASY
*/

/**
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Output: 1->1->2->3->4->4
 */

var isPalindrome = function (head) {
    const arr = [];
    let current = head;

    while (current) {
        arr.push(current.val);
        current = current.next;
    }

    for (let i = 0; i < arr.length / 2; i++) {
        let start = arr[i];
        let end = arr[arr.length - i - 1];

        if (start !== end) return false;
    }

    return true;
};

module.exports = isPalindrome;
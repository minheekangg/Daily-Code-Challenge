/**
 * completed 09/14/2020
 * Leetcode - EASY
*/

/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?
*/

var hasCycle = function(head) {
if (!head || !head.next || !head.next.next) return false;

let slow = head;
let fast = head.next.next;

while (slow && fast) {
    if (slow === fast) return true;
    if (!fast.next || !fast.next.next) return false;
    slow = slow.next;
    fast = fast.next.next;
}
return false;
};

module.exports = hasCycle;
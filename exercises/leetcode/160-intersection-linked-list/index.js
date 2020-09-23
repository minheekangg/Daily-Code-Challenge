/**
 * completed 9/23/2020
 * Leetcode - EASY
*/

/**
Write a program to find the node at which the intersection of two singly linked lists begins.
For example, the following two linked lists:

Example:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 */

// My Solution:
// var getIntersectionNode = function (headA, headB) {
//     while (headA) {
//         let currentHeadB = headB;
//         while (currentHeadB) {
//             if (headA === currentHeadB) return headA;
//             else currentHeadB = currentHeadB.next;
//         }
//         headA = headA.next;
//         currentHeadB = headB;
//     }
//     return null;
// };



/*
324 + 191324
3-2-4-1-9-1-3-2-4
1-9-1-3-2-4-3-2-4

4324 + 191324
4-3-2-4-1-9-1-3-2-4
1-9-1-3-2-4-4-3-2-4

41845 + 99999845
4-1-8-4-5-9-9-9-9-9-8-4-5
9-9-9-9-9-8-4-5-4-1-8-4-5
*/

// Better Solution: 
var getIntersectionNode = function (headA, headB) {
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
        currA = currA === null ? headB : currA.next;
        currB = currB === null ? headA : currB.next;
    }
    return currA;
};

module.exports = getIntersectionNode;
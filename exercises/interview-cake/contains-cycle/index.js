/**
 * completed 7/24/2019
 * Leetcode - EASY
*/

/**
 *
 Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.
 */

// My Solution
// var containsCycle = function (head) {
//     const hash = {};

//     let current = head;

//     while (!current) {
//         if (!hash[current.val]) {
//             hash[current.val] = true;
//         } else {
//             return true;
//         }
//     }
//     return false;
// };

function containsCycle(firstNode) {

    // Start both runners at the beginning
    let slowRunner = firstNode;
    let fastRunner = firstNode;

    // Until we hit the end of the list
    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // Case: fastRunner is about to "lap" slowRunner
        if (fastRunner === slowRunner) {
            return true;
        }
    }

    // Case: fastRunner hit the end of the list
    return false;
}

module.exports = containsCycle;
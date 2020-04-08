/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    var counter = 0;
    var current = head;
    while (current.next !== null) {
        counter++;
        current = current.next;
    }
    var middle = Math.ceil(counter / 2);

    var node = head;
    var midCounter = 0;
    while (midCounter !== middle) {
        node = node.next;
        midCounter++;
    }
    return node;
};
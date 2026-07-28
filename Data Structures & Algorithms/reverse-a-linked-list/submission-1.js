/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let currentNode = head;
        let prevNode = null;

        while (currentNode !== null) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }
        return prevNode;
    }
}

// create new list instead
function newList(head) {
        if (head == null || head.val == null) return new ListNode()

        console.log(head === undefined)
        let currentNode = head;
        let currentNewNode = null;
        while (currentNode.next !== null) {
            currentNewNode = new ListNode(currentNode.val, currentNewNode);
            currentNode = currentNode.next;
        }
        // Now the last node (which has next = null) is still left
        const lastNode = new ListNode(currentNode.val, currentNewNode);
        return lastNode;
    }
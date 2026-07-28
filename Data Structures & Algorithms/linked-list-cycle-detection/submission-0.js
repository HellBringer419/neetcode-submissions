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
     * @return {boolean}
     */
    hasCycle(head) {
        let visted = new Set();
        let currentNode = head;
        while (currentNode !== null) {
            // console.log({ currentNode, visted })
            if (visted.has(currentNode)) return true;
            else visted.add(currentNode);
            currentNode = currentNode.next;
        }
        return false;
    }
}

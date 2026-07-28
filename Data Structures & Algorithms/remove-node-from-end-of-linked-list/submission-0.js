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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = 1;
        const map = new Map();
        let currentNode = head;
        while (currentNode != null) {
            map.set(count, currentNode);
            currentNode = currentNode.next;
            count++;
        }
        console.log(count)
        const nodeJustAfter = map.get(count-n + 1) ?? null;
        // console.log(nodeJustAfter)
        const nodeJustBefore = map.get(count-n - 1)
        // console.log(nodeJustBefore)
        if(nodeJustBefore) nodeJustBefore.next = nodeJustAfter;
        else head = nodeJustAfter;
        return head;
    }
}

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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let currentList1 = list1;
        let currentList2 = list2;
        let prevNewNode;
        let firstNode = null;
            // console.log({ currentList1, currentList2, prevNewNode });
        while(currentList1 != null || currentList2 != null) {
            let toAdd;
            if (!currentList1 || currentList1 == []) {
                toAdd = currentList2;
                currentList2 = currentList2.next;
            } else if (!currentList2 || currentList2 == []) {
                toAdd = currentList1;
                currentList1 = currentList1.next;
            } else if(currentList1.val <= currentList2.val) {
                toAdd = currentList1;
                currentList1 = currentList1.next;
            } else {
                toAdd = currentList2;
                currentList2 = currentList2.next;
            }

            const currentNode = new ListNode(toAdd.val, null);
           if (!firstNode) {
            firstNode = currentNode;
            prevNewNode = currentNode;
           } else {
            prevNewNode.next = currentNode;
           }
           prevNewNode = currentNode;
        }
        return firstNode;
    }
}

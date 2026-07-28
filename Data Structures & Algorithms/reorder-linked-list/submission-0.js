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
     * @return {void}
     */
    reorderList(head) {
        if (head === null || head.next === null) return; 
        let s = head;
        let f = head.next;
        while (f !== null && f.next !== null) {
            s = s.next;
            f = f.next.next;
        }

        let prev = null;
        let cur = s.next;
        while(cur !== null) {
            let next = cur.next;
            cur.next=prev;
            // move next
            prev=cur;
            cur=next;
        }
        s.next = null;

        let h1 = head;
        let h2 = prev;
        while(h1!=null && h2!==null) {
            let next1 = h1.next;
            let next2 = h2.next;

            // do the re-order
            h1.next = h2;
            h2.next = next1;

            h1 = next1;
            h2 = next2;
        }
    }
}

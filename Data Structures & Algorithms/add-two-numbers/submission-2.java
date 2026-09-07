/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */



class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode();
        ListNode tail = head;
        ListNode last = head;

        int carry = 0;
        while(l1!=null || l2 != null) {
            int val = 0;
            if (l1 == null) {
                val = l2.val + carry;
                l2 = l2.next;
            } else if (l2 == null) {
                val = l1.val + carry;
                l1 = l1.next;
            } else {
                val = l1.val + l2.val + carry;
                l1 = l1.next;
                l2 = l2.next;
            }
            if (val >= 10) {
                carry = val/10;
                val = val%10;
            } else {
                carry = 0;
            }
            last = tail;
            tail = new ListNode(val);
            last.next = tail;
        }
        if (carry > 0) {
            last = tail;
            tail = new ListNode(carry);
            last.next = tail;
        }

        return head.next;
    }
}

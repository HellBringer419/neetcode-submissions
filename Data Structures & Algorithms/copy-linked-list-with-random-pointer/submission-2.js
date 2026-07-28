// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const oldToNew = new Map();
        oldToNew.set(null, null)

        let current = head;
        while (current !== null) {
            const newNode = new Node(current.val)
            oldToNew.set(current, newNode);
            current= current.next ;
        }

        current = head;
        while (current != null) {
            const newNode = oldToNew.get(current);
            newNode.next = oldToNew.get(current.next);
            newNode.random = oldToNew.get(current.random)
            current= current.next 
        }

        return oldToNew.get(head);
    }

}

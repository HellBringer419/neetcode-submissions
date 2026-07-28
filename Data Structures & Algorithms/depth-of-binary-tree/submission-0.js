/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

function traverse(node, depth) {
        if (node == null) return depth;
        depth++;
        if (node.left == null && node.right == null) {
            console.log("Found nothing")
            return depth;
        } else if (node.left == null) {
            console.log("right")
            return traverse(node.right, depth)
        } else if (node.right == null) {
            console.log("left")
            return traverse(node.left, depth)
        } else {
            console.log("Go both direction")
            return Math.max(traverse(node.left, depth), traverse(node.right, depth))
        }
    }

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        return traverse(root, 0)
    }

}

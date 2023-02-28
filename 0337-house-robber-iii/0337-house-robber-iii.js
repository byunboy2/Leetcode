/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    function dp(node) {
        if (!node) return [0, 0];
        const left = dp(node.left);
        const right = dp(node.right);
        const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        const rob = node.val + left[0] + right[0];
        return [notRob, rob];
    }
    const result = dp(root);
    return Math.max(result[0], result[1]);
};
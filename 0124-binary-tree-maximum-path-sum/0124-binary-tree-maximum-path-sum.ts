/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
    if(!root) return 0
    let maxSum = -Infinity;
    function calculateMaxSum(node){
        if(!node) return 0
        let leftBranchSum = Math.max(0,calculateMaxSum(node.left));
        let rightBranchSum = Math.max(0,calculateMaxSum(node.right));
        
        maxSum = Math.max(maxSum,leftBranchSum+node.val+rightBranchSum);
        return Math.max(0,Math.max(leftBranchSum, rightBranchSum)) + node.val
    }
    calculateMaxSum(root);
    return maxSum;
};


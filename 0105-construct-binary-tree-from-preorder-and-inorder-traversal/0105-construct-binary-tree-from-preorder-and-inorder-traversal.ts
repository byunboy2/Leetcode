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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderIndexMap = new Map(inorder.map((val, idx) => [val, idx]));

    const buildTreeHelper = (preorderStart, preorderEnd, inorderStart, inorderEnd) => {
        if (preorderStart > preorderEnd) return null;
        
        const root = new TreeNode(preorder[preorderStart]);
        const inorderIndex = inorderIndexMap.get(root.val);
        const leftSubtreeSize = inorderIndex - inorderStart;
        
        root.left = buildTreeHelper(preorderStart + 1, preorderStart + leftSubtreeSize, inorderStart, inorderIndex - 1);
        root.right = buildTreeHelper(preorderStart + leftSubtreeSize + 1, preorderEnd, inorderIndex + 1, inorderEnd);
        
        return root;
    };
    
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
};

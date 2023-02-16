/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // create a map to store the index of each node in the inorder array
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    
    // recursive helper function to build the tree
    const buildTreeHelper = function(preorderStart, preorderEnd, inorderStart, inorderEnd) {
        if (preorderStart > preorderEnd) {
            return null;
        }
        
        // create the root node using the first node in the preorder array
        const rootVal = preorder[preorderStart];
        const root = new TreeNode(rootVal);
        
        // find the index of the root node in the inorder array
        const inorderIndex = indexMap.get(rootVal);
        
        // calculate the number of nodes in the left subtree and right subtree
        const leftSubtreeSize = inorderIndex - inorderStart;
        const rightSubtreeSize = inorderEnd - inorderIndex;
        
        // recursively build the left subtree and right subtree
        root.left = buildTreeHelper(preorderStart + 1, preorderStart + leftSubtreeSize, inorderStart, inorderIndex - 1);
        root.right = buildTreeHelper(preorderEnd - rightSubtreeSize + 1, preorderEnd, inorderIndex + 1, inorderEnd);
        
        return root;
    };
    
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
};

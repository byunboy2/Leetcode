const buildTree= (preorderTraversal, inorderTraversal) => {
    const inorderIndexMap = new Map(inorderTraversal.map((val, idx) => [val, idx]));

    const buildTreeHelper = (preorderStart, preorderEnd, inorderStart, inorderEnd) => {
        if (preorderStart > preorderEnd) return null;
        
        const root = new TreeNode(preorderTraversal[preorderStart]);
        const inorderIndex = inorderIndexMap.get(root.val);
        const leftSubtreeSize = inorderIndex - inorderStart;
        
        root.left = buildTreeHelper(preorderStart + 1, preorderStart + leftSubtreeSize, inorderStart, inorderIndex - 1);
        root.right = buildTreeHelper(preorderStart + leftSubtreeSize + 1, preorderEnd, inorderIndex + 1, inorderEnd);
        
        return root;
    };
    
    return buildTreeHelper(0, preorderTraversal.length - 1, 0, inorderTraversal.length - 1);
};

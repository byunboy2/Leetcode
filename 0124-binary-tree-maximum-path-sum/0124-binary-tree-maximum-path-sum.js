function maxPathSum(root) {
  let maxSum = -Infinity;
  
  function maxPathSumHelper(node) {
    if (!node) return 0;
    
    const leftSum = Math.max(0, maxPathSumHelper(node.left));
    const rightSum = Math.max(0, maxPathSumHelper(node.right));
    
    maxSum = Math.max(maxSum, leftSum + node.val + rightSum);
    
    return Math.max(leftSum, rightSum) + node.val;
  }
  
  maxPathSumHelper(root);
  
  return maxSum;
}

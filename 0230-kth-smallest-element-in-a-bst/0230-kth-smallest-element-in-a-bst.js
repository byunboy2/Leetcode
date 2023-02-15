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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if(!root) return;
  let smallestValue =  Infinity;
  let nodesToTravel = [root];
  while(nodesToTravel.length !== 0){
    let currentNode = nodesToTravel.shift();
    if(currentNode.val < smallestValue) smallestValue = currentNode.val
    if(currentNode.left) nodesToTravel.push(currentNode.left);
    if(currentNode.right) nodesToTravel.push(currentNode.right);
    }
    return smallestValue + (k-1)
};
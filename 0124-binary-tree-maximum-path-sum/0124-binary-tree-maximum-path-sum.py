# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        max_sum = float("-inf")
        def calculate_max_sum(node):
            nonlocal max_sum
            if not node:
                return 0
            left_sum = max(0,calculate_max_sum(node.left))
            right_sum = max(0,calculate_max_sum(node.right))
            max_sum = max(max_sum,left_sum+right_sum+node.val)
            return max(left_sum,right_sum) + node.val
        calculate_max_sum(root)
        return max_sum



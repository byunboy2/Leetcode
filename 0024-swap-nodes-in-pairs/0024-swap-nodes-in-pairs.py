# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        prev_node, curr_node, new_head = None, head, head.next
        while curr_node and curr_node.next:
            next_node = curr_node.next
            curr_node.next = next_node.next
            next_node.next = curr_node
            if prev_node:
                prev_node.next = next_node
            prev_node = curr_node
            curr_node = curr_node.next
            
        return new_head
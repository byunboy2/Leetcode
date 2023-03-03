class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        new_head = head.next
        prev_node, curr_node = None, head
        
        while curr_node and curr_node.next:
            next_node = curr_node.next

            curr_node.next = next_node.next
            next_node.next = curr_node
            if prev_node:
                prev_node.next = next_node
            prev_node = curr_node
            curr_node = curr_node.next
        
        return new_head

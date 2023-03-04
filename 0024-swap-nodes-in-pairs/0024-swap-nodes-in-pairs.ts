/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let [prev_node,curr_node,new_head] = [null,head,head.next];
    while (curr_node && curr_node.next){
      let new_curr_node = curr_node.next;
      curr_node.next = new_curr_node.next;
      new_curr_node.next = curr_node;
      if (prev_node){
          prev_node.next = new_curr_node;
      }
      prev_node = curr_node;
      curr_node = curr_node.next;
    };
    return new_head;
};
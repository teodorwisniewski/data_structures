# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# class Solution:
#     # O(1)
#     def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
#         curr, prev = head, None
#         while curr:
#             nxt = curr.next
#             curr.next = prev
#             prev = curr
#             curr = nxt
#         return prev

def reverse_list(head):
    new_head = None
    current = head
    while current is not None:
        nxt_node = current.next
        current.next = new_head
        new_head = current
        current = nxt_node
    return new_head

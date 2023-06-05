from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow_node = head
        fast_node = head
        while fast_node is not None and fast_node.next is not None:
            slow_node = slow_node.next
            fast_node = fast_node.next.next
        return slow_node

def print_linked_list(head):
    print(f"\nPrinting the linked list")
    print(f"The head value is {head.val}")
    current = head
    while current.next is not None:
        current = current.next
        print(f"The node value is {current.val}")

if __name__ == "__main__":
    head = ListNode(val=0)
    head.next = ListNode(val=1)
    node = head.next
    node.next = ListNode(val=2)
    node = node.next
    node.next = ListNode(val=3)
    node = node.next
    node.next = ListNode(val=4)
    # node = node.next
    # node.next = ListNode(val=5)
    print_linked_list(head)

    middle_node = Solution().middleNode(head)
    print_linked_list(middle_node)

    
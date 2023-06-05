# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def add_with_limit(a, b, limit=10):
    """
    This function takes two inputs 'a' and 'b', performs an addition operation and
    returns the result and a remainder if the result exceeds the limit.
    """
    result = a + b
    remainder = 0
    if result >= limit:
        remainder = result - limit
        result = int(limit/10)
    else:
        remainder = result
        result = 0
    return result, remainder


def sumOfLinkedLists(linkedListOne, linkedListTwo):
    
    first_list = linkedListOne
    second_list = linkedListTwo
    add_to_next_node, new_node_value = add_with_limit(first_list.value,
                                        second_list.value)
    head = LinkedList(value=new_node_value)
    current_node = head
    while first_list.next is not None or second_list.next is not None:
        if first_list.next is not None and second_list.next is not None:
            first_list = first_list.next
            second_list = second_list.next
            add_to_next_node, new_node_value = add_with_limit(first_list.value,
                                        second_list.value + add_to_next_node)
            
        elif first_list.next is not None and second_list.next is None:
            first_list = first_list.next
            add_to_next_node, new_node_value = add_with_limit(first_list.value,
                                      add_to_next_node)

        elif first_list.next is None and second_list.next is not None:
            second_list = second_list.next
            add_to_next_node, new_node_value = add_with_limit(add_to_next_node,
                                        second_list.value)
        current_node.next = LinkedList(value=new_node_value)
        current_node = current_node.next
    if add_to_next_node > 0:
        current_node.next = LinkedList(value=add_to_next_node)
    
        
    return head




def print_linked_list(head):
    print(f"\nPrinting the linked list")
    print(f"The head value is {head.value}")
    current = head
    while current.next is not None:
        current = current.next
        print(f"The node value is {current.value}")

if __name__ == "__main__":
    # head = LinkedList(2)
    # head.next = LinkedList(4)
    # node = head.next
    # node.next = LinkedList(7)
    # node = node.next
    # node.next = LinkedList(1)
    # print_linked_list(head)

    # head2 = LinkedList(9)
    # head2.next = LinkedList(4)
    # node = head2.next
    # node.next = LinkedList(5)
    # print_linked_list(head2)

    # print("\n\n sumOfLinkedLists")
    # sum_output = sumOfLinkedLists(head, head2)
    # print_linked_list(sum_output)

    print("\n\n second test case")
    head = LinkedList(1)
    head.next = LinkedList(1)
    node = head.next
    node.next = LinkedList(1)
    print_linked_list(head)

    head2 = LinkedList(9)
    head2.next = LinkedList(9)
    node = head2.next
    node.next = LinkedList(9)
    print_linked_list(head2)

    print("\n\n sumOfLinkedLists")
    sum_output = sumOfLinkedLists(head, head2)
    print_linked_list(sum_output)

# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def sumOfLinkedLists(linkedListOne, linkedListTwo):
    
    new_linked_list = LinkedList(0)

    first_list = linkedListOne
    second_list = linkedListTwo
    carry = 0
    current_node = new_linked_list

    while first_list is not None or second_list is not None or carry != 0:
        
        first_value = first_list.value if first_list else 0
        second_value = second_list.value if second_list else 0       
        summation = first_value + second_value + carry

        new_value = summation % 10
        carry = summation // 10
        current_node.next = LinkedList(new_value)
        current_node = current_node.next

        first_list = first_list.next if first_list else None
        second_list = second_list.next if second_list else None

    return new_linked_list.next




def print_linked_list(head):
    print(f"\nPrinting the linked list")
    print(f"The head value is {head.value}")
    current = head
    while current.next is not None:
        current = current.next
        print(f"The node value is {current.value}")


if __name__ == "__main__":
    head = LinkedList(2)
    head.next = LinkedList(4)
    node = head.next
    node.next = LinkedList(7)
    node = node.next
    node.next = LinkedList(1)
    print_linked_list(head)

    head2 = LinkedList(9)
    head2.next = LinkedList(4)
    node = head2.next
    node.next = LinkedList(5)
    print_linked_list(head2)

    print("\n\n sumOfLinkedLists")
    sum_output = sumOfLinkedLists(head, head2)
    print_linked_list(sum_output)

    # print("\n\n second test case")
    # head = LinkedList(1)
    # head.next = LinkedList(1)
    # node = head.next
    # node.next = LinkedList(1)
    # print_linked_list(head)

    # head2 = LinkedList(9)
    # head2.next = LinkedList(9)
    # node = head2.next
    # node.next = LinkedList(9)
    # print_linked_list(head2)

    # print("\n\n sumOfLinkedLists")
    # sum_output = sumOfLinkedLists(head, head2)
    # print_linked_list(sum_output)

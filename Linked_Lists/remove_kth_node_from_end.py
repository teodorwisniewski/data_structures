


class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __repr__(self):
        nxt = self.next
        print("First node: ", self.value)
        while nxt is not None:
            print("Node values is: ", nxt.value)
            nxt = nxt.next
        return ""


def removeKthNodeFromEnd(head, k):
    if k == 1:
        current_node = head
        while current_node.next.next is not None:
            current_node = current_node.next
        current_node.next = None
        return head

    count = 1
    current_node = head
    while current_node.next is not None:
        count += 1
        current_node = current_node.next
    if k > count:
        return 

    if k == count:
        new_head = head.next
        head.value = new_head.value
        head.next = new_head.next
        return 
    
    current_node = head
    for i in range(count - k - 1):
        current_node = current_node.next
    
    current_node.next = current_node.next.next
    return 



if __name__ == "__main__":
    head = LinkedList(0)
    head.next = LinkedList(1)
    node = head.next
    node.next = LinkedList(2)
    node = node.next
    node.next = LinkedList(3)
    node = node.next
    node.next = LinkedList(4)
    node = node.next
    node.next = LinkedList(5)
    node = node.next
    node.next = LinkedList(6)
    node = node.next
    node.next = LinkedList(7)
    node = node.next
    node.next = LinkedList(8)
    node = node.next
    node.next = LinkedList(9)

    print(head)
    print("\n\n\n Remove the first node \n")
    removeKthNodeFromEnd(head, 10)
    print(head)


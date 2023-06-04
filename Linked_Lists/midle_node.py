import math


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


def middleNode(linkedList):
    if linkedList.next is None:
        return linkedList
    if linkedList.next.next is None:
        return linkedList.next
    
    head = linkedList
    current_node = linkedList
    length = 1
    while current_node.next:
        length += 1
        current_node = current_node.next
    
    middle = int(length/2)
    current_node = head
    for i in range(length):   
        if i == middle:
            return current_node
        current_node = current_node.next


if __name__ == "__main__":
    head = LinkedList(1)
    node = LinkedList(2)
    head.next = node
    node.next = LinkedList(3)
    print(head)
    print("\n\n\n Finding the first node \n")
    middle = middleNode(head)
    print(middle)


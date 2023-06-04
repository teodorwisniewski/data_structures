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
     
    # current_node = linkedList
    # count = 1
    # while current_node.next:
    #     count += 1
    #     current_node = current_node.next
    # middle_index = int(count/2)
    # current_node = linkedList
    # for i in range(count):
    #     if i == middle_index:
    #         return current_node
    #     current_node = current_node.next
    slow_node = linkedList
    fast_node = linkedList
    while fast_node is not None and fast_node.next is not None:
        slow_node = slow_node.next
        fast_node = fast_node.next.next
    return slow_node




if __name__ == "__main__":
    head = LinkedList(1)
    node = LinkedList(2)
    head.next = node
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
    print(head)
    print("\n\n\n Finding the first node \n")
    middle = middleNode(head)
    print(middle)


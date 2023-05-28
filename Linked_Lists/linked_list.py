print("Linked list")


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next

    # O(1)
    def append(self, value):
        new_node = Node(value)
        if self.tail is None:
            self.head = new_node
            self.tail = new_node
        
        self.tail.next = new_node
        self.tail = new_node



if __name__ == "__main__":
    linked_list = LinkedList(4)
    linked_list.append(6)
    linked_list.append(11)
    linked_list.append(22)
    linked_list.print_list()
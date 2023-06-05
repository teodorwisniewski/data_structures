

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            self.length = 1
            return
        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node
        self.length += 1
        return True
        
    def print_list(self):
        current_node = self.head
        print(f'The head of the linked list is: ', current_node.value)
        while current_node.next is not None:
            current_node = current_node.next
            print(current_node.value)
            

if __name__ == '__main__':
    my_doubly_linked_list = DoublyLinkedList(7)
    my_doubly_linked_list.append(2)
    my_doubly_linked_list.append(1)
    my_doubly_linked_list.print_list()
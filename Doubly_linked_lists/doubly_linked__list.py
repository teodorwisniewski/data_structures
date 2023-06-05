

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
        
    def print_list(self):
        current_node = self.head
        print(f'The head of the linked list is: ', self.length)
        while current_node.next is not None:
            current_node = current_node.next
            print(current_node.value)
            

if __name__ == '__main__':
    my_doubly_linked_list = DoublyLinkedList(7)
    my_doubly_linked_list.print_list()
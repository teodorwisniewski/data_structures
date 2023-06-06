

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

    def __str__(self):
        return f"value {self.value}"


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
    
    # O(1)
    def pop(self):
        if self.head is None:
            return None
        node_to_pop = self.tail
        if self.head is self.tail:
            self.head = None
            self.tail = None
        else:
            self.tail = self.tail.prev
            node_to_pop.prev = None
            self.tail.next = None
            
        self.length -= 1
        return node_to_pop
    
    def prepend(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            self.length = 1
        else:
            second = self.head
            self.head = new_node
            self.head.next = second
            second.prev = self.head
        self.length += 1
        return True
    
    # O(1)
    def pop_first(self):
        if self.head is None:
            return None
        node_to_pop = self.head
        if self.head is self.tail:
            self.head = None
            self.tail = None
        else:
            new_head = self.head.next
            self.head = new_head
            self.head.prev = None
            
        node_to_pop.next = None
        self.length -= 1
        return node_to_pop
        
    def print_list(self):
        current_node = self.head
        if self.head is None:
            print("The DDL is empty")
            return
        print(f'The head of the linked list is: ', current_node.value)
        while current_node.next is not None:
            current_node = current_node.next
            print(current_node.value)
            

if __name__ == '__main__':
    my_doubly_linked_list = DoublyLinkedList(7)
    my_doubly_linked_list.append(2)
    my_doubly_linked_list.append(1)
    my_doubly_linked_list.append(4)
    my_doubly_linked_list.print_list()
    print("popping last node")
    print(my_doubly_linked_list.pop())
    print(my_doubly_linked_list.pop())
    print(my_doubly_linked_list.pop())
    print(my_doubly_linked_list.pop())
    print(my_doubly_linked_list.pop())
    my_doubly_linked_list.print_list()
    print("prepend")
    print(my_doubly_linked_list.prepend(5))
    print(my_doubly_linked_list.prepend(4))
    print(my_doubly_linked_list.prepend(3))
    print(my_doubly_linked_list.prepend(2))
    print(my_doubly_linked_list.prepend(1))
    my_doubly_linked_list.print_list()

    print("\n\n pop first")
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    my_doubly_linked_list.print_list()
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    my_doubly_linked_list.print_list()
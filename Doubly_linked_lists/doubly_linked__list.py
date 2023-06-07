

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
    
    # O(n)
    def get(self, index) -> Node:
        if index > self.length or index < 0:
            return None
        middle_index = self.length / 2
        if index < middle_index:
            current_node = self.head
            for _ in range(index):
                current_node = current_node.next
        else:
            current_node = self.tail
            for _ in range(self.length-1, index, -1):
                current_node = current_node.prev
        return current_node

    def set_value(self, index, value):
        node_to_change = self.get(index)
        if node_to_change is not None:
            node_to_change.value = value 
            return True
        return False     
    
    def insert(self, index, value):
        if index < 0 or index > self.length:
            return False
        if index == 0:
            return self.prepend(value)
        if index == self.length:
            return self.append(value)
        new_node = Node(value)
        before = self.get(index - 1)
        node_to_move_forward = before.next
        before.next = new_node
        new_node.prev = before
        new_node.next = node_to_move_forward
        node_to_move_forward.prev = new_node
        self.length += 1
        return True

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
    print(f"my_doubly_linked_list length= {my_doubly_linked_list.length}")
    my_doubly_linked_list.print_list()
    print("prepend")
    print(my_doubly_linked_list.prepend(5))
    print(my_doubly_linked_list.prepend(4))
    print(my_doubly_linked_list.prepend(3))
    print(my_doubly_linked_list.prepend(2))
    print(my_doubly_linked_list.prepend(1))
    print(f"my_doubly_linked_list length= {my_doubly_linked_list.length}")
    my_doubly_linked_list.print_list()

    print("\n\n pop first")
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    my_doubly_linked_list.print_list()
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    print(my_doubly_linked_list.pop_first())
    my_doubly_linked_list.print_list()
    print("\n\n get at index")
    print(f"my_doubly_linked_list length= {my_doubly_linked_list.length}")
    print(my_doubly_linked_list.prepend(3))
    print(my_doubly_linked_list.prepend(2))
    print(my_doubly_linked_list.prepend(1))
    print(f"Getting node at index 0: {my_doubly_linked_list.get(0)}")
    print(f"Getting node at index 1: {my_doubly_linked_list.get(1)}")
    print(f"Getting node at index 2: {my_doubly_linked_list.get(2)}")
    print(f"Getting node at index 5: {my_doubly_linked_list.get(5)}")
    print(f"Getting node at index -5: {my_doubly_linked_list.get(5)}")
    my_doubly_linked_list.print_list()
    print("\n\n set value")
    my_doubly_linked_list.set_value(0, 10)
    my_doubly_linked_list.set_value(1, 20)
    my_doubly_linked_list.set_value(2, 30)
    my_doubly_linked_list.print_list()
    print("\n\n insert")
    my_doubly_linked_list.insert(0, 0)
    my_doubly_linked_list.insert(4, 4)
    my_doubly_linked_list.insert(2, 222)
    my_doubly_linked_list.print_list()
print("Linked list")


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f"node value {self.value} next={self.next}"


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
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True
    
    # O(n)
    def pop(self):
        if self.head is None:
            return None
        if self.head is self.tail:
            node_to_pop = self.head
            self.head = None
            self.tail = None
            self.length = 0
            return node_to_pop
        
        node_to_check = self.head
        while node_to_check.next is not self.tail:
            print(f"iteratiing over to pop {node_to_check.value}")
            node_to_check = node_to_check.next
        node_to_pop = self.tail
        self.tail = node_to_check
        self.tail.next = None
        self.length -= 1
        return node_to_pop
        
    def prepend(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            self.length = 1
            return 
        new_node.next = self.head
        self.head = new_node




if __name__ == "__main__":
    linked_list = LinkedList(4)
    linked_list.append(6)
    linked_list.append(11)
    linked_list.append(22)
    linked_list.print_list()
    print('Length of the list',linked_list.length)

    popped_node = linked_list.pop()
    linked_list.print_list()
    print(f"popped node {popped_node.value}")
    print(linked_list.pop())
    print(linked_list.pop())
    print(linked_list.pop())
    print(linked_list.pop())
    linked_list.prepend(3)
    linked_list.prepend(1)
    linked_list.prepend(-5)
    linked_list.append(13)
    linked_list.print_list()

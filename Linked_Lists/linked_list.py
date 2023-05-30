print("Linked list")


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f"node value {self.value}"


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
    
    # O(1)    
    def prepend(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            self.length = 1
            return True
        new_node.next = self.head
        self.head = new_node
        return True
    
    # O(1)
    def pop_first(self) -> Node:
        if self.length <= 1:
            return self.pop()
        
        new_head = self.head.next
        self.head.next = None
        node_to_pop = self.head
        self.head = new_head
        self.length -= 1
        return node_to_pop
    
    # O(n)
    def get(self, index):
        if index < 0 or index >= self.length:
            return None    
        temp = self.head
        for _ in range(index):
            temp = temp.next
        return temp
    
    # O(n)
    def set_value(self, index, value) -> bool:
        temp = self.get(index)
        if temp:
            temp.value = value
            return True
        return False
    
    # O(n)
    def insert(self, index, value):
        if index < 0 or index > self.length:
            return False   
        if index == 0:
            return self.prepend(value)
        if index == self.length:
            return self.append(value)
        temp = self.get(index-1)
        new_node = Node(value)
        new_node.next = temp.next
        temp.next = new_node
        self.length += 1
        return True
    
    # O(n)
    def remove(self, index):
        if index < 0 or index > self.length:
            return False  
        if index == 0:
            self.pop_first()
            return True
        if index == self.length-1:
            self.pop()
            return True
        previous_node = self.get(index - 1)
        node_to_remove = previous_node.next
        next_node = node_to_remove.next
        node_to_remove.next = None
        previous_node.next = next_node
        self.index -= 1
        return True
        

        
        
if __name__ == "__main__":
    linked_list = LinkedList(4)
    linked_list.append(6)
    linked_list.append(11)
    linked_list.append(22)
    linked_list.print_list()
    print('Length of the list', linked_list.length)

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
    print(linked_list.pop_first())
    print(linked_list.pop_first())
    linked_list.print_list()   
    print(linked_list.pop_first())
    print(linked_list.pop_first())
    print(linked_list.pop_first())
    linked_list = LinkedList(4)
    linked_list.append(6)
    linked_list.append(11)
    linked_list.append(22)
    linked_list.print_list()
    print("get linked list: ", linked_list.get(0))
    linked_list.set_value(3, -3)
    linked_list.set_value(0, -5)
    linked_list.print_list()
    print("check inserting functionality")
    linked_list.insert(1, 1)
    linked_list.insert(3, 3)
    linked_list.insert(6, 6)
    linked_list.print_list()
    print("check remove functionality")
    linked_list.remove(3)
    linked_list.remove(1)
    linked_list.print_list()

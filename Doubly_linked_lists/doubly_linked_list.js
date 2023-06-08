
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        const new_node = new Node(value);
        if (!this.head){
            this.head = new_node;
            this.tail = new_node;
        } else if (this.head === this.tail){
            this.head.next = new_node;
            this.tail = new_node;
            this.tail.prev = this.head;
        } else{
            this.tail.next = new_node;
            new_node.prev = this.tail;
            this.tail = new_node;

        }
        this.length++;
        return this

    }
}










let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(1);
myDoublyLinkedList.append(4);
myDoublyLinkedList.printList();
console.log("popping last node");
console.log(myDoublyLinkedList.pop());
console.log(myDoublyLinkedList.pop());
console.log(myDoublyLinkedList.pop());
console.log(myDoublyLinkedList.pop());
console.log(myDoublyLinkedList.pop());
console.log(`my_doubly_linked_list length= ${myDoublyLinkedList.length}`);
myDoublyLinkedList.printList();
console.log("prepend");
console.log(myDoublyLinkedList.prepend(5));
console.log(myDoublyLinkedList.prepend(4));
console.log(myDoublyLinkedList.prepend(3));
console.log(myDoublyLinkedList.prepend(2));
console.log(myDoublyLinkedList.prepend(1));
console.log(`my_doubly_linked_list length= ${myDoublyLinkedList.length}`);
myDoublyLinkedList.printList();

console.log("\n\n pop first");
console.log(myDoublyLinkedList.popFirst());
console.log(myDoublyLinkedList.popFirst());
myDoublyLinkedList.printList();
console.log(myDoublyLinkedList.popFirst());
console.log(myDoublyLinkedList.popFirst());
console.log(myDoublyLinkedList.popFirst());
console.log(myDoublyLinkedList.popFirst());
myDoublyLinkedList.printList();
console.log("\n\n get at index");
console.log(`my_doubly_linked_list length= ${myDoublyLinkedList.length}`);
console.log(myDoublyLinkedList.prepend(3));
console.log(myDoublyLinkedList.prepend(2));
console.log(myDoublyLinkedList.prepend(1));
console.log(`Getting node at index 0: ${myDoublyLinkedList.get(0)}`);
console.log(`Getting node at index 1: ${myDoublyLinkedList.get(1)}`);
console.log(`Getting node at index 2: ${myDoublyLinkedList.get(2)}`);
console.log(`Getting node at index 5: ${myDoublyLinkedList.get(5)}`);
console.log(`Getting node at index -5: ${myDoublyLinkedList.get(5)}`);
myDoublyLinkedList.printList();
console.log("\n\n set value");
myDoublyLinkedList.setValue(0, 10);
myDoublyLinkedList.setValue(1, 20);
myDoublyLinkedList.setValue(2, 30);
myDoublyLinkedList.printList();
console.log("\n\n insert");
myDoublyLinkedList.insert(0, 0);
myDoublyLinkedList.insert(4, 4);
myDoublyLinkedList.insert(2, 222);
myDoublyLinkedList.printList();
console.log("\n\n remove");
console.log("Just removing the following node", myDoublyLinkedList.remove(0));
myDoublyLinkedList.printList();
console.log("\n remove node at index 2");
console.log("Just removing the following node", myDoublyLinkedList.remove(2));
myDoublyLinkedList.printList();
console.log("\n remove node at index 3");
console.log("Just removing the following node", myDoublyLinkedList.remove(3));
myDoublyLinkedList.printList();

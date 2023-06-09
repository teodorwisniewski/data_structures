

class Node {

    constructor (value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor (value){
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    push (value) {
        let newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else if(this.head === this.tail) {
            this.head.next = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this
    }

    printList(){
        console.log("Printing all nodes in the sigly linked list");
        if (!this.head){
            console.log("The singly linked list is empty.");
            return;
        }
        let currentNode = this.head;
        console.log(`The linked list has ${this.length} nodes`);
        console.log(`The head of the linked list has the following value ${this.head.value}`);
        while(currentNode.next !== null){
            currentNode = currentNode.next;
            console.log(`The node value is ${currentNode.value}`);
        }
        


    }


}


console.log("\n\n\n Constructing a new sigly linked list \n")
let linkedList = new SinglyLinkedList(4);
linkedList.push(6).push(11).push(230);
linkedList.printList();
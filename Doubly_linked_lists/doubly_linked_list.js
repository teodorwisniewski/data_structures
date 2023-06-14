
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

    pop() {
       let nodeToPop = this.head;
       if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else if(this.length > 1){
            let prev = null;
            while (nodeToPop.next !== null){
                prev = nodeToPop;
                nodeToPop = nodeToPop.next
            }
            prev.next = null;
            nodeToPop.prev = null
            this.tail = prev;
        }
        if (this.length>0){
            this.length--;
        }
        
        return nodeToPop
    }

    printList() {
        console.log("Printing all nodes in the doubly linked list");
        if (!this.head){
            console.log("The doubly linked list is empty.");
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


console.log("\n\n\n Constructing a new sigly doubly linked list \n")
let doublyLinkedList = new DoublyLinkedList(4);
doublyLinkedList.push(6).push(11).push(230);
doublyLinkedList.printList();

console.log("\n popping nodes from the list \n")
console.log(`Popping the fillowing node: ${doublyLinkedList.pop().value} `);
console.log(`Popping the fillowing node: ${doublyLinkedList.pop().value} `);
console.log(`Popping the fillowing node: ${doublyLinkedList.pop().value} `);
console.log(`Popping the fillowing node: ${doublyLinkedList.pop().value} `);
console.log(`Popping the fillowing node: ${doublyLinkedList.pop()} `);
doublyLinkedList.printList();

// console.log("\n unshift = prepend nodes to the list \n");
// doublyLinkedList.unshift(9999).unshift(888).unshift(55).unshift(1);
// doublyLinkedList.printList();

// console.log("\n shift = pop first nodes to the list \n");
// doublyLinkedList.shift();
// doublyLinkedList.printList();
// doublyLinkedList.shift();
// doublyLinkedList.shift();
// doublyLinkedList.printList();
// doublyLinkedList.shift();
// doublyLinkedList.shift();
// doublyLinkedList.printList();

// console.log("\n get = get nodes from the list \n");
// doublyLinkedList.push(1).push(6).push(11).push(230);
// console.log(`GEtting the fillowing node: ${doublyLinkedList.get(0).value} `);
// console.log(`GEtting the fillowing node: ${doublyLinkedList.get(1).value} `);
// console.log(`GEtting the fillowing node: ${doublyLinkedList.get(3).value} `);
// console.log(`GEtting the fillowing node: ${doublyLinkedList.get(4)} `);
// console.log(`GEtting the fillowing node: ${doublyLinkedList.get(-3)} `);
// doublyLinkedList.printList();


// console.log("\n set = set nodes from the list \n");
// doublyLinkedList.set(0, 0);
// doublyLinkedList.set(1, 100);
// doublyLinkedList.set(2, 2000);
// doublyLinkedList.set(3, 30000);
// doublyLinkedList.set(4, 4423);
// doublyLinkedList.set(-3, 435);
// doublyLinkedList.printList();


// console.log("\n insert nodes from the list \n");
// doublyLinkedList.insert(0, 0.00001);
// doublyLinkedList.insert(1, 101);
// doublyLinkedList.insert(2, 2002);
// doublyLinkedList.insert(4, 404);
// doublyLinkedList.insert(8, 808);
// doublyLinkedList.insert(10, 2002);
// doublyLinkedList.printList();


// console.log("\n remove nodes from the list \n");
// console.log(`remove the fillowing node: ${doublyLinkedList.remove(0).value} `);
// console.log(`remove the fillowing node: ${doublyLinkedList.remove(8)} `);
// console.log(`remove the fillowing node: ${doublyLinkedList.remove(7).value} `);
// console.log(`remove the fillowing node: ${doublyLinkedList.remove(2).value} `);
// console.log(`remove the fillowing node: ${doublyLinkedList.remove(4).value} `);
// console.log(`remove the fillowing node: ${doublyLinkedList.remove(3).value} `);
// doublyLinkedList.set(2, 303);
// doublyLinkedList.set(3, 404);
// doublyLinkedList.printList();


// console.log("\n reversing the list \n");
// doublyLinkedList.reverse();
// doublyLinkedList.printList();

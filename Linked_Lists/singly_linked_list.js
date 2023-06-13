

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

    pop() {
        let nodeToPop;
        if(!this.head){
            return;
        } else if(this.head === this.tail){
            nodeToPop = this.head;
            this.head = null;
            this.tail = null;
        } else{
            let currentNode = this.head;
            while (currentNode.next !== this.tail){
                currentNode = currentNode.next;
            }
            nodeToPop = this.tail;
            this.tail = currentNode;
            this.tail.next = null;
        }

        this.length--;
        return nodeToPop;
    }

    unshift(value) {
        if(!this.head){
            return this.push(value);
        }
        let newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this
    }

    // pop first
    shift() {

        if(!this.head){
            return undefined;
        }

        let newHead = this.head.next;
        let nodeToRemove = this.head;
        this.head = newHead;
        nodeToRemove.next = null;
        this.length--;
        if (this.length === 0){
            this.tail = null;
        }
        return nodeToRemove   
    }

    get(index){
        if(index >= this.length || index< 0){
            return undefined;
        }
        let nodeToReturn = this.head;
        for (let i=0; i<index; i++){
            nodeToReturn = nodeToReturn.next;
        }
        return nodeToReturn;
    }

    set(index, value) {

        let nodeToModify = this.get(index);
        if (nodeToModify){
            nodeToModify.value = value;
            return true;
        }
        return false;
        
    }

    insert(index, value) {
        if (index < 0 || index > this.length){
            return false;
        }
        if (index === 0 ){
            return this.unshift(value);
        }
        if (index === this.length){
            return this.push(value);
        }
        let newNode = new Node(value);
        let prev = this.get(index-1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if (index<0 || index >= this.length){
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === this.length-1) {
            return this.pop();
        } 
        let before  = this.get(index-1);
        let nodeToRemove = before.next;
        before.next = nodeToRemove.next;
        nodeToRemove.next = null;
        this.length--;
        return nodeToRemove;
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

    toString(){
        return String(this.value);
    }


}


console.log("\n\n\n Constructing a new sigly linked list \n")
let linkedList = new SinglyLinkedList(4);
linkedList.push(6).push(11).push(230);
linkedList.printList();

console.log("\n popping nodes from the list \n")
console.log(`Popping the fillowing node: ${linkedList.pop().value} `);
console.log(`Popping the fillowing node: ${linkedList.pop().value} `);
console.log(`Popping the fillowing node: ${linkedList.pop().value} `);
console.log(`Popping the fillowing node: ${linkedList.pop().value} `);
console.log(`Popping the fillowing node: ${linkedList.pop()} `);
linkedList.printList();

console.log("\n unshift = prepend nodes to the list \n");
linkedList.unshift(9999).unshift(888).unshift(55).unshift(1);
linkedList.printList();

console.log("\n shift = pop first nodes to the list \n");
linkedList.shift();
linkedList.printList();
linkedList.shift();
linkedList.shift();
linkedList.printList();
linkedList.shift();
linkedList.shift();
linkedList.printList();

console.log("\n get = get nodes from the list \n");
linkedList.push(1).push(6).push(11).push(230);
console.log(`GEtting the fillowing node: ${linkedList.get(0).value} `);
console.log(`GEtting the fillowing node: ${linkedList.get(1).value} `);
console.log(`GEtting the fillowing node: ${linkedList.get(3).value} `);
console.log(`GEtting the fillowing node: ${linkedList.get(4)} `);
console.log(`GEtting the fillowing node: ${linkedList.get(-3)} `);
linkedList.printList();


console.log("\n set = set nodes from the list \n");
linkedList.set(0, 0);
linkedList.set(1, 100);
linkedList.set(2, 2000);
linkedList.set(3, 30000);
linkedList.set(4, 4423);
linkedList.set(-3, 435);
linkedList.printList();


console.log("\n insert nodes from the list \n");
linkedList.insert(0, 0.00001);
linkedList.insert(1, 101);
linkedList.insert(2, 2002);
linkedList.insert(4, 404);
linkedList.insert(8, 808);
linkedList.insert(10, 2002);
linkedList.printList();


console.log("\n remove nodes from the list \n");
console.log(`remove the fillowing node: ${linkedList.remove(0).value} `);
console.log(`remove the fillowing node: ${linkedList.remove(8)} `);
console.log(`remove the fillowing node: ${linkedList.remove(7).value} `);
console.log(`remove the fillowing node: ${linkedList.remove(2).value} `);
console.log(`remove the fillowing node: ${linkedList.remove(4).value} `);

linkedList.printList();


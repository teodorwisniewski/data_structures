


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.heigth = 1;
    }

    push(value){
        if (this.heigth==0){
            let newNode = new Node(value);
            this.top = newNode;
        }else{
            let newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
        }
        
        this.heigth++;
        return this
    }

    display_stack(){
        if (this.heigth==0){
            console.log("\n The stack is empty");
            return;
        }
        console.log("\nDisplaying the stack");
        console.log(`The stack top is ${this.top.value}`);
        let currentNode = this.top;
        while (currentNode.next){
            currentNode = currentNode.next;
            console.log(`The stack node is ${currentNode.value}`);
        }
    }

}


let myStack = new Stack(11);
myStack.push(12);
myStack.push(13);
myStack.push(14).push(15);
console.log("The stack file");
console.log(myStack);
myStack.display_stack()
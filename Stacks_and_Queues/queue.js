


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){
        let newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode
        }

        this.length++;
        return this
    }

    dequeue(){
        if (this.length === 0) return undefined;
        let elementToRemove = this.first;
        if (this.length === 1){
            this.first = null;
            this.last = null;
        } else{
            this.first = this.first.next;
        }
        elementToRemove.next = null;
        this.length--;
        return elementToRemove
    }   

    display_queue(){
        if (this.length==0){
            console.log("\n The queue is empty");
            return;
        }
        console.log("\nDisplaying the queue");
        console.log(`The queue first element is ${this.first.value}`);
        let currentNode = this.first;
        while (currentNode.next){
            currentNode = currentNode.next;
            console.log(`The queue node is ${currentNode.value}`);
        }
    }

}


let muQueue = new Queue(11);
muQueue.enqueue(12);
muQueue.enqueue(13);
muQueue.enqueue(14).enqueue(15);
console.log("The Queue file");
console.log(muQueue);
muQueue.display_queue();
console.log("\n\ndequeue elements from the Queue");
console.log(muQueue.dequeue());
console.log(muQueue.dequeue());
console.log(muQueue.dequeue());
muQueue.display_queue();
console.log(muQueue.dequeue());
console.log(muQueue.dequeue());
console.log(muQueue.dequeue());
muQueue.display_queue();
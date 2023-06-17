


class LinkedList{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    

}

function printLinkedList(head) {

    if (!head){
        console.log('The linked list is empty!')
        return;
    }
    console.log(`The head of the linked list is : ${head.value} `);
    let count = 1;
    let currentNode = head.next;
    while (currentNode) {
        console.log(`The node of the linked list has the following value : ${currentNode.value} `);
        currentNode = currentNode.next;
        count += 1;
    }
    console.log(`The linked list has : ${count} nodes. \n\n`);
};


function getLength(linkedList){
    let length = 0
    let currentNode = linkedList;
    while (currentNode){
        length += 1;
        currentNode = currentNode.next;
    }
    return length
}



// TC O(n+m)  SC O(1)

function reverseLinkedList(head) {
    if (!head){
        return null;
    }
    if (head.next === null){
        return head;
    }

    let before = null;
    let current = head;
    let after = null;
    while (current){
        after = current.next;
        current.next = before;
        before = current;
        current = after;
    }
    head = before;
    return head
}
  


  let head = new LinkedList(1);
  let node = head;
  node.next = new LinkedList(2);
  node = node.next;


 


  node.next = new LinkedList(3);
  node = node.next;
  node.next = new LinkedList(4);
  node = node.next;
  node.next = new LinkedList(5);
  node = node.next;
  printLinkedList(head);



  console.log("\n Return the reversed linked list");
  intersectionHead = reverseLinkedList(head);
  printLinkedList(intersectionHead);





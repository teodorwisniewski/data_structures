


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
    console.log(`The linked list has : ${count} nodes`);
};


function mergingLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    return null;
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



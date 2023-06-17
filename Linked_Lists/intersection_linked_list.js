


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



// TC  SC 
function mergingLinkedLists(linkedListOne, linkedListTwo) {
    
    let lengthOne = getLength(linkedListOne);
    let lengthTwo = getLength(linkedListTwo);

    if (lengthOne > lengthTwo){
        for (let i=0; i<(lengthOne-lengthTwo); i++){
            linkedListOne = linkedListOne.next;
        }
    } else if (lengthOne<lengthTwo){
        for (let i=0; i<(lengthTwo-lengthOne); i++){
            linkedListTwo = linkedListTwo.next;
        }
    }

    while (linkedListOne){
        if (linkedListOne===linkedListTwo){
            return linkedListOne;
        }
        linkedListOne = linkedListOne.next;
        linkedListTwo = linkedListTwo.next;
    }
    return null;
  }



  let head = new LinkedList(1);
  let node = head;
  node.next = new LinkedList(2);
  node = node.next;


  let head2 = new LinkedList(9);
  node2 = head2;
  node2.next = new LinkedList(10);
  node2 = node2.next;
  node2.next = new LinkedList(11);
  node2 = node2.next;



  node.next = new LinkedList(3);
  node2.next = node.next;
  node = node.next;
  node.next = new LinkedList(4);
  node = node.next;
  node.next = new LinkedList(5);
  node = node.next;
  printLinkedList(head);

  printLinkedList(head2);

  console.log("\n Return the intersection");
  intersectionHead = mergingLinkedLists(head, head2);
  printLinkedList(intersectionHead);





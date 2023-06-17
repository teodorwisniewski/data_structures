


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


// TC O(m+n) SC O(1)
function mergeLinkedLists(headOne, headTwo) {
    if (!headOne){
        return headTwo;
    } else if (!headTwo){
        return headOne;
    } else if (!headOne && !headTwo){
        return null;
    }
    let currentNodeOne = headOne;
    let currentNodeTwo = headTwo;
    let beforeCurrentNodeOne = null;
    while (currentNodeOne  && currentNodeTwo){
        if (currentNodeOne.value < currentNodeTwo.value){
            beforeCurrentNodeOne = currentNodeOne;
            currentNodeOne = currentNodeOne.next;
        } else{
            if (beforeCurrentNodeOne){
                beforeCurrentNodeOne.next = currentNodeTwo;
            }
            beforeCurrentNodeOne = currentNodeTwo;
            currentNodeTwo = currentNodeTwo.next;
            beforeCurrentNodeOne.next = currentNodeOne;
        } 
    }

    if (!currentNodeOne){
        beforeCurrentNodeOne.next = currentNodeTwo;
    }


    

    if (headOne.value < headTwo.value) {
        return headOne;
      } else {
        return headTwo;
    }
  }



  let head = new LinkedList(2);
  let node = head;
  node.next = new LinkedList(6);
  node = node.next;
  node.next = new LinkedList(7);
  node = node.next;
  node.next = new LinkedList(8);
  node = node.next;
  printLinkedList(head);


  let head2 = new LinkedList(1);
  node2 = head2;
  node2.next = new LinkedList(3);
  node2 = node2.next;
  node2.next = new LinkedList(4);
  node2 = node2.next;
  node2.next = new LinkedList(5);
  node2 = node2.next;
  node2.next = new LinkedList(9);
  node2 = node2.next;
  node2.next = new LinkedList(10);
  node2 = node2.next;



 

  printLinkedList(head2);

  console.log("\n Return the mergingLinkedLists");
  mergedHead = mergeLinkedLists(head, head2);
  printLinkedList(mergedHead);





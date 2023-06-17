


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
    recursiveMerge(headOne, headTwo, null);


    

    if (headOne.value < headTwo.value) {
        return headOne;
      } else {
        return headTwo;
    }
  }

  function recursiveMerge(p1, p2, before){
    if (!p1){
        before.next = p2;
        return;
    } else if(!p2){
        return;
    }
    if (p1.value < p2.value){
        recursiveMerge(p1.next, p2, p1);
    } else{
        if (before){
            before.next = p2;
        }
        before = p2;
        p2 = p2.next;
        before.next = p1;
        recursiveMerge(p1, p2, before);
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





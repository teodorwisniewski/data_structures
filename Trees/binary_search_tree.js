

class BinaryNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST{
    constructor(){
        this.root = null;
        this.left = null;
        this.right = null;
    }

    insert(value){
        let newNode = new BinaryNode(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        } 
        let currentNode = this.root;
        while (true){
            if (newNode === currentNode) return undefined;
            if (currentNode.value > newNode.value){
                if (currentNode.left === null){
                    currentNode.left = newNode;
                    return this;
                } 
                currentNode = currentNode.left;
            } else{
                if (currentNode.right === null){
                    currentNode.right = newNode;
                    return this;
                } 
                currentNode = currentNode.right;
            }

        }
    }

    // traverseAndPrint(node = this.root){
    //     if (node !== null){
    //         this.traverseAndPrint(node.left);
    //         console.log(node.value);
    //         this.traverseAndPrint(node.right);
    //     }
    // }
    traverseAndPrint() {
        let level = 0;
        let queue = [{node: this.root, level: 0}];
        let output = "";

        while(queue.length > 0) {
            let item = queue.shift();
            let node = item.node;


            if(item.level > level) {
                console.log(output);
                output = "";
                level += 1;
            }
            output += `${node.value} `;

            if(node.left !== null) {
                queue.push({node: node.left, level: item.level+1});
            }
            if(node.right !== null) {
                queue.push({node: node.right, level: item.level+1});
            }
        }
        console.log(output);
    }
}


let myTree = new BST();
myTree.root = new BinaryNode(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(52);
myTree.insert(82);
myTree.insert(18);
myTree.insert(27);

myTree.traverseAndPrint();



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

    contains(value){
        if (this.root === null){
            return false;
        }
        let temp = this.root
        while(temp){
            if (temp.value > value){
                temp = temp.left;
            } else if (temp.value < value){
                temp = temp.right;
            } else {
                return true
            }
        }
        return false
    }


    // TC O(log(n))
    findMinimumNode(){
        if (this.root === null){
            return undefined;
        }
        let temp = this.root
        let mimimumValue = temp.value
        while(temp){
            mimimumValue = temp.value;
            temp = temp.left;
        }
        return mimimumValue
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

console.log(`Checking for the existance node 21 => ${myTree.contains(21)}`)
console.log(`Checking for the existance node 18 => ${myTree.contains(18)}`)
console.log(`Checking for the existance node 23 => ${myTree.contains(23)}`)
console.log(`Checking for the existance node 88 => ${myTree.contains(88)}`)
console.log(`Checking for the existance node 27 => ${myTree.contains(27)}`)

console.log(`\n Find mimimum`)
console.log(`The minimum node is => ${myTree.findMinimumNode()}`)
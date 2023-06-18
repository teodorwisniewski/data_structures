


class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        let lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        this.length--;
    } 

    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1]
    }
}


const newArray = new MyArray();
newArray.push(0)
newArray.push(1)
newArray.push(2)
newArray.push(3)
newArray.push(4)
newArray.push(5)
newArray.push("Last item");
console.log(newArray.pop())
newArray.delete(2)
console.log(newArray)
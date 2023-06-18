


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
}


const newArray = new MyArray();
newArray.push("Hi")
newArray.push("there!")
newArray.push("Last item");
console.log(newArray.pop())
console.log(newArray)
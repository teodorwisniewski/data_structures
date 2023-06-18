


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
        
    }
}


const newArray = new MyArray();
newArray.push("Hi")
newArray.push("there!")
console.log(newArray)
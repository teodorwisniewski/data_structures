
class MyArray{
    constructor(){
        this.data = {};
        this.length = 0;
    }

    push(item){
        this.data[this.length] = item;
        this.length += 1; 
    }

    pop(){
        let itemToPop = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return itemToPop;
    }   

    remove(index){
        let itemToPop = this.data[index];
        this.shiftElements(index);
        this.length--;
        return itemToPop;
    }

    shiftElements(index){

        for (let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
    }
}

function reverse(str){
    if(!str instanceof String || str.length<2){

    }
    let reversedString = [];
    for (let i=str.length-1; i>=0;i--){
        reversedString.push(str[i]);

    }

    return reversedString.join('');
}

var myString = "Love";
let reversedString = reverse(myString);
console.log(myString);  // Outputs: 13
console.log(reversedString);  // Outputs: 13



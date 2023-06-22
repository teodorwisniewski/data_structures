// Feel free to add new properties and methods to the class.

// O(3N)
class MinMaxStack {
    constructor(){
      this.minMaxData = [];
      this.data = [];
    }
    // TC O(1) SC(1)
    peek() {
      return this.data[this.data.length - 1];
    }
    // TC O(1) SC(1)
    pop() {
      if(this.data.length === 0) return undefined;
      this.minMaxData.pop()
      let numberToPop = this.data.pop();
      return numberToPop;
    }
    // TC O(1) SC(1)
    push(number) {
      let newMinMax = {"minValue": number, "maxValue": number};
      if (this.minMaxData.length > 0){
        let lastMinMax = this.minMaxData[this.minMaxData.length - 1];
        newMinMax["minValue"] = Math.min(lastMinMax["minValue"], number);
        newMinMax["maxValue"] = Math.max(lastMinMax["maxValue"], number);
      }
      this.minMaxData.push(newMinMax)
      this.data.push(number);
    }
    // TC O(1) SC(1)
    getMin() {
      return this.minMaxData[this.minMaxData.length - 1]["minValue"];
    }
  // TC O(1) SC(1)
    getMax() {
      return this.minMaxData[this.minMaxData.length - 1]["maxValue"];
    }
    // TC O(N) SC(1)
    display_stack(){
      if (this.heigth==0){
          console.log("\n The stack is empty");
          return;
      }
      console.log("\nDisplaying the stack");
      console.log(`The stack top is ${this.top}`);

      for (let el of this.data){
        if (el === this.top){
          continue;
        }
        console.log(`The stack node is ${el}`);
      }
    }
  }


  
let myStack = new MinMaxStack();
myStack.push(5);
console.log(`\nThe stack getMin is ${myStack.getMin()}`);
console.log(`The stack getMax is ${myStack.getMax()}`);
console.log(`The stack peek is ${myStack.peek()}`);
myStack.push(7);
console.log(`\nThe stack getMin is ${myStack.getMin()}`);
console.log(`The stack getMax is ${myStack.getMax()}`);
console.log(`The stack peek is ${myStack.peek()}`);
myStack.push(2);
console.log(`\nThe stack getMin is ${myStack.getMin()}`);
console.log(`The stack getMax is ${myStack.getMax()}`);
console.log(`The stack peek is ${myStack.peek()}`);
console.log(`\nThe stack pop is ${myStack.pop()}`);
console.log(`The stack pop is ${myStack.pop()}`);
console.log(`The stack getMin is ${myStack.getMin()}`);
console.log(`The stack getMax is ${myStack.getMax()}`);
console.log(`The stack peek is ${myStack.peek()}`);

  
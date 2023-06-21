
class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    
    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }


    // O(1)
    set(key, value){
        let address = this._hash(key);
        console.log(`The hash function has returned ${address} address`)
        if (!this.data[address]){
            this.data[address] = [];
        } 
        this.data[address].push([key, value]);
        
    }

    // O(1) without collisions, O(n) with collisions
    get(key){
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (!currentBucket){
            return undefined
        }
        for (let key_value of currentBucket){
            if (key_value[0]===key){
                return key_value[1]
            }
        }
    }

    // O(n^2) - worse for traversing than arrays or lists
    keys() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }


}



let h = new HashTable(50);
h.set("Hello","World")
h.set(2, "2")
h.set(1, "1")
h.set(3, "3")
h.set(4, "4")
h.set("Hi","people");
h.set("John","Wayne");
console.log(h)
console.log("getting elements from hash table");
console.log(h.get("Hi"));
console.log(h.get(4));
console.log(h.get("foo"));
console.log("testing hash function");
console.log(h._hash("Teodor"));
console.log("priting keys");
console.log(h.keys())

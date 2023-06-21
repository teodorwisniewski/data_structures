
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

    // O(n) - worse for traversing than arrays or lists
    keys(){
        let keysArray = [];
        for (let i=0; i< this.data.length; i++){
            if(this.data[i]){
                let retrievedKey = this.data[i][0][0];
                // if (this.data[i].length > 1){

                // }
                keysArray.push(retrievedKey);
            }
        }
        return keysArray
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




function isValidSubsequence(array, sequence) {
    if (array.length<sequence.length){
        return false;
    }
    for (let el of array){
        if (sequence.includes(el)){
            console.log(` el ${el} is found both: array=${array } and seqObject= ${sequence}`)
            if (el!==sequence[0]){
                console.log(`The order of sequence is incorrect el ${el} is found both: array=${array } and seqObject= ${sequence}`)
                return false
            } else{
                sequence.shift();
            }
        }
    }
    if (sequence.length>0){
        return false;
    } 
    return true
}


console.log('\n isValidSubsequence');
myArray = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];
console.log(isValidSubsequence(myArray, sequence));

console.log('\n isValidSubsequence');
myArray = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [5, 1, 22, 22, 6, -1, 8, 10];
console.log(isValidSubsequence(myArray, sequence));


console.log('\n isValidSubsequence test3');
let test3 = {
    "array": [1, 1, 1, 1, 1],
    "sequence": [1, 1, 1],
    "expected_output": true,
  }
console.log(isValidSubsequence(test3.array, test3.sequence));


console.log('\n isValidSubsequence test4');
let test4 = {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, -1],
    "expected_output": true,
  }
console.log(isValidSubsequence(test4.array, test4.sequence));

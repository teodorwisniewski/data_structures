// TC O(n) SC O(1)
function isValidSubsequence(array, sequence) {
    let arrIndex = 0;
    let seqIndex = 0;
    while (arrIndex < array.length && seqIndex < sequence.length){
        if (array[arrIndex] === sequence[seqIndex]){
          seqIndex += 1;
        }
        arrIndex += 1;
    }
    if (seqIndex===sequence.length){
      return true
    }
    return false
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
    "expected_output": false,
  }
console.log(isValidSubsequence(test4.array, test4.sequence));

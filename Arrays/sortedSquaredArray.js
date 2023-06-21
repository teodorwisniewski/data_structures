
// // TC O(nlogn) | SC O(n)
// function sortedSquaredArray(array) {
    
//     for (let i=0; i<array.length; i++){
//         array[i] = Math.pow(array[i], 2)
//     }
//     return array.sort((a, b)=>a-b);
//   }

// // TC O(n) SC O(n)
// function sortedSquaredArray(array) {
//     let output_arr = Array(array.length);
//     let leftIndex = 0;
//     let rightIndex = array.length - 1;
//     let leftNum;
//     let rightNum;
//     for (let i=array.length-1; i>=0; i--){
//         leftNum = Math.pow(array[leftIndex], 2)
//         rightNum = Math.pow(array[rightIndex], 2)
        
//         if (leftNum >= rightNum){
//             output_arr[i] = leftNum;
//             leftIndex++;
//         }else if (leftNum < rightNum){
//             output_arr[i] = rightNum;
//             rightIndex--;
//         } else { //if (leftIndex === rightIndex)
//             output_arr[i] = rightNum;
//             rightIndex--;
//         } 
//     }
//     return output_arr;
// }


// TC O(n) SC O(n)
function sortedSquaredArray(array) {
    let output_arr = Array(array.length);
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    let leftNum;
    let rightNum;
    for (let i=array.length-1; i>=0; i--){
        leftNum = Math.pow(array[leftIndex], 2)
        rightNum = Math.pow(array[rightIndex], 2)
        
        if (leftNum >= rightNum){
            output_arr[i] = leftNum;
            leftIndex++;
        } else { //if (leftIndex === rightIndex)
            output_arr[i] = rightNum;
            rightIndex--;
        } 
    }
    return output_arr;
}
  
console.log("\n First test")
arr1 = [2, 3, 4, 5, 6, 8, 9];
console.log(sortedSquaredArray(arr1));

console.log("\n Second test")
arr2 = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
console.log(sortedSquaredArray(arr2));

console.log("\n Third test")
arr3 = [1, 1, 4, 9, 9, 9, 16]
console.log(sortedSquaredArray(arr3));

console.log("\n Fourth test")
arr4 = [-2, -1]
console.log(sortedSquaredArray(arr4));


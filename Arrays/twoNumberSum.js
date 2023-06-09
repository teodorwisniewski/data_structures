



// TC O(n^2) | SC O(1)
function twoNumberSum(array, targetSum) {
    for (let num of array){
        for (let num2 of array){
            if(num===num2){
                continue;
            }
            sumOfTwoElements = num + num2;
            if(sumOfTwoElements===targetSum){
                return [num, num2];
            }
        }
    }
    return [];
}


 let inputs = [3, 5, -4, 8, 11, 1, -1, 6]
 let targetSum = 10

 let output = twoNumberSum(inputs, targetSum);
 console.log(output)

 inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 targetSum = 2

 output = twoNumberSum(inputs, targetSum);
 console.log(output)
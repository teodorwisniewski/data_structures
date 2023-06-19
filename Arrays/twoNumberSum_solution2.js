



// TC O(n) SC O(n)
function twoNumberSum(array, targetSum) {
    let nums = {};
    for (let num of array){
        let potentialMatch = targetSum - num;
        if (potentialMatch in nums){
            return [potentialMatch, num]
        } else{
            nums[num] = true
        }
    }

    return [];
}


 let inputs = [3, 5, -4, 8, 11, 1, -1, 6]
 let targetSum = 10

 let output = twoNumberSum(inputs, targetSum);
 console.log(output)

 inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 targetSum = 10

 output = twoNumberSum(inputs, targetSum);
 console.log(output)
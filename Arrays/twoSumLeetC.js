

// var twoSum = function(nums, target) {
//     let numbers = {}
//     for (num of nums){
//         let potentialMatch = target - num;
//         if (potentialMatch in numbers){
//             return [nums.indexOf(potentialMatch), nums.indexOf(num)];
//         } else{
//             numbers[num] = true;
//         }
//     }
//     return []
// };

var twoSum = function(nums, target) {
    let numbers = {}
    for (let i=0;i<nums.length;i++){
        let num = nums[i];
        let potentialMatch = target - num;
        if (potentialMatch in numbers){
            return [nums.indexOf(potentialMatch), i];
        } else{
            numbers[num] = true;
        }
    }
    return []
};


nums = [2,7,11,15];
target = 9;
console.log(twoSum(nums, target))


nums = [1, 3, 3];
target = 6;
console.log(twoSum(nums, target))
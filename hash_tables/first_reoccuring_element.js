

// TC O(n) SC O(n)
function firstRecurringCharacter(input) {
  const recurringChar = {}
  
  for (let i = 0; i < input.length; i++) {
    el = input[i];
    if (recurringChar[el]){
        return el;
    }
    recurringChar[el] = true

  }

  return undefined
}

let arr1 = [1, 2, 3, 2, 4 , 6, 4];
console.log(firstRecurringCharacter(arr1));

let arr2 = [2, 1, 1, 2, 4 , 6, 4];
console.log(firstRecurringCharacter(arr2));

let arr3 = [1, 2, 3, 4, 5];
console.log(firstRecurringCharacter(arr3));
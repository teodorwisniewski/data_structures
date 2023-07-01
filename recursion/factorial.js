


function factorial(n){

    if(n===1){
        return n;
    }
    return n * factorial(n-1)
}


console.log(`Factorial of n=${1} is n!=${factorial(1)}`)
console.log(`Factorial of n=${2} is n!=${factorial(2)}`)
console.log(`Factorial of n=${3} is n!=${factorial(3)}`)
console.log(`Factorial of n=${4} is n!=${factorial(4)}`)
console.log(`Factorial of n=${5} is n!=${factorial(5)}`)

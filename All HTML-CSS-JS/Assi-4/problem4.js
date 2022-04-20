// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4]
// Sample Output - 24

var arr = [2,3,4,3,4];

var res = arr.reduce(function(ac,cv){
    return ac*cv
})
console.log(res)

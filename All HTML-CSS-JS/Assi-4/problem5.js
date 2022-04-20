// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4

var arr = [1,2,3,4,5]

var res = arr.filter(oddSum)

function oddSum(num){
    return num%2==1;

}

var sum = res.reduce(function sumofodd(ac,cv){
    return ac+cv;

})
console.log(sum)
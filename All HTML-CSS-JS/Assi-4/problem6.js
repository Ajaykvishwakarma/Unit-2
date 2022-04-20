// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

var arr = [1,2,3,4,5,6]

 var res = arr.filter(function (num){
   return num%3==0;
})

var mul = []

res.forEach(cubeOfNum)
function cubeOfNum(num)
{
    mul.push(num**3)
}

var result = mul.reduce(function sum(ac,cv){
     return ac+cv;
 })
 console.log(result)

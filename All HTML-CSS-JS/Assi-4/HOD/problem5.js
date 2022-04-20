// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]

var arr = [2, 4, 5, 3, 6, 8];
var res = []
arr.forEach(function (ele, index, array){
    if(index%2==0){
        res.push(ele)
    }
})
console.log(res)
